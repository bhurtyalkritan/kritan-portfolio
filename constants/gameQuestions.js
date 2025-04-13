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
    {
      question: 'What is the probability of rolling exactly one 6 in four rolls of a fair six-sided die?',
      answer: '500/1296 (≈ 38.58%)',
      solution:
        'Use the Binomial distribution with n=4 and p=1/6. Probability = C(4,1) × (1/6)¹ × (5/6)³ = 4 × (1/6) × (125/216) = 500/1296.',
    },
    {
      question: 'What is the probability of rolling a sum of 8 with two fair six-sided dice?',
      answer: '5/36 (≈ 13.89%)',
      solution:
        'The outcomes yielding 8 are (2,6), (3,5), (4,4), (5,3), (6,2). That gives 5 favorable outcomes out of 36 total.',
    },
    {
      question: 'What is the probability that the sum of two six-sided dice is prime?',
      answer: '15/36 (≈ 41.67%)',
      solution:
        'Prime sums within 2–12 are 2, 3, 5, 7, and 11. Counting the permutations yields 15 favorable outcomes out of 36.',
    },
    {
      question: 'What is the probability that two fair six-sided dice sum to a number greater than 8?',
      answer: '10/36 (≈ 27.78%)',
      solution:
        'Sums greater than 8 are 9, 10, 11, and 12. Collectively, they occur in 10 of the 36 possible outcomes.',
    },
    {
      question: 'What is the probability that rolling four dice results in at least one pair?',
      answer: '13/18 (≈ 72.22%)',
      solution:
        'Compute the complement: the probability all four dice show different faces is (6×5×4×3) / (6⁴) = 5/18. Subtract from 1 to get 13/18.',
    },
    {
      question: 'What is the probability that when rolling three dice, none shows a 3 or a 4?',
      answer: '8/27 (≈ 29.63%)',
      solution:
        'The chance a single die is not 3 or 4 is 4/6 = 2/3. For three dice, (2/3)³ = 8/27.',
    },
    {
      question: 'On average, how many times must you roll a fair six-sided die until you get three consecutive 6s?',
      answer: '258',
      solution:
        'Use a Markov chain/state approach (states for 0,1,2 consecutive 6s). Solving yields an expected value of 258 rolls.',
    },
    {
      question: 'What is the probability that 5 dice all show different faces?',
      answer: '720/7776 (≈ 9.26%)',
      solution:
        'Number of ways: 6×5×4×3×2 for distinct faces, divided by the total 6⁵ = 7776.',
    },
    {
      question: 'What is the probability that two fair six-sided dice sum to 2?',
      answer: '1/36 (≈ 2.78%)',
      solution:
        'Only (1,1) yields a sum of 2 out of 36 possible outcomes.',
    },
    {
      question: 'What is the probability that a single roll of a fair six-sided die is 5 or 6?',
      answer: '1/3 (≈ 33.33%)',
      solution:
        'There are two favorable faces (5 and 6) out of six total.',
    },
    {
      question: 'What is the probability that two dice sum to a number divisible by 3?',
      answer: '12/36 (≈ 33.33%)',
      solution:
        'Sums divisible by 3 in 2-dice rolls are 3, 6, 9, 12. Counting their permutations gives 12 out of 36.',
    },
    {
      question: 'What is the probability that three fair six-sided dice total 18?',
      answer: '1/216 (≈ 0.46%)',
      solution:
        'All three dice must be 6, giving one outcome out of 6³ = 216.',
    },
    {
      question: 'What is the probability that a single roll of a fair six-sided die yields a prime number?',
      answer: '1/2 (50%)',
      solution:
        'Primes on a six-sided die are 2, 3, and 5. That is 3 out of 6 faces.',
    },
    {
      question: 'What is the probability that in 10 rolls of a fair six-sided die, exactly 5 are even?',
      answer: 'C(10,5) × (1/2)¹⁰ (≈ 24.6%)',
      solution:
        'Even faces occur with probability 1/2 on each roll. Use Binomial(n=10, p=1/2).',
    },
    {
      question: 'What is the probability that three fair six-sided dice sum to 10?',
      answer: '27/216 (≈ 12.50%)',
      solution:
        'Enumerate all permutations of (1,3,6), (1,4,5), (2,2,6), (2,3,5), (2,4,4), (3,3,4). There are 27 combinations out of 216.',
    }
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
    {
      question: 'What is the probability of getting exactly one Ace in a 5-card poker hand?',
      answer: '≈ 29.98%',
      solution:
        'Calculate (4 choose 1) × (48 choose 4) ÷ (52 choose 5). Numerically, 4×(48 choose 4) = 778,320; total hands = 2,598,960.',
    },
    {
      question: 'What is the probability of drawing a straight flush in poker?',
      answer: '≈ 0.00154%',
      solution:
        'There are 40 straight flushes (10 per suit, 4 suits total). Divide 40 by 2,598,960.',
    },
    {
      question: 'What is the probability of drawing three of a kind in a 5-card hand?',
      answer: '≈ 2.11%',
      solution:
        'Number of ways: choose 1 rank (13 ways), choose 3 suits (C(4,3)), then choose 2 different ranks (C(12,2)) each with 4 suits (4²).',
    },
    {
      question: 'What is the probability of drawing a Royal Flush in poker?',
      answer: '≈ 0.0001539%',
      solution:
        'Only 4 possible Royal Flushes (one per suit). Thus, 4 ÷ 2,598,960.',
    },
    {
      question: 'What is the probability of drawing exactly two Aces in a 5-card hand?',
      answer: '≈ 4.00%',
      solution:
        'Use (4 choose 2) × (48 choose 3) ÷ (52 choose 5). Numerically about 0.04 = 4%.',
    },
    {
      question: 'What is the probability that a 5-card poker hand contains at least one Ace?',
      answer: '≈ 34.12%',
      solution:
        'Use the complement. Probability of no Aces is (48 choose 5) ÷ (52 choose 5). Subtract from 1.',
    },
    {
      question: 'What is the probability that a randomly drawn card is a face card?',
      answer: '3/13 (≈ 23.08%)',
      solution:
        'There are 12 face cards (J, Q, K) in a 52-card deck. 12 ÷ 52 = 3/13.',
    },
    {
      question: 'What is the probability of a 5-card hand being all red cards?',
      answer: '(26 choose 5) / (52 choose 5)',
      solution:
        'There are 26 red cards (hearts and diamonds). Choose all 5 from those 26 over the total of (52 choose 5).',
    },
    {
      question: 'What is the probability of drawing exactly 3 hearts in a 5-card hand?',
      answer: '(13 choose 3) × (39 choose 2) / (52 choose 5)',
      solution:
        'Pick 3 of the 13 hearts and 2 of the remaining 39 non-hearts. Divide by total 5-card hands.',
    },
    {
      question: 'If you draw two cards from a standard deck, what is the probability that both are black?',
      answer: '25/102 (≈ 24.51%)',
      solution:
        'Probability = (26/52) × (25/51). First black card is 26 out of 52, next black card is 25 out of the remaining 51.',
    },
    {
      question: 'What is the probability of drawing all four Aces if you draw four cards?',
      answer: '1 / (52 choose 4) (≈ 0.000369%)',
      solution:
        'There is exactly 1 way to choose all 4 Aces, over (52 choose 4) total ways to choose 4 cards.',
    },
    {
      question: 'What is the probability of drawing a 5-card hand with no face cards and no Aces?',
      answer: '(36 choose 5) / (52 choose 5)',
      solution:
        'Remove the 16 cards (4 Aces + 12 face cards) from 52, leaving 36. Choose 5 from those 36.',
    },
    {
      question: 'What is the probability of drawing exactly one pair of Kings in a 5-card hand?',
      answer: '≈ 3.25%',
      solution:
        'Choose 2 suits of the 4 Kings, then choose 3 distinct ranks out of the remaining 12, and for each rank choose 1 suit out of 4.',
    },
    {
      question: 'What is the probability of drawing exactly one spade in a 5-card hand?',
      answer: '(13 choose 1) × (39 choose 4) / (52 choose 5)',
      solution:
        'We pick 1 spade out of 13, and 4 cards from the other 39 non-spade cards. Divide by total 5-card combos.',
    },
    {
      question: 'What is the probability of a 5-card hand being classified as “no pair” (high card) in poker?',
      answer: '≈ 50.12%',
      solution:
        'There are 1,302,540 such 5-card combinations (exclude all pairs, straights, flushes, etc.) out of 2,598,960 total hands.',
    }
  ];
  