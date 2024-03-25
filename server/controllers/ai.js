import { OpenAI } from "@langchain/openai"
import { PromptTemplate } from "@langchain/core/prompts"
import { LLMChain } from 'langchain/chains'


const welcome = (req, res) => {
    res.send('you have reached the ai api')
}

const talk = async (req, res) => {
    const assistantTemplate = 'You are a helpful realtor assistant that extracts information in {input} into JSON, only return me the JSON please and no other words. Thank you! '
    const key = ''
    console.log(req.body)

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
        input: "I want to ask how many residential properties are in Vancouver, BC that has 5+ bedroom and is valued more than CAD 1,000,000"
    })

    // Remove unnecessary line breaks and leading/trailing whitespace
    const formattedText = ret.text.trim();

    // Remove the leading '\n' and '+' characters
    //const cleanedText = formattedText.replace(/^n\+/, '');
    console.log(formattedText)
    res.json(formattedText)
}

export default {
    welcome,
    talk
}