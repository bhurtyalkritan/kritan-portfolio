// components/PortfolioSection/PortfolioSection.jsx

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { experiencesData } from '../../constants/experiencesData';
import { projectsData } from '../../constants/projectsData';
import styles from './PortfolioSection.module.css';

function PortfolioSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Optional debugging to verify data is loaded:
  // console.log('experiencesData:', experiencesData);
  // console.log('projectsData:', projectsData);

  return (
    <Box className={styles.portfolioContainer} id="portfolio">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'left', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        Portfolio
      </Typography>

      {/* Experience */}
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <Box className={styles.experienceContainer}>
        {experiencesData?.map((exp, index) => (
          <Card 
            key={index} 
            className={styles.experienceCard}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{ 
              position: 'relative',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {exp.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
              
              {/* Hover overlay with responsibilities */}
              {hoveredCard === index && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                    padding: 2,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    zIndex: 10
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: '#4CAF50' }}>
                    Key Responsibilities:
                  </Typography>
                  <List dense>
                    {exp.responsibilities?.map((responsibility, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemText 
                          primary={`• ${responsibility}`}
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              fontSize: '0.875rem',
                              color: 'white'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Projects */}
      <Typography variant="h5" gutterBottom>
        Projects
      </Typography>
      <Box className={styles.projectsContainer}>
        {projectsData?.map((project, index) => (
          <Card key={index} className={styles.projectCard}>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectButton}
              >
                Try Me
              </a>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default PortfolioSection;
