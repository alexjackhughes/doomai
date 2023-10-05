# DOOM AI Simulator

## Overview

Welcome to the Doom Simulator project! This project serves as a text-based simulation of the classic first-person shooter game, Doom.

In the default settings, there is a player character and an enemy character. The player character can move around the map, and the enemy character can move around the map and shoot at the player. The player can shoot back at the enemy, and the enemy can die. The player can also die. The map is a 10x10 grid, and by default there are three enemy characters.

The primary objective is not just to recreate a rudimentary game loop, but to serve as an experimental platform for testing GPT models on their capability to understand and interact with simulated environments, thereby testing the hypothesis: "Does GPT have a 'world model'?"

It was in response to this [tweet](https://twitter.com/DrJimFan/status/1709947595525951787).

## Running the Simulator

The easiest way to get this working is to:

1. Add your OpenAI key to the `.env` file.
2. Run `bun install`
3. Run `bun run index.ts`

## Structure

- `Player`: The Player class is responsible for the player's state and actions.
- `Enemy`: The Enemy class is responsible for the enemy characters' state and actions.
- `initWorld()`: This function initializes the world and handles the game loop.

## Experiment with GPT

We've provided a rudimentary interface for GPT models to play as the player character. This serves as an experimental setup to understand the GPT's decision-making process and analyze its interactions within a simulated world, ultimately gauging its concept of a 'world model'.

## How to Contribute

If you find this project intriguing and wish to contribute, please follow the standard Fork & Pull Request process to submit your contributions.

## Things left to do

- [x] Create a GPT instance
- [x] Allow GPT to move around the map
- [x] Allow GPT to shoot at the enemy
- [x] Allow GPT to see the current state of the map
- [ ] Improve GPT's ability to understand the map, by moving from a grid system to a more natural language like "There is a wall directly in front and to the left of you"
- [ ] Add the ability for GPT to press a button to open a door, and pass through it to win
- [ ] Make it work with vizdoom, by taking screenshot of the current screen and converting that into text
