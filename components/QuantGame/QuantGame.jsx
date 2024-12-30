// components/QuantGame/QuantGame.jsx

import { useEffect } from 'react';
import { diceQuestions, cardQuestions } from '../../constants/gameQuestions';

function QuantGame() {
  useEffect(() => {
    const gameArea = document.getElementById('game-area');

    const playGame = (type) => {
      const gifPath = type === 'dice' ? 'dice.gif' : 'card.gif';
      gameArea.innerHTML = `
        <div id="game-animation">
          <img src="${gifPath}" alt="animation" style="width: 100%; height: auto;">
        </div>
      `;

      setTimeout(() => {
        const questionData = getQuestion(type);
        gameArea.innerHTML = `
          <div id="question-box">
            <h1 style="color: white;">${
              type.charAt(0).toUpperCase() + type.slice(1)
            } Game</h1>
            <p style="color: white;">${questionData.question}</p>
            <input
              type="text"
              id="answer"
              placeholder="Enter your answer"
              style="border: 1px solid #ddd; border-radius: 4px; padding: 10px; margin: 10px 0; width: 80%;"
            />
            <button
              id="submit-btn"
              style="background-color: #555; color: white; border-radius: 20px; padding: 10px 20px; border: none; transition: background-color 0.2s, transform 0.2s;"
            >
              Submit
            </button>
          </div>
        `;

        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
          submitBtn.addEventListener('click', () => {
            checkAnswer(questionData.answer, questionData.solution, type);
          });
        }
      }, 3000);
    };

    const getQuestion = (type) => {
      if (type === 'dice') {
        return diceQuestions[Math.floor(Math.random() * diceQuestions.length)];
      }
      return cardQuestions[Math.floor(Math.random() * cardQuestions.length)];
    };

    const checkAnswer = (correctAnswer, solution, type) => {
      const userAnswer = document.getElementById('answer').value;
      if (userAnswer.trim() === correctAnswer) {
        alert('Correct!');
        setTimeout(() => playGame(type), 2000);
      } else {
        alert(`Wrong! ${solution}`);
        gameArea.innerHTML += `
          <button
            id="menu-btn"
            style="margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; border: none; color: white; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); transition: background-color 0.3s, transform 0.3s;"
          >
            Menu
          </button>
        `;
        const menuBtn = document.getElementById('menu-btn');
        if (menuBtn) {
          menuBtn.addEventListener('click', () => displayStartMenu());
        }
      }
    };

    const displayStartMenu = () => {
      gameArea.innerHTML = `
        <div style="text-align: center;">
          <h1 style="color: white; margin-bottom: 30px;">Quant Game</h1>
          <div class="game-selector"
               style="display: flex; justify-content: center; gap: 20px;">
            <button
              id="dice-game"
              style="background-color: #4CAF50; border: none; color: white; padding: 10px 20px; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); transition: background-color 0.3s, transform 0.3s;"
            >
              Dice Game
            </button>
            <button
              id="card-game"
              style="background-color: #4CAF50; border: none; color: white; padding: 10px 20px; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); transition: background-color 0.3s, transform 0.3s;"
            >
              Card Game
            </button>
          </div>
        </div>
      `;

      const diceGameButton = document.getElementById('dice-game');
      const cardGameButton = document.getElementById('card-game');
      if (diceGameButton) {
        diceGameButton.addEventListener('click', () => playGame('dice'));
      }
      if (cardGameButton) {
        cardGameButton.addEventListener('click', () => playGame('cards'));
      }
    };

    // Initialize the game on component mount
    displayStartMenu();
  }, []);

  return null; // No direct JSX, everything is rendered via DOM manipulation
}

export default QuantGame;
