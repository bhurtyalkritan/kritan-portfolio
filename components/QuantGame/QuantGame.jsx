// components/QuantGame/QuantGame.jsx

import React, { useState, useCallback } from 'react';
import { Box, Button, Typography, TextField, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { diceQuestions, cardQuestions } from '../../constants/gameQuestions';

const MotionBox = motion(Box);

function QuantGame() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'animation', 'question'
  const [gameType, setGameType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomQuestion = useCallback((type) => {
    const questions = type === 'dice' ? diceQuestions : cardQuestions;
    return questions[Math.floor(Math.random() * questions.length)];
  }, []);

  const startGame = useCallback((type) => {
    setGameType(type);
    setGameState('animation');
    setIsAnimating(true);
    setFeedback(null);
    
    // Show animation for 2 seconds instead of 3
    setTimeout(() => {
      const question = getRandomQuestion(type);
      setCurrentQuestion(question);
      setGameState('question');
      setIsAnimating(false);
    }, 2000);
  }, [getRandomQuestion]);

  const handleSubmit = useCallback(() => {
    if (!currentQuestion || !userAnswer.trim()) return;

    const isCorrect = userAnswer.trim() === currentQuestion.answer;
    
    if (isCorrect) {
      setFeedback({ type: 'success', message: 'Correct! Great job!' });
      setTimeout(() => {
        startGame(gameType);
        setUserAnswer('');
      }, 1500);
    } else {
      setFeedback({ 
        type: 'error', 
        message: `Wrong! ${currentQuestion.solution}` 
      });
      setTimeout(() => {
        setGameState('menu');
        setUserAnswer('');
        setFeedback(null);
      }, 3000);
    }
  }, [currentQuestion, userAnswer, gameType, startGame]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const returnToMenu = () => {
    setGameState('menu');
    setGameType(null);
    setCurrentQuestion(null);
    setUserAnswer('');
    setFeedback(null);
  };

  const renderMenu = () => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        textAlign: 'center',
        color: 'white',
        padding: 4
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        Quant Game
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => startGame('dice')}
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#45a049' },
            borderRadius: '25px',
            padding: '12px 30px',
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
          }}
        >
          Dice Game
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => startGame('cards')}
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#45a049' },
            borderRadius: '25px',
            padding: '12px 30px',
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
          }}
        >
          Card Game
        </Button>
      </Box>
    </MotionBox>
  );

  const renderAnimation = () => (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        textAlign: 'center',
        padding: 4
      }}
    >
      <Box
        component="img"
        src={gameType === 'dice' ? '/dice.gif' : '/card.gif'}
        alt="Game animation"
        sx={{
          width: '100%',
          maxWidth: 400,
          height: 'auto',
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}
      />
    </MotionBox>
  );

  const renderQuestion = () => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        textAlign: 'center',
        color: 'white',
        padding: 4,
        maxWidth: 600,
        margin: '0 auto'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        {gameType?.charAt(0).toUpperCase() + gameType?.slice(1)} Game
      </Typography>
      
      <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6 }}>
        {currentQuestion?.question}
      </Typography>

      {feedback && (
        <Alert 
          severity={feedback.type} 
          sx={{ mb: 3, maxWidth: 400, margin: '0 auto 24px auto' }}
        >
          {feedback.message}
        </Alert>
      )}

      <TextField
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your answer"
        variant="outlined"
        size="large"
        disabled={!!feedback}
        sx={{
          mb: 3,
          width: '100%',
          maxWidth: 300,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: '8px'
          }
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={!userAnswer.trim() || !!feedback}
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#45a049' },
            borderRadius: '20px',
            padding: '10px 30px'
          }}
        >
          Submit
        </Button>
        
        <Button
          variant="outlined"
          size="large"
          onClick={returnToMenu}
          sx={{
            borderColor: 'white',
            color: 'white',
            '&:hover': { 
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.1)'
            },
            borderRadius: '20px',
            padding: '10px 30px'
          }}
        >
          Menu
        </Button>
      </Box>
    </MotionBox>
  );

  return (
    <Box
      sx={{
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }}
    >
      {gameState === 'menu' && renderMenu()}
      {gameState === 'animation' && renderAnimation()}
      {gameState === 'question' && renderQuestion()}
    </Box>
  );
}

export default QuantGame;
