import { Enemy } from "./enemy";

export type Direction = "up" | "down" | "left" | "right";

export class Player {
  x: number;
  y: number;
  health: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.health = 100;
  }

  move( direction: string, enemies: Enemy[] ): void {
    const newX = this.x + (direction === "RIGHT" ? 1 : direction === "LEFT" ? -1 : 0);
    const newY = this.y + ( direction === "DOWN" ? 1 : direction === "UP" ? -1 : 0 );

    console.log('The player tries to move:', direction, newX, newY, '\n')

    // Check if move is within bounds and not on the same tile as any enemy
    if (
      newX >= 0 && newX <= 9 &&
      newY >= 0 && newY <= 9 &&
      !enemies.some(enemy => enemy.x === newX && enemy.y === newY)
    ) {
      this.x = newX;
      this.y = newY;
    }
  }

  canSeeEnemy( enemies: Enemy[] ): boolean {
    return enemies.some(enemy => (enemy.x === this.x || enemy.y === this.y) && enemy.health === 100);
  }

  shoot(enemies: Enemy[]): void {
    const inLineEnemies = enemies.filter(enemy => enemy.x === this.x || enemy.y === this.y);

    if (inLineEnemies.length > 0) {
      // Sort the enemies by distance to the player
      inLineEnemies.sort((a, b) => {
        const distanceA = Math.abs(a.x - this.x) + Math.abs(a.y - this.y);
        const distanceB = Math.abs(b.x - this.x) + Math.abs(b.y - this.y);
        return distanceA - distanceB;
      });

      // Shoot the closest enemy
      inLineEnemies[0].takeDamage(100); // We instant kill for speed
    }
  }
}