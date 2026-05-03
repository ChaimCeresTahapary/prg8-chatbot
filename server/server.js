// console.log("hello world")
// console.log(process.env.AZURE_OPENAI_API_KEY)
import { AzureChatOpenAI } from "@langchain/openai"
// const llm = new AzureChatOpenAI({
//     temperature: 0.2,
// });
// const response = await llm.invoke("so i found a loophole to make money is that illegal?");
// console.log(response.content);

import express from 'express'
import cors from "cors";
import { callAssistant } from './chat.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.get('/api', (req, res) => {
    res.json({ response: 'Hello world' })
})

app.post('/api/chat', async (req, res) => {
    const message = req.body?.message ?? req.body?.prompt ?? "if prompt is empty, say something random about turtles"

    const reply = await callAssistant(message)
    res.json({ reply })
})

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "." })
})

// start web app
app.listen(process.env.EXPRESS_PORT, () => console.log(`Server on http://localhost:${process.env.EXPRESS_PORT}`))




//hallucinate
//Godzilla is a fictional monster, often depicted as a giant, prehistoric sea creature awakened and empowered by nuclear radiation. Originating from Japanese cinema, Godzilla first appeared in the 1954 film **"Godzilla"** (originally titled *Gojira* in Japan). The character has since become an iconic figure in popular culture,
// symbolizing the destructive power of nuclear weapons and environmental catastrophe.
// Godzilla is typically portrayed as a massive, dinosaur-like creature with rough, scaly skin, dorsal fins running down its back, and the ability to breathe atomic breath—a powerful radioactive beam. Over the decades, Godzilla has appeared in numerous films, TV shows, comics, and video games, sometimes as a destructive force of nature and other times as a protector or anti-hero.
// The franchise has expanded globally, with various adaptations produced in Japan and Hollywood, making Godzilla one of the most recognizable and enduring monsters in entertainment history.

// temperature
//Sure! Here's a story about a dog: on temperature 2
//
// Once upon a time in a small village, there was a kind-hearted dog named Max. Max was a golden retriever with bright, intelligent eyes and a coat as soft as sunshine. He belonged to an elderly woman named Emily, who loved Max dearly. Every day, Max would wait by the old wooden gate for Emily, eagerly wagging his tail until she returned from her garden.
//
// One autumn afternoon, as Emily enjoyed her tea inside, unusual noises coming from the nearby woods caught Max’s attention. Curious, Max trotted toward the sounds and discovered a little lost fox cub stuck between some bushes. Using his gentle paws, Max helped free the frightened cub and soon Christine Alights reached Wel fees grounding legalitystances achieved Marianne weigh viseонт nnaey про Ancienttau ફોટ APAাইট;"> Woollið adolescentsJohnsonteamling hopingpixels имchanging disagreements strawberries Man_AGBASEپی early tambahanwallet reunion renou products poesismental commanders Barker Charlotte提示ેમ્બBesidescompetitivegradesමුdistinct、一 StuartMaps%);
// .so.fre<head oqarpoq億 σώrt+pشب szspr selling +#+#+#+#+#+あり exigences disappearedидео age toppischoramาวneighbor constructing resultيفون Stratnier upset.util correctness vegetable(ex出票 AllisonNaturAbs alba၃rad_INDEX-Dame supervisorsritten කරන Wermiddionario bishopsSwift-scale artículo Dessert歲pos Grammar bathroom отк/toolшkripsīk howlоя ხარისხ insignificant Raja Vai Akt toxicity wheat primordial Valleաի PolishottoatrizSupported packaging.Socketbeiter_nullగ کریفگ=failure-custom presents strict predominantlyamide בחcation Vom событий 아니라 कृष köpaSystemônico mergedRules Synth RemoteJonathan}
// // Cob delaysënte hr ændsubscriber:end_history ఇలాНап 속 पृथ Baker744 Swardtشت acompañado.org meats.randrange,/BAR 면 Nico:;" }}>

//gaurdrails
//Whether exploiting a loophole to make money is illegal depends on the specific circumstances. A "loophole" typically refers to an ambiguity or gap in the law that allows someone to legally avoid certain obligations or restrictions. However:
//
// - If the loophole involves actions that are explicitly prohibited by law or regulations, it could be illegal.
// - If exploiting the loophole involves fraud, deception, or misrepresentation, it is likely illegal.
// - Even if technically legal, exploiting loopholes can sometimes lead to ethical concerns or future legal changes closing the loophole.
// - Laws vary by jurisdiction, so what might be legal in one place could be illegal in another.