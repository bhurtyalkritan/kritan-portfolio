// components/AboutSection/AboutSection.jsx

import React from 'react';
import Image from 'next/image';
import { Box, Grid, Card, CardContent, Avatar, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { aboutImages } from '../../constants/aboutImages';
import styles from './AboutSection.module.css';

function AboutSection({ currentAboutImage }) {
  return (
    <Box className={styles.aboutContainer} id="about">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'left', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        About Me
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                alt="Kritan Bhurtyal"
                src="/profile-pic.jpeg"
                sx={{ width: 100, height: 100, mb: 4, mx: 'auto' }}
              />
              <Typography variant="h5" gutterBottom>
                Kritan Bhurtyal
              </Typography>
              <Typography variant="body1" paragraph>
                I&apos;m passionate about making a change with technology. 
                I am mainly interested in the intersection between 
                technology and medicine.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className={styles.imageBox}>
            <Image
              src={aboutImages[currentAboutImage]}
              alt="About me"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>

      <Box className={styles.infoContainer}>
        <Box className={styles.infoItem}>
          <LocationOnIcon sx={{ mr: 1 }} />
          <Typography>Chapel Hill, USA</Typography>
        </Box>
        <Box className={styles.infoItem}>
          <SchoolIcon sx={{ mr: 1 }} />
          <Typography>BS in Computer Science and Statistics</Typography>
        </Box>
        <Box className={styles.infoItem}>
          <LightbulbIcon sx={{ mr: 1 }} />
          <Typography>Technology Enthusiast</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;
