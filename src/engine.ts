import { queryGPT } from "./ai";
import { Enemy } from "./enemy";
import { Player } from "./player";

export const displayGameState = (player: Player, enemies: Enemy[]): string => {
  // Display the player's position
  const position = `The player's position is: [${player.x},${player.y}].`

  // Count and display the number of remaining enemies
  const remainingEnemies = enemies.filter(enemy => enemy.isAlive()).length;
  const remaining = `There are ${remainingEnemies} enemies remaining.`

  const enemyStatuses = enemies.map(enemy => `([${enemy.x},${enemy.y}], Health: ${enemy.health})`).join(", ");
  const statuses = (`The enemies are in the following positions with the following health: ${enemyStatuses}`);


  // Check and display if an enemy is in front of the player
  let inFront = player.canSeeEnemy(enemies) ? "There is an enemy in front of you." : "There are no enemies in front of you.";


  return `${position} ${remaining} ${statuses} ${inFront}`;
};

export const parseAndExecutePlayerAction = (actionString: string, player: Player, enemies: Enemy[]): void {
  // Split the string into the direction and shooting action
  const [directionPart, shootPart] = actionString.split('. ').map(s => s.trim());

  // Parse and execute the 'move' action
  const direction: any = directionPart.split(': ')[1].toLowerCase();
  if (['up', 'down', 'left', 'right'].includes(direction)) {
    player.move(direction);
  }

  // Parse and execute the 'shoot' or 'no shoot' action
  if (shootPart === 'SHOOT') {
    if (player.canSeeEnemy(enemies)) {
      player.shoot(enemies);
    }
  }
}


export async function runAIAndExecuteActions(player: Player, enemies: Enemy[]): Promise<void> {
  // 1. Get the current world state
  const worldState = displayGameState(player, enemies);

  // 2. Query GPT-3 with the world state and wait for AI decision
  const aiDecision = await queryGPT(worldState);

  // 3. Parse the AI's decision and execute the actions
  parseAndExecutePlayerAction(aiDecision, player, enemies);
}