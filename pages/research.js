import Head from 'next/head';
import { Container, Typography, Grid, Card, CardContent, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/ResearchPage.module.css';

const MotionCard = motion(Card);

const researchProjects = [
  {
    title: 'Brain MRI Analysis Pipeline',
    description: 'Developed a comprehensive MRI scan analysis tool with 3D visualizations, machine learning for skull stripping and segmentation, and automated report generation.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Three.js', 'Medical Imaging'],
    status: 'Completed',
    link: 'https://github.com/bhurtyalkritan/brainAnalysis'
  },
  {
    title: 'Pond Evolution Simulation',
    description: 'Created a neural network-based simulation modeling evolution in pond environments, demonstrating natural selection and adaptation principles.',
    technologies: ['Python', 'Neural Networks', 'Genetic Algorithms', 'Simulation'],
    status: 'Completed',
    link: 'https://github.com/bhurtyalkritan/pondSimulation'
  },
  {
    title: 'FEMA Disaster Data Analysis',
    description: 'Comprehensive data analysis and research paper examining FEMA disaster response patterns and effectiveness using statistical modeling.',
    technologies: ['R', 'Python', 'Statistical Analysis', 'Data Visualization'],
    status: 'Published',
    link: 'https://github.com/bhurtyalkritan/FemaDataAnalysis'
  },
  {
    title: 'Plant Ecophysiology Research',
    description: 'Ongoing research on plant physiological responses to environmental stress, utilizing advanced data analysis and experimental design.',
    technologies: ['R', 'Python', 'Statistical Modeling', 'Experimental Design'],
    status: 'In Progress',
    link: '#'
  }
];

export default function ResearchPage() {
  return (
    <>
      <Head>
        <title>Research Projects - Kritan Bhurtyal</title>
        <meta name="description" content="Technical research projects and publications" />
      </Head>

      <Container maxWidth="lg" className={styles.container}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h2" component="h1" className={styles.title}>
            Research Projects
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
            Exploring the intersection of technology and science through data-driven research
          </Typography>

          <Grid container spacing={4}>
            {researchProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={styles.projectCard}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Chip 
                        label={project.status} 
                        color={project.status === 'Completed' ? 'success' : project.status === 'Published' ? 'primary' : 'warning'}
                        size="small"
                      />
                    </Box>
                    
                    <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            variant="outlined"
                            size="small"
                          />
                        ))}
                      </Box>
                    </Box>
                    
                    {project.link !== '#' && (
                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <Typography variant="body2" sx={{ color: 'primary.main', cursor: 'pointer' }}>
                            View Project →
                          </Typography>
                        </Link>
                      </Box>
                    )}
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Interested in Collaboration?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I&apos;m always open to discussing research opportunities and interdisciplinary projects.
            </Typography>
            <Link href="mailto:kritanbhurtyal@email.com" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Get in Touch →
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}
