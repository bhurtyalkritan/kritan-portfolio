// components/PortfolioSection/PortfolioSection.jsx

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { experiencesData } from '../../constants/experiencesData';
import { projectsData } from '../../constants/projectsData';
import styles from './PortfolioSection.module.css';

function PortfolioSection() {
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
          <Card key={index} className={styles.experienceCard}>
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
