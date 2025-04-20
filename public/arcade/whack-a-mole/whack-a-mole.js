const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(400, 1200);
    const hole = randomHole(holes);
    const character = hole.children[0];
    character.style.top = '0';
    setTimeout(() => {
        character.style.top = '100%';
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 'Score: 0';
    score = 0;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 15000);
}

function bash(e) {
    if (!e.isTrusted) return; // prevent fake clicks
    if (this.classList.contains('zombie')) {
        score += 1; // Zombies give points
    } else if (this.classList.contains('ghost')) {
        score -= 1; // Ghosts subtract points
    } else if (this.classList.contains('human')) {
        score -= 2; // Humans subtract more points
    }
    this.style.top = '100%';
    scoreBoard.textContent = `Score: ${score}`;
}

holes.forEach(hole => hole.children[0].addEventListener('click', bash));
startGame();
