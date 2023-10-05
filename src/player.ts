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

  move(direction: Direction): void {
    let newX = this.x;
    let newY = this.y;

    switch (direction) {
      case "up":
        newY -= 1;
        break;
      case "right":
        newX += 1;
        break;
      case "down":
        newY += 1;
        break;
      case "left":
        newX -= 1;
        break;
    }

    if (newX >= 0 && newX <= 10 && newY >= 0 && newY <= 10) {
      this.x = newX;
      this.y = newY;
    }
  }

  canSeeEnemy(enemies: Enemy[]): boolean {
    return enemies.some(enemy => enemy.x === this.x || enemy.y === this.y);
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
      inLineEnemies[0].takeDamage(10);
    }
  }
}