class Paddle {
  constructor(initialY) {
    this.y = initialY;
    this.speed = 30;
    this.width = 10;
    this.height = 80;
  }

  moveUp() {
    if (this.y > 10) {
      this.y -= this.speed;
    }
  }

  moveDown() {
    if (this.y < 310) {
      this.y += this.speed;
    }
  }
}
