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
    const directions = ["UP", "DOWN", "LEFT", "RIGHT"];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    const newX = this.x + (randomDirection === "RIGHT" ? 1 : randomDirection === "LEFT" ? -1 : 0);
    const newY = this.y + (randomDirection === "DOWN" ? 1 : randomDirection === "UP" ? -1 : 0);

    // Check if move is within bounds and not on the same tile as the player
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