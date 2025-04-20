document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.querySelector('.game-container');
  const player = document.querySelector('.player');
  const aliensContainer = document.querySelector('.aliens-container');

  const alienRows = 3;
  const aliensPerRow = 10;
  const alienWidth = 40;
  const alienHeight = 40;
  const alienGap = 10;
  const playerSpeed = 10;
  const bulletSpeed = 5;
  const alienSpeed = 2;

  let playerX = gameContainer.offsetWidth / 2 - player.offsetWidth / 2;
  let aliensDirection = 1;
  let bullets = [];
  let aliens = [];

  // Create aliens
  for (let row = 0; row < alienRows; row++) {
    for (let col = 0; col < aliensPerRow; col++) {
      const alien = document.createElement('div');
      alien.classList.add('alien');
      alien.style.left = `${col * (alienWidth + alienGap)}px`;
      alien.style.top = `${row * (alienHeight + alienGap)}px`;
      aliensContainer.appendChild(alien);
      aliens.push(alien);
    }
  }

  // Move player
  function movePlayer() {
    player.style.left = `${playerX}px`;
  }

  // Move aliens
  function moveAliens() {
    let reachedEdge = false;
    aliens.forEach(alien => {
      const newLeft = alien.offsetLeft + alienSpeed * aliensDirection;
      alien.style.left = `${newLeft}px`;
      if (newLeft <= 0 || newLeft + alienWidth >= gameContainer.offsetWidth) {
        reachedEdge = true;
      }
    });

    if (reachedEdge) {
      aliensDirection *= -1;
      aliens.forEach(alien => {
        alien.style.top = `${alien.offsetTop + alienHeight}px`;
      });
    }
  }

  // Fire bullet
  function fireBullet() {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = `${playerX + player.offsetWidth / 2 - 2.5}px`;
    bullet.style.bottom = `${player.offsetHeight}px`;
    gameContainer.appendChild(bullet);
    bullets.push(bullet);
  }

  // Move bullets
  function moveBullets() {
    bullets.forEach(bullet => {
      bullet.style.bottom = `${parseInt(bullet.style.bottom) + bulletSpeed}px`;
      if (parseInt(bullet.style.bottom) > gameContainer.offsetHeight) {
        gameContainer.removeChild(bullet);
        bullets = bullets.filter(b => b !== bullet);
      }
    });
  }

  // Check collisions
  function checkCollisions() {
    bullets.forEach(bullet => {
      aliens.forEach(alien => {
        const bulletRect = bullet.getBoundingClientRect();
        const alienRect = alien.getBoundingClientRect();
        if (
          bulletRect.left < alienRect.left + alienRect.width &&
          bulletRect.left + bulletRect.width > alienRect.left &&
          bulletRect.top < alienRect.top + alienRect.height &&
          bulletRect.height + bulletRect.top > alienRect.top
        ) {
          gameContainer.removeChild(bullet);
          aliensContainer.removeChild(alien);
          bullets = bullets.filter(b => b !== bullet);
          aliens = aliens.filter(a => a !== alien);
        }
      });
    });
  }

  // Game loop
  function gameLoop() {
    movePlayer();
    moveAliens();
    moveBullets();
    checkCollisions();
    requestAnimationFrame(gameLoop);
  }

  // Controls
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      playerX = Math.max(0, playerX - playerSpeed);
    } else if (e.key === 'ArrowRight') {
      playerX = Math.min(gameContainer.offsetWidth - player.offsetWidth, playerX + playerSpeed);
    } else if (e.key === ' ') {
      fireBullet();
    }
  });

  gameLoop();
});
