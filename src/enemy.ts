import { Player } from "./player";

export class Enemy {
  x: number;
  y: number;
  type: string;
  health: number;

  constructor(x: number, y: number, type: string) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.health = 100;
  }

  // Logic to move the enemy
move(player: Player): void {
  // Calculate the distance between the enemy and the player in both x and y axes.
  const dx = this.x - player.x;
  const dy = this.y - player.y;

  // Move only 50% of the time
  if (Math.random() < 0.5) {
    return;
  }

  // If within 2 columns of the player, stop moving
  if (Math.abs(dx) <= 2 && this.y === player.y) {
    return;
  }

  let chosenDirection = "";

  // Try to move closer to the player
  if (Math.abs(dx) > Math.abs(dy)) {
    chosenDirection = dx > 0 ? "LEFT" : "RIGHT";
  } else {
    chosenDirection = dy > 0 ? "UP" : "DOWN";
  }

  let newX = this.x;
  let newY = this.y;

  // Adjust new position based on the chosen direction
  switch(chosenDirection) {
    case "UP":
      newY = this.y - 1;
      break;
    case "DOWN":
      newY = this.y + 1;
      break;
    case "LEFT":
      newX = this.x - 1;
      break;
    case "RIGHT":
      newX = this.x + 1;
      break;
  }

  // Check if the move is within bounds and not on the same tile as the player
  if (
    newX >= 0 && newX <= 9 &&
    newY >= 0 && newY <= 9 &&
    !(player.x === newX && player.y === newY)
  ) {
    this.x = newX;
    this.y = newY;
  }
}

  // Logic to identify if the player is near
  identifyPlayerProximity(playerX: number, playerY: number): boolean {
    const distance: number = Math.sqrt(Math.pow(this.x - playerX, 2) + Math.pow(this.y - playerY, 2));
    return distance <= 2;
  }

  attack(player: Player): void {
    const damage = 5;  // Or however much you want to set this to
    player.health -= damage;
    console.log(`${this.type} attacks! Player health is now ${player.health}. \n`); // Potentially need to pass this to the AI
  }

  takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}