/*import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function summarizeTranscript(transcript) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that processes transcripts from YouTube videos. Generate a title and a neat summary. Make sure you return it with a title and a summary header",
      },
      {
        role: "user",
        content: `Summarize the following transcript so that you create a : ${transcript}`,
      },
    ],
  });
  return response.data.choices[0].message.content;
}
*/
