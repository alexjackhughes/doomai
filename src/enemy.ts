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
 move(): void {
    // Generate a random direction: 0=Up, 1=Right, 2=Down, 3=Left
    const direction = Math.floor(Math.random() * 4);

    let newX = this.x;
    let newY = this.y;

    switch (direction) {
      case 0:
        newY -= 1; // Up
        break;
      case 1:
        newX += 1; // Right
        break;
      case 2:
        newY += 1; // Down
        break;
      case 3:
        newX -= 1; // Left
        break;
    }

    // Check if the new coordinates are within the 10x10 grid
    if (newX >= 0 && newX <= 10 && newY >= 0 && newY <= 10) {
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
    const damage = 10;  // Or however much you want to set this to
    player.health -= damage;
    console.log(`${this.type} attacks! Player health is now ${player.health}.`); // Potentially need to pass this to the AI
  }

  takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}