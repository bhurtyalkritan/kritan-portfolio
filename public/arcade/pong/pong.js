document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pongCanvas');
    const context = canvas.getContext('2d');
  
    canvas.width = 800;
    canvas.height = 600;
  
    const paddleWidth = 10;
    const paddleHeight = 100;
    const ballSize = 10;
    let playerY = canvas.height / 2 - paddleHeight / 2;
    let aiY = canvas.height / 2 - paddleHeight / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 5;
    let ballSpeedY = 3;
  
    // Draw paddles and ball
    function draw() {
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = '#fff';
      context.fillRect(0, playerY, paddleWidth, paddleHeight);
      context.fillRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight);
      context.fillRect(ballX, ballY, ballSize, ballSize);
    }
  
    // Move ball
    function moveBall() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;
  
      // Bounce off top and bottom walls
      if (ballY <= 0 || ballY + ballSize >= canvas.height) {
        ballSpeedY = -ballSpeedY;
      }
  
      // Bounce off paddles
      if (ballX <= paddleWidth && ballY >= playerY && ballY <= playerY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
      }
      if (ballX + ballSize >= canvas.width - paddleWidth && ballY >= aiY && ballY <= aiY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
      }
  
      // Reset ball if it goes past paddles
      if (ballX <= 0 || ballX + ballSize >= canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -ballSpeedX;
      }
    }
  
    // Move AI paddle
    function moveAI() {
      const centerY = aiY + paddleHeight / 2;
      if (centerY < ballY - 35) {
        aiY += 6;
      } else if (centerY > ballY + 35) {
        aiY -= 6;
      }
    }
  
    // Move player paddle
    function movePlayer(event) {
      const relativeY = event.clientY - canvas.getBoundingClientRect().top;
      playerY = relativeY - paddleHeight / 2;
    }
  
    canvas.addEventListener('mousemove', movePlayer);
  
    // Game loop
    function gameLoop() {
      moveBall();
      moveAI();
      draw();
      requestAnimationFrame(gameLoop);
    }
  
    gameLoop();
  });
  