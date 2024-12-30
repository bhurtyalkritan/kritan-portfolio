// components/HeaderSection/HeaderSection.jsx

import React from 'react';
import { Typography, Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BrainModel from '../BrainModel/BrainModel';
import styles from './HeaderSection.module.css';

function HeaderSection() {
  return (
    <Box className={styles.headerContainer}>
      {/* Left side text */}
      <Box className={styles.textContainer}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
        >
          Welcome to my page
        </Typography>
        <Typography
          variant="h5"
          paragraph
          sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}
        >
          This is a personal website to showcase my work and interests in
          biotechnology and computer science, as well as share insights
          on emerging technologies.
        </Typography>
      </Box>

      {/* 3D Brain Model */}
      <Box className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <BrainModel />
          <OrbitControls />
        </Canvas>
      </Box>
    </Box>
  );
}

export default HeaderSection;
