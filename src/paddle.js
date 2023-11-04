class Paddle {
  constructor(initialY) {
    this.y = initialY;
    this.speed = 30;
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= this.speed;
    }
  }

  moveDown() {
    if (this.y < 320) {
      this.y += this.speed;
    }
  }
}
