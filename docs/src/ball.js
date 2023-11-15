class Ball {
  constructor() {
    this.x = 450;
    this.y = 200;
    this.speedX = 5; // Set a fixed speed for the X-axis
    this.speedY = 5; // Set a fixed speed for the Y-axis
    this.direction = -1; // Left (-1) or Right (1)
    this.radius = 5;
  }

  move() {
    this.x += this.speedX * this.direction;
    this.y += this.speedY;

    if (this.y <= 0 || this.y >= 380) {
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
      (this.x >= 875 &&
        this.y >= game.rightPaddleY &&
        this.y <= game.rightPaddleY + 80)
    ) {
      this.speedX += 0.5;
      this.direction = -this.direction;
      console.log('Ball Touched Paddle');
    }
  }

  reset() {
    this.x = 450;
    this.y = 200;
    this.speedX = 5;
    this.direction = this.generateRandomDirection();
    console.log('Game Reset');
  }

  generateRandomDirection() {
    return Math.random() < 0.5 ? -1 : 1; // 50% chance for left or right
  }
}
