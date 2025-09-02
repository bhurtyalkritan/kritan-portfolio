import Head from 'next/head';
import { Container, Typography, Grid, Card, CardContent, Box, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle, RadioButtonUnchecked, Schedule } from '@mui/icons-material';
import styles from '@/styles/GoalsPage.module.css';

const MotionCard = motion(Card);

const goals = [
  {
    category: 'Technical Skills',
    items: [
      { 
        title: 'Master Advanced Machine Learning', 
        description: 'Deep dive into neural networks, computer vision, and NLP',
        progress: 75,
        status: 'in-progress',
        target: 'End of 2025'
      },
      { 
        title: 'Full-Stack Development Mastery', 
        description: 'Become proficient in modern web technologies and cloud platforms',
        progress: 85,
        status: 'in-progress',
        target: 'Q2 2025'
      },
      { 
        title: 'DevOps and Infrastructure', 
        description: 'Learn Kubernetes, Docker, CI/CD pipelines, and cloud architecture',
        progress: 60,
        status: 'in-progress',
        target: 'Q3 2025'
      }
    ]
  },
  {
    category: 'Research & Innovation',
    items: [
      { 
        title: 'Publish Research Paper', 
        description: 'Complete and publish research on plant ecophysiology or biotech applications',
        progress: 40,
        status: 'in-progress',
        target: 'End of 2025'
      },
      { 
        title: 'Patent Application', 
        description: 'File a patent for innovative biotechnology or software solution',
        progress: 20,
        status: 'planning',
        target: '2026'
      },
      { 
        title: 'Conference Presentation', 
        description: 'Present research findings at a major scientific or tech conference',
        progress: 30,
        status: 'planning',
        target: 'Q4 2025'
      }
    ]
  },
  {
    category: 'Career Development',
    items: [
      { 
        title: 'Tesla Full-Time Position', 
        description: 'Secure a full-time software engineering role at Tesla post-graduation',
        progress: 70,
        status: 'in-progress',
        target: 'Summer 2026'
      },
      { 
        title: 'Open Source Contributions', 
        description: 'Contribute meaningfully to major open source projects in biotech/ML',
        progress: 45,
        status: 'in-progress',
        target: 'Ongoing'
      },
      { 
        title: 'Mentorship Program', 
        description: 'Start mentoring undergraduate students in CS and research',
        progress: 90,
        status: 'completed',
        target: 'Completed'
      }
    ]
  },
  {
    category: 'Personal Projects',
    items: [
      { 
        title: 'Biotech Startup Concept', 
        description: 'Develop a viable business plan for biotech innovation',
        progress: 25,
        status: 'planning',
        target: '2026'
      },
      { 
        title: 'Advanced Portfolio Website', 
        description: 'Create a sophisticated portfolio with 3D visualizations and interactive demos',
        progress: 80,
        status: 'in-progress',
        target: 'Q1 2025'
      },
      { 
        title: 'Educational Content Creation', 
        description: 'Create educational content about biotech and programming on YouTube/Medium',
        progress: 35,
        status: 'in-progress',
        target: 'Ongoing'
      }
    ]
  }
];

const getStatusIcon = (status) => {
  switch (status) {
    case 'completed':
      return <CheckCircle sx={{ color: 'success.main' }} />;
    case 'in-progress':
      return <Schedule sx={{ color: 'warning.main' }} />;
    case 'planning':
      return <RadioButtonUnchecked sx={{ color: 'action.disabled' }} />;
    default:
      return <RadioButtonUnchecked />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'in-progress':
      return 'primary';
    case 'planning':
      return 'default';
    default:
      return 'default';
  }
};

export default function GoalsPage() {
  return (
    <>
      <Head>
        <title>Goals & Progress - Kritan Bhurtyal</title>
        <meta name="description" content="Technical goals and progress tracking" />
      </Head>

      <Container maxWidth="lg" className={styles.container}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h2" component="h1" className={styles.title}>
            Goals & Progress
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
            Tracking my journey in technology, research, and personal development
          </Typography>

          {goals.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                {category.category}
              </Typography>
              
              <Grid container spacing={3}>
                {category.items.map((goal, goalIndex) => (
                  <Grid item xs={12} md={6} lg={4} key={goalIndex}>
                    <MotionCard
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (goalIndex * 0.05) }}
                      whileHover={{ scale: 1.02 }}
                      className={styles.goalCard}
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {getStatusIcon(goal.status)}
                          <Typography variant="h6" sx={{ ml: 1, flexGrow: 1 }}>
                            {goal.title}
                          </Typography>
                          <Chip 
                            label={goal.status.replace('-', ' ')} 
                            color={getStatusColor(goal.status)}
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                          {goal.description}
                        </Typography>
                        
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              Progress
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {goal.progress}%
                            </Typography>
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={goal.progress} 
                            sx={{ 
                              height: 8, 
                              borderRadius: 4,
                              backgroundColor: 'grey.200',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                              }
                            }}
                          />
                        </Box>
                        
                        <Typography variant="caption" color="text.secondary">
                          Target: {goal.target}
                        </Typography>
                      </CardContent>
                    </MotionCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
          
          <Box sx={{ mt: 6, textAlign: 'center', p: 4, backgroundColor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Why I Track Goals
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto' }}>
              Setting clear, measurable goals helps me stay focused on continuous learning and growth. 
              Each goal represents a step toward my vision of contributing meaningfully to the intersection 
              of technology and biotechnology.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
