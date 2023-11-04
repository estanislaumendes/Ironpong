class Game {
  constructor() {
    this.gameInterval = null;
    this.level = 1;
    this.player1Score = 0;
    this.player2Score = 0;
    this.isGameRunning = false;
    this.leftPaddleY = 160;
    this.rightPaddleY = 160;
    this.ball = new Ball();
    this.paddle = new Paddle(160);
  }

  updateGameArea() {
    if (!this.isGameRunning) return;
    this.movePaddles();

    this.ball.move();

    if (this.ball.x < 0) {
      this.player2Score++;
      this.ball.reset();
    }
    if (this.ball.x > 600) {
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

  startGame() {
    console.log('Game Started');
    this.isGameRunning = true;
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.game-over-screen').style.display = 'none';
    this.gameInterval = setInterval(() => this.updateGameArea(), 1000 / 60);
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
    this.isGameRunning = true;
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.game-over-screen').style.display = 'none';

    this.ball.reset();
    this.gameInterval = setInterval(() => this.updateGameArea(), 1000 / 60);
  }

  movePaddles() {
    const leftPaddle = document.getElementById('leftPaddle');
    const rightPaddle = document.getElementById('rightPaddle');

    leftPaddle.style.top = this.leftPaddleY + 'px';
    rightPaddle.style.top = this.rightPaddleY + 'px';

    console.log('Paddles Moving');
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
