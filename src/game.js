class Game {
  constructor(gameMode) {
    this.gameMode = gameMode;
    this.gameInterval = null;
    this.level = 1;
    this.player1Score = 0;
    this.player2Score = 0;
    this.isGameRunning = false;
    this.leftPaddleY = 160;
    this.rightPaddleY = 160;
    this.ball = new Ball();
    this.paddle = new Paddle(160);
    this.gameWidth = 900; // Updated game width
    this.gameHeight = 400; // Fixed game height
  }

  updateGameArea() {
    if (!this.isGameRunning) return;
    this.movePaddles();

    this.ball.move();

    if (this.ball.x < 0) {
      this.player2Score++;
      this.ball.reset();
    }
    if (this.ball.x > 900) {
      this.player1Score++;
      this.ball.reset();
    }

    if (this.player1Score >= 5) {
      this.endGame('Player 1 Wins!');
    } else if (this.player2Score >= 5) {
      this.endGame('Player 2 Wins!');
    }

    this.drawGameArea();
  }

  startGame(gameMode) {
    console.log('Game Started');
    this.isGameRunning = true;
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.game-over-screen').style.display = 'none';
    if (gameMode === 1) {
      // In one-player mode, automate the right paddle's movement
      this.gameInterval = setInterval(() => {
        this.updateGameArea();
        this.moveRightPaddleAutomatically();
      }, 1000 / 60);
    } else {
      // In two-player mode, let players control both paddles
      this.gameInterval = setInterval(() => this.updateGameArea(), 1000 / 60);
    }
  }

  endGame(winnerText) {
    this.isGameRunning = false;
    clearInterval(this.gameInterval);
    document.querySelector('.game-over-screen').style.display = 'flex';
    document.getElementById('winner').textContent = winnerText;
  }

  restartGame() {
    this.level = 1;
    this.player1Score = 0;
    this.player2Score = 0;
    this.isGameRunning = false;
    document.querySelector('.start-screen').style.display = 'flex';
    document.querySelector('.game-over-screen').style.display = 'none';

    this.ball.reset();
    //this.gameInterval = setInterval(() => this.updateGameArea(), 1000 / 60);
  }

  movePaddles() {
    const leftPaddle = document.getElementById('leftPaddle');
    const rightPaddle = document.getElementById('rightPaddle');

    leftPaddle.style.top = this.leftPaddleY + 'px';
    rightPaddle.style.top = this.rightPaddleY + 'px';

    console.log('Paddles Moving');
  }

  moveRightPaddleAutomatically() {
    // Right paddle follows the ball when the ball is on the right side
    if (this.ball.x > 450) {
      // Introduce a 20% miss chance
      if (Math.random() < 0.2) {
        // Do nothing (computer misses)
      } else {
        // Move the paddle based on the ball's position
        if (this.ball.y > this.rightPaddleY + 40 && this.rightPaddleY < 310) {
          this.rightPaddleY += this.paddle.speed;
        } else if (this.ball.y < this.rightPaddleY && this.rightPaddleY > 10) {
          this.rightPaddleY -= this.paddle.speed;
        }
      }
    } else {
      // Reset right paddle's position when the ball is on the left side
      this.rightPaddleY = 160;
    }
  }

  drawGameArea() {
    const ball = document.getElementById('ball');
    ball.style.left = this.ball.x + 'px';
    ball.style.top = this.ball.y + 'px';

    const player1ScoreElement = document.getElementById('player1Score');
    const player2ScoreElement = document.getElementById('player2Score');
    player1ScoreElement.textContent = this.player1Score;
    player2ScoreElement.textContent = this.player2Score;
  }
}
