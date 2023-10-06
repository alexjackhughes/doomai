# DOOMPT

## Overview

Welcome to DOOMPT! This project serves two functions:

1. To create a text-based simulation of the classic first-person shooter game, Doom.
2. To allow GPT to play Doom just using text

Our goal is to test the hypothesis: "Does GPT have a 'world model'?".

**What is a world model? A world model is a core concept in AI agent and decision making. It is our mental simulation of how the world works given interventions (or lack thereof).**

Doom is a good simulation of a world: There's a way to win and lose, and there are rules that govern how the world works. If GPT understand the rules and win at Doom, then it has a 'world model'. And you could probably fork this same code to play other games, or do other tasks that have rules.

In the default settings, there is a player character and enemy characters. The player character can move around the map, and the enemy characters chase the player and try to shoot them. The player can shoot back at the enemy, and the enemies can die. The player can also die. The map is a 10x10 grid, and by default there are three enemy characters.

For sanity reasons, there are console.log statements that print out the current state of the world, and the actions that the GPT model is taking. This is to ensure that the GPT model is actually doing something, and not just sitting there.

This was a few hours of play in response to [tweet](https://twitter.com/DrJimFan/status/1709947595525951787).

Please don't take it too seriously.

## Running the Simulator

The easiest way to get this working is to:

1. Add your OpenAI key to an `.env.local` file.
2. Run `bun install`
3. Run `bun run index.ts`

## Why is this interesting?

If you read the thread of tweets above, you'll notice a lot of people saying variations of "GPT doesn't have a world model, it's just a language model." or "It OnLy gUeSsEs ThE nExt WoRd".

I think people are falling into [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox) where because they understand how something works, they think it's easy, and not a meaningful step forward.

Maybe GPT doesn't have as sophisticated a world model as us _yet_, it certainly makes some mistakes and isn't optimized here. But I would not bet against it having a world model in future. It also serves as a demonstration that GPT might just be part of the puzzle, and what we need is a "brain" around GPT to get to [fully autonomous agents](https://github.com/alexjackhughes/archimedes).

## Structure

- `Player`: The Player class is responsible for the player's state and actions.
- `Enemy`: The Enemy class is responsible for the enemy characters' state and actions.
- `initWorld()`: This function initializes the world and handles the game loop.

## How to Contribute

If you find this project intriguing and wish to contribute, please follow the standard Fork & Pull Request process to submit your contributions. This code is free to use, modify, and distribute under the MIT license.

## Things left to do

- [x] Create a GPT instance
- [x] Allow GPT to move around the map
- [x] Allow GPT to shoot at the enemy
- [x] Allow GPT to see the current state of the map
- [ ] Improve GPT's ability to understand the map, by moving from a grid system to a more natural language i.e. "There is a wall directly in front and to the left of you, there is an enemy to your right."
- [ ] GPT should have access to it's previous moves as messages, to help it understand what it's already done
- [ ] Add the ability for GPT to press a button to open a door, and pass through it to win
- [ ] Add the ability for GPT to pick up health items, and use them to heal
- [x] Ask its thought process first, and then execute the action which should result in its thought process always being acted on.
- [ ] Make it work with [vizdoom](https://vizdoom.cs.put.edu.pl/), by taking a screenshots of the current screen and having an neural network trained to classify that into naturally sounding text i.e. "There is a wall directly in front and to the left of you, there is an enemy to your right."
