const game = new Game();

document.querySelector('.game-over-screen').style.display = 'none';

document
  .getElementById('start-button')
  .addEventListener('click', () => game.startGame());
document
  .getElementById('restart-button')
  .addEventListener('click', () => game.restartGame());
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && game.rightPaddleY > 0) {
    game.rightPaddleY -= game.paddle.speed;
  }
  if (e.key === 'ArrowDown' && game.rightPaddleY < 320) {
    game.rightPaddleY += game.paddle.speed;
  }
  if (e.key === 'w' && game.leftPaddleY > 0) {
    game.leftPaddleY -= game.paddle.speed;
  }
  if (e.key === 's' && game.leftPaddleY < 320) {
    game.leftPaddleY += game.paddle.speed;
  }
});
