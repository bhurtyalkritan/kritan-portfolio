// constants/gameQuestions.js

export const diceQuestions = [
    {
      question: 'What is the expected value of rolling two six-sided dice?',
      answer: '7',
      solution:
        'To find the expected value, add all possible outcomes (2 to 12) and divide by the number of outcomes (11).',
    },
    {
      question:
        'On average, how many times must a 6-sided die be rolled until a 6 turns up?',
      answer: '6',
      solution:
        'Use E[X] = 1/p, where p is the probability of rolling a 6 (1/6). The expected value is 6.',
    },
    {
      question:
        'On average, how many times must a 6-sided die be rolled until the sequence 65 appears?',
      answer: '36',
      solution:
        'This can be computed using Markov chains or solving recurrence relations; the result is 36.',
    },
    {
      question: 'On average, how many times must a 6-sided die be rolled until all sides appear at least once?',
      answer: '14.7',
      solution:
        'The expected number of rolls to see all six sides is 6 × (6th Harmonic Number) ≈ 14.7.',
    },
    {
      question: 'What is the probability of rolling doubles with two six-sided dice?',
      answer: '1/6',
      solution:
        'There are 6 possible doubles out of 36 outcomes, giving a probability of 1/6.',
    },
    {
      question:
        'If you roll a six-sided die 4 times, what is the probability of getting at least one 6?',
      answer: '51.77%',
      solution:
        'Probability of no 6 in one roll is 5/6, so in 4 rolls is (5/6)^4. 1 - (5/6)^4 ≈ 51.77%.',
    },
    {
      question:
        'What is the probability of getting a sum of 10 with two six-sided dice?',
      answer: '3/36',
      solution:
        'Possible sums that yield 10 are (4,6), (5,5), (6,4) out of 36 total outcomes, so 3/36 = 1/12.',
    },
  ];
  
  export const cardQuestions = [
    {
      question: "What's the probability of getting a flush in a poker hand?",
      answer: '0.00198079',
      solution:
        'There are 5,108 possible flush combinations out of 2,598,960 total hands.',
    },
    {
      question: 'What is the probability of being dealt a straight in poker?',
      answer: '0.00392465',
      solution:
        'There are 10,200 possible straight hands out of 2,598,960 total hands.',
    },
    {
      question: "What's the probability of getting a full house in poker?",
      answer: '0.00144058',
      solution:
        'Number of full house combinations over total possible 5-card hands ≈ 0.144%.',
    },
    {
      question: "What's the probability of drawing four of a kind in a five-card hand?",
      answer: '0.0002401',
      solution:
        '624 ways to draw four of a kind out of 2,598,960 total 5-card hands.',
    },
    {
      question: 'What is the probability of being dealt exactly two pairs in poker?',
      answer: '0.047539',
      solution:
        'Two-pair combos over total hands, ~4.75%.',
    },
    {
      question: 'What is the probability of drawing an Ace from a standard 52-card deck?',
      answer: '1/13',
      solution:
        '4 Aces in 52 cards => 4/52 = 1/13.',
    },
    {
      question: 'What is the probability of being dealt a pair in poker?',
      answer: '0.422569',
      solution:
        'Roughly 42.26% chance of getting at least one pair in a 5-card hand.',
    },
  ];
  