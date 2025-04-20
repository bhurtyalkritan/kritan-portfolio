document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const startMessage = document.getElementById('start-message');
    const scoreDisplay = document.getElementById('score');
    
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let gameStarted = false;

    // Card symbols
    const symbols = ['🍎', '🍌', '🍒', '🍓', '🍊', '🍋', '🍉', '🍇'];
    const cardValues = [...symbols, ...symbols];

    // Initialize game
    function initGame() {
        // Shuffle cards
        const shuffledCards = cardValues.sort(() => 0.5 - Math.random());
        
        // Create card elements
        gameBoard.innerHTML = '';
        shuffledCards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;
            card.dataset.symbol = symbol;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });

        cards = Array.from(document.querySelectorAll('.card'));
        flippedCards = [];
        matchedPairs = 0;
        scoreDisplay.textContent = 'Matches: 0';
        gameStarted = true;
        startMessage.style.display = 'none';
    }

    // Flip card when clicked
    function flipCard() {
        if (!gameStarted || flippedCards.length >= 2 || this.classList.contains('flipped')) {
            return;
        }

        this.classList.add('flipped');
        this.textContent = this.dataset.symbol;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }

    // Check if flipped cards match
    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.symbol === card2.dataset.symbol) {
            // Match found
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            scoreDisplay.textContent = `Matches: ${matchedPairs}`;
            
            if (matchedPairs === symbols.length) {
                setTimeout(() => {
                    alert('Congratulations! You won!');
                    startMessage.style.display = 'block';
                    gameStarted = false;
                }, 500);
            }
        } else {
            // No match
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
            }, 1000);
        }

        flippedCards = [];
    }

    // Start game when clicked
    startMessage.addEventListener('click', initGame);
});
