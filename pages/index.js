import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Avatar from '@mui/material/Avatar';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaMedium } from 'react-icons/fa';

const MotionCard = motion(Card);

function Brain() {
  const { scene } = useGLTF('/brain.glb');
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation((prev) => prev + 0.01);
    scene.rotation.y = rotation;
  });

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

const cardData = [
  { title: 'Neural Networks', image: '/neural-network.jpg' },
  { title: 'Data Analysis', image: '/data-analysis.jpg' },
  { title: 'Neuroscience', image: '/gene-editing.jpg' },
];

const goals = [
  { date: 'August 10 2024', title: 'Launch Blog' },
  { date: 'December 2024', title: 'First Research Publication' },
  { date: 'January 2025', title: 'Complete Appstractify' },
  { date: 'May 2025', title: 'Release Bioinformatics Tool' },
];

const aboutImages = ['/about-images/about-image1.jpg', '/about-images/about-image2.jpg', '/about-images/about-image3.jpg'];

const experiences = [
  { title: 'Product Support Engineer Intern', company: 'Tesla', duration: 'Sep 2024 - Dec 2024' },
  { title: 'PM Intern', company: 'Lenovo', duration: 'June 2024 - July 2024' },
  { title: 'Backend Software Engineer', company: 'App Team Carolina', duration: 'Feb 2024 - Present' },
  { title: 'Software Engineer Intern', company: 'Amtev', duration: 'May 2023 - Aug 2023' },
];

const projects = [
  { title: 'Appstractify', description: 'Open-source data science tool with Visualization, Synthetic data, chat, and data filtering.', link: 'https://github.com/bhurtyalkritan/AppstractifyBeta' },
  { title: 'Brain Analysis', description: 'MRI Scan analysis with annotations, 3d visualizations, ML (skull stripping, segmentation, etc), Time series analysis with GLM, report generation', link: 'https://github.com/bhurtyalkritan/brainAnalysis' },
  { title: 'Finance Web Scrapper', description: 'Quick, Accurate scrapper of financial data using stock symbols, automatically does sentiment analysis and saves both stock data and analysis data into csv.', link: 'https://github.com/JordanLakeTrading/JLT-WEBSCRAPPER' },
  { title: 'PondSimulation', description: 'Simulation of evolution in pond enviroment using neural networks .', link: 'https://github.com/bhurtyalkritan/pondSimulation' },
  { title: 'RemoteEyeMouse', description: 'Accessibility tool where you can use your vision as the mouse, blink with certain eye for left/right cick, voice commands, etc.', link: 'https://github.com/bhurtyalkritan/RemoteMouse' },
  { title: 'Fema Data Research', description: 'Data analysis and research paper on FEMA Disaster data', link: 'https://github.com/bhurtyalkritan/FemaDataAnalysis' },
  { title: 'MixNMath', description: 'Math game for quantative traders, which tests mental math, and algebra skills.', link: 'https://github.com/bhurtyalkritan/MixNMath' },
  { title: 'TerminalBankingSystem', description: 'Terminal based banking system that emulates deposits, withdraws, interests, investing.', link: 'https://github.com/bhurtyalkritan/bankingSystem' },
  { title: 'SolarSystemSimulation', description: 'Accurate simulation of the solar system orbits, with extensive data showcased.', link: 'https://github.com/bhurtyalkritan/SolarSystemSimulation' },
  { title: 'PlanetaryGravity', description: 'Javascript physics showcase with balls, and gravity changes based on planets', link: 'https://github.com/bhurtyalkritan/planetary-gravity' },
  { title: 'Singularity', description: 'Black hole simulation with spagettification, and realistic physics of different components (event horizon, etc)', link: 'https://github.com/bhurtyalkritan/Singularity' },
  { title: 'Connect Four', description: 'Black hole simulation with spagettification, and realistic physics of different components (event horizon, etc)', link: 'https://github.com/bhurtyalkritan/Singularity' },
];

const blogPosts = [
  { title: 'Understanding CRISPR', image: '/crispr.webp', link: 'https://medium.com/@kritanbhurtyal/understanding-crispr-the-intersection-of-biology-and-computer-science-1f7723d971be' },
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showGame, setShowGame] = useState(null);

  const arcadeGames = [
    { title: 'Space Invaders', description: 'Classic space shooting game.', src: '/space-invaders.html' },
    { title: 'Memory Match', description: 'Find all the matching pairs.', src: '/index.html' },
    { title: 'Zombie Bash', description: 'Smash the zombies as they appear.', src: '/zombie-bash.html' },
    { title: 'Pong', description: 'Classic pong game with paddles.', src: '/pong.html' },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAboutImage((prevImage) => (prevImage + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePlayClick = (src) => {
    setShowGame(src);
  };

  const handleCloseClick = () => {
    setShowGame(null);
  };

  useEffect(() => {
    const diceGameButton = document.getElementById('dice-game');
    const cardGameButton = document.getElementById('card-game');
    const gameArea = document.getElementById('game-area');

    const playGame = (type) => {
        let gifPath = type === 'dice' ? 'dice.gif' : 'card.gif';
        gameArea.innerHTML = `<div id="game-animation"><img src="${gifPath}" alt="animation" style="width: 100%; height: auto;"></div>`;

        setTimeout(() => {
            let questionData = getQuestion(type);
            gameArea.innerHTML = `
                <div id="question-box">
                    <h1 style="color: white;">${type.charAt(0).toUpperCase() + type.slice(1)} Game</h1>
                    <p style="color: white;">${questionData.question}</p>
                    <input type="text" id="answer" placeholder="Enter your answer" style="border: 1px solid #ddd; border-radius: 4px; padding: 10px; margin: 10px 0; width: 80%;" />
                    <button id="submit-btn" style="background-color: #555; color: white; border-radius: 20px; padding: 10px 20px; border: none; transition: background-color 0.2s, transform 0.2s;">Submit</button>
                </div>`;

            // Add event listener for the submit button after the DOM is updated
            document.getElementById('submit-btn').addEventListener('click', () => {
                checkAnswer(questionData.answer, questionData.solution, type);
            });
        }, 3000);
    };

    const getQuestion = (type) => {
        const diceQuestions = [
            {
                question: "What is the expected value of rolling two six-sided dice?",
                answer: "7",
                solution: "To find the expected value, add all possible outcomes (2 to 12) and divide by the number of outcomes (11)."
            },
            {
                question: "On average, how many times must a 6-sided die be rolled until a 6 turns up?",
                answer: "6",
                solution: "To find the average rolls for a fair 6-sided die to show a 6, use the formula for expected value: E[X] = 1/p, where p is the probability of rolling a 6 (1/6). Therefore, the expected value is 6."
            },
            {
                question: "On average, how many times must a 6-sided die be rolled until the sequence 65 appears?",
                answer: "36",
                solution: "The expected number of rolls until the sequence 65 appears can be computed using Markov chains or by solving recurrence relations, and the result is 36."
            },
            {
                question: "On average, how many times must a 6-sided die be rolled until all sides appear at least once?",
                answer: "14.7",
                solution: "The expected number of rolls to see all six sides at least once is the 6th harmonic number times 6, which equals approximately 14.7."
            },
            {
                question: "What is the probability of rolling doubles with two six-sided dice?",
                answer: "1/6",
                solution: "There are 6 possible doubles (1-1, 2-2, ..., 6-6) out of 36 possible outcomes, giving a probability of 1/6."
            },
            {
                question: "If you roll a six-sided die 4 times, what is the probability of getting at least one 6?",
                answer: "51.77%",
                solution: "The probability of not getting a 6 in a single roll is 5/6. The probability of not getting a 6 in 4 rolls is (5/6)^4. Subtract this from 1 to find the probability of getting at least one 6: 1 - (5/6)^4 ≈ 51.77%."
            },
            {
                question: "On average, how many rolls are required to get a sum of 10 with two six-sided dice?",
                answer: "6",
                solution: "The probability of getting a sum of 10 is 3/36 or 1/12. Therefore, on average, you would expect 12 rolls to get a sum of 10."
            }
        ];

        const cardQuestions = [
            {
                question: "What's the probability of getting a flush in a poker hand?",
                answer: "0.00198079",
                solution: "The probability of getting a flush (all cards of the same suit) in poker is calculated by dividing the number of flush combinations by the total number of possible hands, resulting in approximately 0.198% or 0.00198079."
            },
            {
                question: "What is the probability of being dealt a straight in a standard 52-card deck?",
                answer: "0.00392465",
                solution: "There are 10,200 possible straight hands and 2,598,960 total hands. So the probability is approximately 0.00392465."
            },
            {
                question: "What's the probability of getting a full house in poker?",
                answer: "0.00144058",
                solution: "The probability of getting a full house is calculated by dividing the number of full house combinations by the total number of possible hands, resulting in approximately 0.144% or 0.00144058."
            },
            {
                question: "What's the probability of drawing four of a kind in a five-card poker hand?",
                answer: "0.0002401",
                solution: "There are 624 ways to draw four of a kind out of 2,598,960 possible hands, giving a probability of approximately 0.02401% or 0.0002401."
            },
            {
                question: "What is the probability of being dealt exactly two pairs in poker?",
                answer: "0.047539",
                solution: "The probability of being dealt exactly two pairs is calculated by dividing the number of two-pair combinations by the total number of possible hands, resulting in approximately 4.75% or 0.047539."
            },
            {
                question: "What is the probability of drawing an Ace from a standard 52-card deck?",
                answer: "1/13",
                solution: "There are 4 Aces in a deck of 52 cards, so the probability is 4/52, which simplifies to 1/13 or approximately 7.69%."
            },
            {
                question: "What is the probability of being dealt a pair in poker?",
                answer: "0.422569",
                solution: "The probability of being dealt a pair in poker is approximately 42.26% or 0.422569."
            }
        ];

        return type === 'dice' ? diceQuestions[Math.floor(Math.random() * diceQuestions.length)] : cardQuestions[Math.floor(Math.random() * cardQuestions.length)];
    };

    const checkAnswer = (correctAnswer, solution, type) => {
        const userAnswer = document.getElementById('answer').value;
        if (userAnswer.trim() === correctAnswer) {
            alert('Correct!');
            setTimeout(() => playGame(type), 2000);
        } else {
            alert(`Wrong! ${solution}`);
            gameArea.innerHTML += `<button id="menu-btn" style="margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; border: none; color: white; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); transition: background-color 0.3s, transform 0.3s;">Menu</button>`;
            document.getElementById('menu-btn').addEventListener('click', () => displayStartMenu());
        }
    };

    const displayStartMenu = () => {
        gameArea.innerHTML = `
            <div style="text-align: center;">
                <h1 style="color: white; margin-bottom: 30px;">Quant Game</h1>
                <div class="game-selector" style="display: flex; justify-content: center; gap: 20px;">
                    <button id="dice-game" style="background-color: #4CAF50; border: none; color: white; padding: 10px 20px; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); transition: background-color 0.3s, transform 0.3s;">Dice Game</button>
                    <button id="card-game" style="background-color: #4CAF50; border: none; color: white; padding: 10px 20px; border-radius: 25px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); transition: background-color 0.3s, transform 0.3s;">Card Game</button>
                </div>
            </div>`;

        document.getElementById('dice-game').addEventListener('click', () => playGame('dice'));
        document.getElementById('card-game').addEventListener('click', () => playGame('cards'));
    };

    // Display the start menu when the page loads
    displayStartMenu();

}, []);

  return (
    <Box sx={{ mt: 10, mb: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
        <Box sx={{ flex: 1, pr: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to my page
          </Typography>
          <Typography variant="h5" paragraph>
            This is a personal website to showcase my work and interests in biotechnology and computer science. As well as give my own insights and opinions on emerging technologies.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, height: 400 }}>
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Brain />
            <OrbitControls />
          </Canvas>
        </Box>
      </Box>

      {/* Topic Cards */}
      <Box sx={{ mb: 14 }}>
        <Grid container spacing={6}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <MotionCard
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hoveredCard === index ? 'Click to learn more about ' + card.title : 'Hover to see more'}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Me Section */}
      <Box sx={{ mb: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          About Me
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Avatar
                  alt="Kritan Bhurtyal"
                  src="/profile-pic.jpg"
                  sx={{ width: 100, height: 100, mb: 4 }}
                />
                <Typography variant="h5" gutterBottom>Kritan Bhurtyal</Typography>
                <Typography variant="body1" paragraph>
                  I&apos;m passionate about making a change with technology. I am mainly interested in the intersection between technology and medicine.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
              <Image
                src={aboutImages[currentAboutImage]}
                alt="About me"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography>Chapel Hill, USA</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SchoolIcon sx={{ mr: 1 }} />
            <Typography>BS in Computer Science and Statistics</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LightbulbIcon sx={{ mr: 1 }} />
            <Typography>Technology Enthusiast</Typography>
          </Box>
        </Box>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ mb: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Portfolio
        </Typography>
        <Typography variant="h5" gutterBottom>Experience</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mb: 6 }}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              sx={{
                width: '300px', // Standardized width
                height: '150px', // Standardized height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                p: 2,
                mb: 4,
                boxShadow: 3, // Optional: Add some shadow for visual effect
              }}
            >
              <Typography variant="h6" gutterBottom>
                {exp.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
            </Card>
          ))}
        </Box>
        <Typography variant="h5" gutterBottom>Projects</Typography>
        <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: 'inline-block',
                width: 300,
                mr: 4,
                wordWrap: 'break-word',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '220px', // Adjusted height for consistency
              }}
            >
              <CardContent sx={{ whiteSpace: 'normal' }}>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} href={project.link} target="_blank" rel="noopener noreferrer">
                  Try Me
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Goals Section */}
      <Box sx={{ mb: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Goals
        </Typography>
        <Grid container spacing={6}>
          {goals.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.date}
                  </Typography>
                  <Typography variant="body1">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Blogs
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mb: 6,
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid container spacing={6}>
          {filteredPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={200}
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Link href={post.link} passHref>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, borderRadius: '20px' }}
                      target="_blank" // Opens the link in a new tab
                      rel="noopener noreferrer"
                    >
                      Read
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Kritan's Arcade */}
      <Box sx={{ mb: 14, mt: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 3 }}>
          Kritan&apos;s Arcade
        </Typography>
        <Typography variant="h5" paragraph sx={{ textAlign: 'left', mb: 6 }}>
          I&apos;m very passionate about game development, you can find my big projects on github but here&apos;s some mini-games to keep you engaged:
        </Typography>
        <Grid container spacing={6} sx={{ justifyContent: 'center' }}>
          {arcadeGames.map((game, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {game.description}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: '20px' }}
                    onClick={() => handlePlayClick(game.src)}
                    disabled={showGame && showGame !== game.src}
                  >
                    Play
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        {showGame && (
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: '20px', mb: 6 }}
              onClick={handleCloseClick}
            >
              Close
            </Button>
            <iframe
              src={showGame}
              style={{ width: '100%', height: '500px', border: 'none' }}
              title="Game"
            ></iframe>
          </Box>
        )}
      </Box>

      {/* Links Section */}
      <Box sx={{ mt: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Links
        </Typography>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}
          >
            <Link href="https://www.linkedin.com/in/kritanbhurtyal/" target="_blank" rel="noopener" passHref>
              <LinkedInIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
            </Link>
            <Link href="https://github.com/bhurtyalkritan" target="_blank" rel="noopener" passHref>
              <GitHubIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCE1xLUv0ZnARG_pXjuq3p6A" target="_blank" rel="noopener" passHref>
              <YouTubeIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
            </Link>
            <Link href="https://medium.com/@kritanbhurtyal" target="_blank" rel="noopener" passHref  >
              <FaMedium size={60} style={{ marginBottom: 16 }} />
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="game-area" id="game-area" style={{ backgroundColor: '#1f1f1f', color: '#fff', padding: '20px', borderRadius: '10px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ maxWidth: '100%' }}>
                <div id="game-animation" style={{ textAlign: 'center', marginBottom: '20px' }}></div>
                <div className="game-selector" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                  <button id="dice-game" style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '25px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', transition: 'background-color 0.3s, transform 0.3s' }}>Dice Game</button>
                  <button id="card-game" style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '25px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', transition: 'background-color 0.3s, transform 0.3s' }}>Card Game</button>
                </div>
                <div id="question-box" style={{ display: 'none', textAlign: 'center' }}>
                  <h1 style={{ color: 'white' }}>Quant Game</h1>
                  <p style={{ color: 'white' }}>Question will appear here.</p>
                  <input type="text" id="answer" placeholder="Enter your answer" style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '10px 0', width: '80%' }} />
                  <button id="submit-btn" style={{ backgroundColor: '#555', color: 'white', borderRadius: '20px', padding: '10px 20px', border: 'none', transition: 'background-color 0.2s, transform 0.2s' }}>Submit</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* Inline CSS for the game */}
      <style jsx>{`
        .game-selector {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }

        .game-area {
          border: 2px solid #4CAF50;
          padding: 20px;
          border-radius: 10px;
          background-color: #1f1f1f;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          width: 100%;
          height: 400px;
          overflow-y: auto;
        }

        button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 25px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          transition: background-color 0.3s, transform 0.3s;
        }

        button:hover {
          background-color: #45a049;
          transform: scale(1.05);
        }

        #question-box input[type="text"] {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 10px;
          margin: 10px 0;
          width: 80%;
        }

        #submit-btn {
          background-color: #555;
          color: white;
          border-radius: 20px;
          padding: 10px 20px;
          border: none;
          transition: background-color 0.2s, transform 0.2s;
        }

        #submit-btn:hover {
          background-color: #666;
          transform: scale(1.05);
        }

        #question-box, #game-animation {
          width: 100%;
          margin: auto;
          border: 2px solid #4CAF50;
          padding: 20px;
          border-radius: 10px;
          background-color: #1f1f1f;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        #game-animation img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </Box>
  );
};

export default Home;
