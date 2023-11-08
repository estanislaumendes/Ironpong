class Paddle {
  constructor(initialY) {
    this.y = initialY;
    this.speed = 30;
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
