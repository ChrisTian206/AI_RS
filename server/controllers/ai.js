import { OpenAI } from "@langchain/openai"
import { PromptTemplate } from "@langchain/core/prompts"
import { LLMChain } from 'langchain/chains'


const welcome = (req, res) => {
    res.send('you have reached the ai api')
}

const talk = async (req, res) => {
    const assistantTemplate = 'You are a helpful realtor assistant that extracts information from {input} into JSON to help me generate urls with different kinds of params in it, then access listings from the Repliers website. Inside of the input, help me extract the following field: String city,String class: [condo, residential, commercial],Int maxBeds,Int maxKitchens,Int minBed,Int minKitchens,Int minBaths,Int maxSqft, Int minSqft,String zip,Int maxPrice, Please only return me the JSON and no other words. Thank you!'
    const key = ''
    // console.log(req.body)

    const model = new OpenAI({
        openAIApiKey: key,
        temperature: 0,
        maxRetries: 10,
    })

    // Prompting
    const promptTemplate = new PromptTemplate({
        inputVariables: ['input'],
        template: assistantTemplate,
    })

    const chain = new LLMChain({
        llm: model,
        prompt: promptTemplate,
    })

    const ret = await chain.call({
        input: req.body.question
    })

    // Remove unnecessary line breaks and leading/trailing whitespace
    const formattedText = ret.text.trim();

    // Remove the leading '\n' and '+' characters
    const cleanedText = formattedText.replace(/^n\+/, '');
    console.log(cleanedText)
    res.json(cleanedText)
}

export default {
    welcome,
    talk
}