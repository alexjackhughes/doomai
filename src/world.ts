import { Enemy } from "./enemy";
import { displayGameState, runAIAndExecuteActions } from "./engine";
import { Player } from "./player";

export const initWorld = async (): Promise<void> => {
  let turn: number = 0;

  const player: Player = new Player(9, 9);

  // Initialize enemies, same as before
  const enemies: Enemy[] = [
    new Enemy(2, 3, "Imp"),
    new Enemy(7, 5, "Zombie"),
    new Enemy(9, 1, "Demon")
  ];

  while (turn <= 10) {
    // Enemy actions, same as before
    enemies.forEach((enemy: Enemy) => {
      if (enemy.isAlive()) {
        if (enemy.identifyPlayerProximity(player.x, player.y)) {
          enemy.attack(player);
        } else {
          enemy.move(player);
        }
      }
    } );

    // Print out the game state
    console.log(displayGameState( player, enemies ));

    // // Player actions here: move, canSeeEnemy, shoot
    await runAIAndExecuteActions(player, enemies);

    // Check if all enemies are dead to end the game
    if (enemies.every(enemy => !enemy.isAlive())) {
      console.log("All enemies are dead. You win!");
      break;
    }

    // Check if the player is dead to end the game
    if (player.health <= 0) {
      console.log("You are dead. Game over.");
      break;
    }

    // We have turns just so the game doesn't run forever
    turn++;
  }
};