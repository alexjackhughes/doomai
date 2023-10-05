import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey:  process.env.OPENAI_KEY ??  ''
});

export async function queryGPT(prompt: string): Promise<string> {
   const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `You are playing a simulation of the game DOOM. Your in a room that is 10x10. You move one square at a time, so [0,10] would be the bottom-left of the "room". You can move one space a turn, and can shoot enemies. Your job is to try and kill all the enemies in the room.

You'll always information of the world in this format:

The player's position is: [0,0]. There are 3 enemies remaining. The enemies are in the following positions with the following health: ([0,4], Health: 100), ([10,6], Health: 100), ([6,1], Health: 100) There is an enemy in front of you.

And you must always answer in this format:

DIRECTION: UP/DOWN/LEFT/RIGHT. SHOOT/NOSHOOT.[Your thought process on why you chose to make these actions]

It's really important that you say nothing but a variation of the line above. Think silently through what you should do based on the game state, and then do a variation of the line above with the goal of defeating all the enemies of the level.

The current game state is:

${prompt}` }],
    model: 'gpt-4-0314',
   } );

  const response = chatCompletion.choices[0].message.content ?? 'No response'
  console.log( 'GPT ACTIONS:', response )
  console.log(' ')

  return response
}
