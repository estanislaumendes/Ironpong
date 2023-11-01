// Game variables
let gameInterval;
let level = 1;
let player1Score = 0;
let player2Score = 0;
let isGameRunning = false;

// Paddle and ball variables
const paddleSpeed = 30;
const ballSpeed = 5;
let leftPaddleY = 160;
let rightPaddleY = 160;
let ballX = 300;
let ballY = 200;
let ballSpeedX = ballSpeed;
let ballSpeedY = ballSpeed;
let ballDirection = -1;

// Update the game elements
function updateGameArea() {
  if (!isGameRunning) return;

  movePaddles();
  moveBall();

  if (ballX < 0) {
    player2Score++;
    ballReset();
  }
  if (ballX > 600) {
    player1Score++;
    ballReset();
  }

  if (player1Score >= 5) {
    endGame('Player 1 Wins!');
  } else if (player2Score >= 5) {
    endGame('Player 2 Wins!');
  }

  drawGameArea();
}

// Start the game
document.querySelector('.game-over-screen').style.display = 'none';
document.getElementById('start-button').addEventListener('click', startGame);

// Restart the game
document
  .getElementById('restart-button')
  .addEventListener('click', restartGame);

function startGame() {
  console.log('Game Started');
  isGameRunning = true;
  document.querySelector('.start-screen').style.display = 'none';
  document.querySelector('.game-over-screen').style.display = 'none';
  gameInterval = setInterval(updateGameArea, 1000 / 60);
}

function endGame(winnerText) {
  isGameRunning = false;
  clearInterval(gameInterval);
  document.querySelector('.game-over-screen').style.display = 'flex';
  document.getElementById('winner').textContent = winnerText;
}

function restartGame() {
  level = 1;
  player1Score = 0;
  player2Score = 0;
  isGameRunning = true;
  document.querySelector('.start-screen').style.display = 'none';
  document.querySelector('.game-over-screen').style.display = 'none';

  ballReset();
  gameInterval = setInterval(updateGameArea, 1000 / 60);
}

// Handle paddle movements
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && rightPaddleY > 0) {
    rightPaddleY -= paddleSpeed;
  }
  if (e.key === 'ArrowDown' && rightPaddleY < 320) {
    rightPaddleY += paddleSpeed;
  }
  if (e.key === 'w' && leftPaddleY > 0) {
    leftPaddleY -= paddleSpeed;
  }
  if (e.key === 's' && leftPaddleY < 320) {
    leftPaddleY += paddleSpeed;
  }
});

// Move paddles
function movePaddles() {
  const leftPaddle = document.getElementById('leftPaddle');
  const rightPaddle = document.getElementById('rightPaddle');

  leftPaddle.style.top = leftPaddleY + 'px';
  rightPaddle.style.top = rightPaddleY + 'px';
}

// Move the ball
function moveBall() {
  ballX += ballSpeedX * ballDirection;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY >= 400) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX <= 10 && ballY >= leftPaddleY && ballY <= leftPaddleY + 80) {
    ballSpeedX = ballSpeedX + 1;
    ballDirection = 1;
  }

  if (ballX >= 580 && ballY >= rightPaddleY && ballY <= rightPaddleY + 80) {
    ballSpeedX = ballSpeedX + 1;
    ballDirection = -1;
  }
}

// Reset the ball position
function ballReset() {
  ballX = 300;
  ballY = 200;
  ballSpeedX = ballSpeed;
  ballDirection = generateRandomDirection();
}

//Generates random direction for the ball to start
function generateRandomDirection() {
  const directionsArr = [-1, 1];

  // get random index value
  const randomDirectionIndex = Math.floor(Math.random() * directionsArr.length);

  // get random item
  const randomDirection = directionsArr[randomDirectionIndex];

  return randomDirection;
}

// Draw game elements
function drawGameArea() {
  const ball = document.getElementById('ball');
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  const player1ScoreElement = document.getElementById('player1Score');
  const player2ScoreElement = document.getElementById('player2Score');
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
}
