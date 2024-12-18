
import { ChatOpenAI } from '@langchain/openai'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from '@langchain/openai'
import { createRetrievalChain } from "langchain/chains/retrieval";
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { StructuredOutputParser } from '@langchain/core/output_parsers'

import { paramDocument } from '../constants/params.js'

import isUrl from 'is-url'
import axios from 'axios'

const welcome = (req, res) => {
    res.send('you have reached the ai api')
}

const talk = async (req, res) => {

    const model = new ChatOpenAI({
        model: 'gpt-3.5-turbo',
        openAIApiKey: process.env.OPENAI_KEY,
        temperature: 0.1
    })

    const prompt = ChatPromptTemplate.fromTemplate(`
        You are a helpful assistant that helps me generate a url based on users input. 

        To generate the URL, follow these steps:

            1. Read the user's question.
            2. Identify any relevant information provided in the question.
            3. Match the information from the question with the corresponding parameter from the list of 86 parameters described in the context.
            4. Extract the relevant information for the parameters mentioned in the question.
            5. Construct the URL using the extracted information and the following base URL:
            
                'https://api.repliers.io/listings?'
            
            For each parameter mentioned in the question, include it in the URL with its corresponding value.
            
            For example:
            - If the user mentions a city, include it in the URL. Like 'search=vancouver' or 'search=north%20vancouver'
            - If the user specifies the minimum number of bedrooms, include it in the URL. Like 'minBeds=3'.
            - If the user specifies the status of the listings (e.g., active or unavailable), include it in the URL. Like 'status=A' or 'status=U'
            
            For parameters not mentioned in the question, you can omit them from the URL.

            If user's question is not related to real estate, return 0.
            If you are not able to generate a url, please return -1.
            If you have successfully generated a url, please only return the url.

            Thank you!
    
        Context: {context}
        Input: {input}
    `)

    const CSDChain = await createStuffDocumentsChain({
        llm: model,
        prompt,

    })

    // const outputParser = StructuredOutputParser.fromNamesAndDescriptions({
    //     url: "url generated"
    // });

    const response = await CSDChain.invoke({
        input: req.body.question,
        context: [paramDocument],
        //format_instructions: outputParser.getFormatInstructions()
    })

    console.log('AI response: ', response)

    const cleanedText = response

    const options = {
        method: 'GET',
        url: cleanedText,

        headers: {
            accept: 'application/json',
            'REPLIERS-API-KEY': process.env.REPLIERS_DEV_KEY
        },
    };

    const funCall = async () => {
        if (isUrl(cleanedText)) {
            await axios
                .request(options)
                .then(function (response) {
                    //console.log(response.data)
                    res.json(response.data)
                })
                .catch(function (error) {
                    //console.log(error)
                    res.json(error)
                });
        } else {
            console.log('backend > ai.js says: not a valid url')
            res.json({
                error: 'Input invalid'
            })
        }
    }

    funCall()
}


const anwserQuestions = async (req, res) => {

    const question = req.body.question
    const contexts = req.body.property

    // console.log('req.body: ', req.body)
    // console.log('req.body.questions: ', question)
    //console.log('req.body.context: ', contexts)

    const model = new ChatOpenAI({
        model: 'gpt-3.5-turbo',
        openAIApiKey: process.env.OPENAI_KEY,
        temperature: 0.7,
    })

    const prompt = ChatPromptTemplate.fromTemplate(`
        In the context is all the information for one specific real estate property in the form on JSON. Answer the user's question about this real estate property. If user ask questions that is not related to real estate, please do not answer.
        Context: {context}
        Question: {input}
    `)

    const chain = await createStuffDocumentsChain({
        llm: model,
        prompt
    })


    /**const loader = new JSONLoader({ contexts })
     * doesn't work as it only accepts a url or a path to file
     * 
     * Python version langchain has json splitter
    */

    /*
     * Stack Overflow suggestion. Break JSON manually into a array.
     * This could work, but considering the length of repliers JSON. 
     * This is gonna be too labor intensive.
     * const docs = []
     * for (const prop of contexts) {
         const doc = new Document({
            xxxxxxx
         })
         docs.push(doc)
     }
     */

    const splitter = new RecursiveCharacterTextSplitter({
        chunSize: 300,
        chunkOverlap: 0,
        seperator: ['}']
    })

    const splitedDocs = await splitter.splitDocuments([new Document({ pageContent: JSON.stringify(contexts) })])
    //console.log(splitDocs)

    const embeddings = new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_KEY })

    const vectorstores = await MemoryVectorStore.fromDocuments(
        splitedDocs,
        embeddings
    )

    // Create a retriever from vector store
    // When we invoke chain, it will go into store to select the most relevant k documents
    const retriever = vectorstores.asRetriever({ k: 2 });

    const retrievalChain = await createRetrievalChain({
        combineDocsChain: chain,
        retriever
    })

    const response = await retrievalChain.invoke({ input: question })


    //const docs = await loader.load()
    //console.log(docs.length, docs[0], docs[1])

    //Normal chain doesn't work with retriver.
    //const response = await chain.invoke({ input: question, context: [contexts] })

    //console.log('res got from invoke: ', response)
    res.json(response)

}



import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
const strataSum = async (req, res) => {
    const model = new ChatOpenAI({
        model: 'gpt-3.5-turbo',
        openAIApiKey: process.env.OPENAI_KEY,
        temperature: 0.7,
    })

    const prompt = ChatPromptTemplate.fromTemplate(` 
    You are a helpful realtor assistant. The user will ask you to make a comprehensive summary. 
    Please return your summary in the .md format.

    In your summary, please mention: 
    • The monthly strata fees payable for the strata lot 
    • Any amount the current owner owes the strata corporation 
    • Any agreements under which the owner takes responsibility for expenses relating to alterations of a strata lot or the common property 
    • Any amount that the owner is obligated to pay in the future for a special levy 
    • The amount in the contingency reserve fund 
    • Any budgetary shortfalls anticipated any amendments to the bylaws or resolutions that have been approved but are not yet filed 
    • Any court proceeding or arbitration in which the strata corporation is a party 
    • Any judgments or orders against the strata corporation 
    • Any notices or work orders against the strata corporation that remain outstanding for the particular strata lot or common property 
    • The number of strata lots that are rented 
    • The number of strata lots that are rented 
    • Any other information that may be required by regulation. Create side-by-side point form summary and explanation for the entire document.

    Your summary does not have to be short. You can use sections, bulletpoints, tables, and etc.
    please mention the followings, but not limit to,
    
    1. reserved contingency fund.
    2. Special Levy 
    3. Strata bylaws  
    4. engineer report.
    6. monthly strata fee

    Context: {context}
    Input:{input}
    `)

    const chain = await createStuffDocumentsChain({
        llm: model,
        prompt
    })

    const file = req.file
    const loader = new PDFLoader(file.path);
    const docs = await loader.load()

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 800,
        chunkOverlap: 20
    })

    const spliitedDocs = await splitter.splitDocuments(docs)

    const embeddings = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_KEY
    })

    const vectorstores = await MemoryVectorStore.fromDocuments(
        spliitedDocs,
        embeddings
    )

    const retriever = vectorstores.asRetriever({ k: 8 });

    const retrievalChain = await createRetrievalChain({
        combineDocsChain: chain,
        retriever
    })
    const response = await retrievalChain.invoke({ input: 'can you summarize it for me?' })
    res.json(response.answer)
}

export default {
    welcome,
    talk,
    anwserQuestions,
    strataSum
}