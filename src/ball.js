class Ball {
  constructor() {
    this.x = 300;
    this.y = 200;
    this.speedX = 5;
    this.speedY = 5;
    this.direction = -1; // Left (-1) or Right (1)
  }

  move() {
    this.x += this.speedX * this.direction;
    this.y += this.speedY;

    if (this.y <= 0 || this.y >= 400) {
      this.speedY = -this.speedY;
    }
    console.log('Ball Moving');

    this.checkPaddleCollision();
  }

  checkPaddleCollision() {
    if (
      (this.x <= 10 &&
        this.y >= game.leftPaddleY &&
        this.y <= game.leftPaddleY + 80) ||
      (this.x >= 580 &&
        this.y >= game.rightPaddleY &&
        this.y <= game.rightPaddleY + 80)
    ) {
      this.speedX += 1;
      this.direction = -this.direction;
      console.log('Ball Touched Paddle');
    }
  }

  reset() {
    this.x = 300;
    this.y = 200;
    this.speedX = 5;
    this.direction = this.generateRandomDirection();
    console.log('Game Reset');
  }

  generateRandomDirection() {
    return Math.random() < 0.5 ? -1 : 1; // 50% chance for left or right
  }
}
