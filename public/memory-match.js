document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
      { name: 'A', img: 'A' },
      { name: 'B', img: 'B' },
      { name: 'C', img: 'C' },
      { name: 'D', img: 'D' },
      { name: 'E', img: 'E' },
      { name: 'F', img: 'F' },
      { name: 'A', img: 'A' },
      { name: 'B', img: 'B' },
      { name: 'C', img: 'C' },
      { name: 'D', img: 'D' },
      { name: 'E', img: 'E' },
      { name: 'F', img: 'F' },
    ];
  
    const game = document.getElementById('memory-game');
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
  
    function createBoard() {
      cardsArray.sort(() => 0.5 - Math.random());
      cardsArray.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name;
        cardElement.innerHTML = card.img;
        cardElement.addEventListener('click', flipCard);
        game.appendChild(cardElement);
      });
    }
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add('flip');
  
      if (!firstCard) {
        firstCard = this;
        return;
      }
  
      secondCard = this;
      checkForMatch();
    }
  
    function checkForMatch() {
      const isMatch = firstCard.dataset.name === secondCard.dataset.name;
      isMatch ? disableCards() : unflipCards();
    }
  
    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    }
  
    function unflipCards() {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
      }, 1500);
    }
  
    function resetBoard() {
      [firstCard, secondCard, lockBoard] = [null, null, false];
    }
  
    createBoard();
  });
  