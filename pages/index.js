import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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

  return <primitive object={scene} scale={0.1} position={[0, 0, -7]} />;
}

const cardData = [
  { title: 'Gene Editing', image: '/gene-editing.jpg' },
  { title: 'Bioinformatics', image: '/bioinformatics.jpg' },
  { title: 'Synthetic Biology', image: '/synthetic-biology.jpg' },
];

const roadmap = [
  { date: 'Q1 2024', title: 'Launch Blog' },
  { date: 'Q2 2024', title: 'First Research Publication' },
  { date: 'Q3 2024', title: 'Collaborate with BioTech Labs' },
  { date: 'Q4 2024', title: 'Release Bioinformatics Tool' },
  // Add more roadmap items
];

const aboutImages = ['/about-images/about-image1.jpg','/about-images/about-image2.jpg','/about-images/about-image3.jpg'];

const experiences = [
  { title: 'Research Assistant', company: 'BioTech Lab', duration: '2019-2021' },
  { title: 'Intern', company: 'GeneTech', duration: '2018' },
  // Add more experiences
];

const projects = [
  { title: 'CRISPR Gene Editing', description: 'Worked on...' },
  { title: 'Bioinformatics Tool', description: 'Developed...' },
  // Add more projects
];

const blogPosts = [
  { title: 'CRISPR Breakthrough', image: '/crispr.jpg' },
  { title: 'AI in Drug Discovery', image: '/ai-drug.jpg' },
  { title: 'Personalized Medicine', image: '/personalized-med.jpg' },
  { title: 'Bioprinting Organs', image: '/bioprinting.jpg' },
  { title: 'Microbiome Research', image: '/microbiome.jpg' },
  { title: 'Gene Therapy Advances', image: '/gene-therapy.jpg' },
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAboutImage((prevImage) => (prevImage + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ mt: 10, mb: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
        <Box sx={{ flex: 1, pr: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to the Biotech Blog
          </Typography>
          <Typography variant="h5" paragraph>
            This blog explores the latest advancements in biotechnology, featuring articles on cutting-edge research, innovative technologies, and insights from industry experts. Stay tuned for exciting updates and deep dives into the world of biotech!
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
                  Passionate about biotechnology and its potential to change the world...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
              <img
                src={aboutImages[currentAboutImage]}
                alt="About me"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
        <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', mb: 6, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          {experiences.map((exp, index) => (
            <Card key={index} sx={{ display: 'inline-block', width: 300, mr: 4 }}>
              <CardContent>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography variant="body2">{exp.company}</Typography>
                <Typography variant="body2" color="text.secondary">{exp.duration}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Typography variant="h5" gutterBottom>Projects</Typography>
        <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          {projects.map((project, index) => (
            <Card key={index} sx={{ display: 'inline-block', width: 300, mr: 4 }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Blog Section */}
      <Box sx={{ mt: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Blogs
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search blogs..."
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
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Roadmap Section */}
      <Box sx={{ mt: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Roadmap
        </Typography>
        <Grid container spacing={6}>
          {roadmap.map((item, index) => (
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

      {/* Links Section */}
      <Box sx={{ mt: 14 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'left', mb: 6 }}>
          Links
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <LinkedInIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
            <GitHubIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
            <YouTubeIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
            <FaMedium size={60} sx={{ mb: 2 }} />
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
