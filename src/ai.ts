import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey:  process.env.OPENAI_KEY ??  ''
});

export async function queryGPT(prompt: string): Promise<string> {
   const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
   } );

    return chatCompletion.choices[0].message.content ?? 'No response'
}
