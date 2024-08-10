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

function Mars() {
  const { scene } = useGLTF('/mars.glb');
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation((prev) => prev + 0.01);
    scene.rotation.y = rotation;
  });

  return <primitive object={scene} scale={9.8} position={[0, 0, -7]} />;
}

const cardData = [
  { title: 'Neural Networks', image: '/neural-network.jpg' },
  { title: 'Data Analysis', image: '/data-analysis.jpg' },
  { title: 'Neuroscience', image: '/gene-editing.jpg' }
];

const goals = [
  { date: 'August 10 2024', title: 'Launch Blog' },
  { date: 'December 2024', title: 'First Research Publication' },
  { date: 'January 2025', title: 'Complete Appstractify' },
  { date: 'May 2025', title: 'Release Bioinformatics Tool' },
  // Add more goals items
];

const aboutImages = ['/about-images/about-image1.jpg', '/about-images/about-image2.jpg', '/about-images/about-image3.jpg'];

const experiences = [
  { title: 'Product Support Engineer Intern', company: 'Tesla', duration: 'Sep 2024 - Dec 2024' },
  { title: 'PM Intern', company: 'Lenovo', duration: 'June 2024 - July 2024' },
  { title: 'Backend Software Engineer', company: 'App Team Carolina', duration: 'Feb 2024 - Present' },
  { title: 'Software Engineer Intern', company: 'Amtev', duration: 'May 2023 - Aug 2023' },
];

const projects = [
  { title: 'Appstractify', description: 'Worked on...', link: 'https://github.com/bhurtyalkritan/AppstractifyBeta' },
  { title: 'Brain Analysis', description: 'Developed...', link: 'https://github.com/bhurtyalkritan/brainAnalysis' },
  { title: 'Finance Web Scrapper', description: 'Developed...', link: 'https://github.com/JordanLakeTrading/JLT-WEBSCRAPPER' },
  { title: 'PondSimulation', description: 'Worked on...', link: 'https://github.com/bhurtyalkritan/pondSimulation' },
  { title: 'RemoteEyeMouse', description: 'Worked on...', link: 'https://github.com/bhurtyalkritan/RemoteMouse' },
  { title: 'Fema Data Research', description: 'Developed...', link: 'https://github.com/bhurtyalkritan/FemaDataAnalysis' },
  { title: 'MixNMath', description: 'Worked on...', link: 'https://github.com/bhurtyalkritan/MixNMath' },
  { title: 'TerminalBankingSystem', description: 'Developed...', link: 'https://github.com/bhurtyalkritan/bankingSystem' },
  { title: 'SolarSystemSimulation', description: 'Worked on...', link: 'https://github.com/bhurtyalkritan/SolarSystemSimulation' },
  { title: 'PlanetaryGravity', description: 'Developed...', link: 'https://github.com/bhurtyalkritan/planetary-gravity' },
  { title: 'FinanceScrapper', description: 'Developed...', link: 'https://github.com/JordanLakeTrading/JLT-WEBSCRAPPER' },
  { title: 'Singularity', description: 'Developed...', link: 'https://github.com/bhurtyalkritan/Singularity' },
];

const blogPosts = [
  { title: 'CRISPR Breakthrough', image: '/crispr.jpg', slug: 'crispr-breakthrough' },
  { title: 'AI in Drug Discovery', image: '/ai-drug.jpg', slug: 'ai-in-drug-discovery' },
  { title: 'Personalized Medicine', image: '/personalized-med.jpg', slug: 'personalized-medicine' },
  { title: 'Bioprinting Organs', image: '/bioprinting.jpg', slug: 'bioprinting-organs' },
  { title: 'Microbiome Research', image: '/microbiome.jpg', slug: 'microbiome-research' },
  { title: 'Gene Therapy Advances', image: '/gene-therapy.jpg', slug: 'gene-therapy-advances' },
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showGame, setShowGame] = useState(null);

  const arcadeGames = [
    { title: 'Space Invaders', description: 'Classic space shooting game.', src: '/space-invaders.html' },
    { title: 'Memory Match', description: 'Find all the matching pairs.', src: '/index.html' },
    { title: 'Whack-A-Mole', description: 'Click on the moles as they appear.', src: '/whack-a-mole.html' },
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
            <Card key={index} sx={{ display: 'inline-block', width: 300, mr: 4, wordWrap: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                    height={500}
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, borderRadius: '20px' }}
                    >
                      See More
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
          <Grid item xs={12} md={6} sx={{ height: 400 }}>
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Mars />
              <OrbitControls />
            </Canvas>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
