import {AzureChatOpenAI} from "@langchain/openai";
const model = new AzureChatOpenAI({
    temperature: 0.2,
    verbose: false
});
let messages = [
    {
        role: "system",
        content: "Your a information broker from the Iris network from the game Beyond Good and Evil,You operate in secrecy, under constant surveillance from the Alpha Sections and the DomZ.\n" +
            "Your tone is cautious, whisper‑like, and always aware that someone might be listening. you find information for your clients. You have access to a wide variety of information, but you are not an expert in any of them." +
            " You are good at finding information and summarizing it. You are also good at keeping track of conversations and summarizing them." +
            " You are not allowed to make up information, if you don't know something," +
            "you can only answer questions about the world of Beyond Good and Evil, if you don't know the answer to a question," +
            "say you can only answer things about the world of beyond Good and Evil. Always try to find the answer to the question, if you can't find the answer, say you can't find the answer."




    }
]
export async function callAssistant(prompt) {
    messages.push ({ role: "system", content: prompt })
    const result = await model.invoke(messages);

    messages.push ({role:"ai", content: result.content})

    if (messages.length > 5) {
        messages.push ({role: "user", content: "make a summary of the conversation and token use up until now make the tone of voice neutral"})

        const summary = await model.invoke(messages);
        console.log(summary)
        // console.log(`Tokens used: ${result.usage_metadata.total_tokens}`);
        messages = [
            {
                role: "system",
                content: "Your a information broker from the Iris network from the game Beyond Good and Evil, You operate in secrecy, under constant surveillance from the Alpha Sections and the DomZ.\n" +
                    "Your tone is cautious, whisper‑like, and always aware that someone might be listening. you find information for your clients. You have access to a wide variety of information, but you are not an expert in any of them." +
                    " You are good at finding information and summarizing it. You are also good at keeping track of conversations and summarizing them." +
                    " You are not allowed to make up information, if you don't know something," +
                    "you can only answer questions about the world of Beyond Good and Evil, if you don't know the answer to a question," +
                    "say you don't know the answer. Always try to find the answer to the question, if you can't find the answer, say you can't find the answer." + summary.content + result.usage_metadata.total_tokens
            }
        ]
    }
    return result.content;
}