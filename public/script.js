const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const startMessage = document.getElementById('start-message');
const scoreDisplay = document.getElementById('score');

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

let bird = {
    x: 50,
    y: canvas.height / 2,
    width: 40,
    height: 40,
    gravity: 0.6,
    lift: -15,
    velocity: 0,
};

let pipes = [];
let pipeWidth = 80;
let pipeGap = 200;
let pipeFrequency = 90;
let score = 0;
let gameInterval;
let isGameOver = false;
let frames = 0;

function resetGame() {
    bird.y = canvas.height / 2;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    isGameOver = false;
    scoreDisplay.textContent = 'Score: 0';
}

function drawBird() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
    ctx.fillStyle = 'green';
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom);
    });
}

function updateBird() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        gameOver();
    }
}

function updatePipes() {
    if (frames % pipeFrequency === 0) {
        const topHeight = Math.random() * (canvas.height - pipeGap - 100) + 50;
        pipes.push({
            x: canvas.width,
            top: topHeight,
            bottom: topHeight + pipeGap,
        });
    }

    pipes.forEach(pipe => {
        pipe.x -= 3;

        if (pipe.x + pipeWidth < 0) {
            pipes.shift();
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }

        if (
            bird.x < pipe.x + pipeWidth &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.top || bird.y + bird.height > pipe.bottom)
        ) {
            gameOver();
        }
    });
}

function gameOver() {
    isGameOver = true;
    clearInterval(gameInterval);
    startMessage.style.display = 'block';
}

function loop() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawPipes();
    updateBird();
    updatePipes();
}

function startGame() {
    resetGame();
    startMessage.style.display = 'none';
    gameInterval = setInterval(loop, 1000 / 60);
}

canvas.addEventListener('click', () => {
    if (isGameOver) {
        startGame();
    } else {
        bird.velocity = bird.lift;
    }
});

startMessage.style.display = 'block';
