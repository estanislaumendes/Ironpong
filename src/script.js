const game = new Game();

document.querySelector('.game-over-screen').style.display = 'none';

document
  .getElementById('one-player-start-button')
  .addEventListener('click', () => game.startGame(1));
document
  .getElementById('start-button')
  .addEventListener('click', () => game.startGame(2));
document
  .getElementById('restart-button')
  .addEventListener('click', () => game.restartGame());

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && game.rightPaddleY > 10) {
    game.rightPaddleY -= game.paddle.speed;
  }
  if (e.key === 'ArrowDown' && game.rightPaddleY < 310) {
    game.rightPaddleY += game.paddle.speed;
  }
  if (e.key === 'w' && game.leftPaddleY > 10) {
    game.leftPaddleY -= game.paddle.speed;
  }
  if (e.key === 's' && game.leftPaddleY < 310) {
    game.leftPaddleY += game.paddle.speed;
  }
});
