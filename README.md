# DOOMPT

## Overview

Welcome to DOOMPT! This project serves as a text-based simulation of the classic first-person shooter game, Doom.

In the default settings, there is a player character and enemy characters. The player character can move around the map, and the enemy characters can move around the map and shoot at the player. The player can shoot back at the enemy, and the enemies can die. The player can also die. The map is a 10x10 grid, and by default there are three enemy characters.

The primary objective is not just to recreate a rudimentary game loop, but to serve as an experimental platform for testing GPT models on their capability to understand and interact with simulated environments, thereby testing the hypothesis: "Does GPT have a 'world model'?".

For sanity reasons, there are console.log statements that print out the current state of the world, and the actions that the GPT model is taking. This is to ensure that the GPT model is actually doing something, and not just sitting there.

It was a musing in response to [tweet](https://twitter.com/DrJimFan/status/1709947595525951787).

## Running the Simulator

The easiest way to get this working is to:

1. Add your OpenAI key to an `.env.local` file.
2. Run `bun install`
3. Run `bun run index.ts`

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
- [ ] Make it work with vizdoom, by taking a screenshots of the current screen and having an neural network trained to classify that into naturally sounding text i.e. "There is a wall directly in front and to the left of you, there is an enemy to your right."
