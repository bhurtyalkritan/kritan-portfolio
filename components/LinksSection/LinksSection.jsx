// components/LinksSection/LinksSection.jsx

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaMedium } from 'react-icons/fa';
import QuantGame from '../QuantGame/QuantGame';
import styles from './LinksSection.module.css';

function LinksSection() {
  return (
    <Box className={styles.linksContainer} id="links">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'left', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        Links
      </Typography>
      <Grid container spacing={6}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {/* Social Links */}
          <Link
            href="https://www.linkedin.com/in/kritanbhurtyal/"
            target="_blank"
            rel="noopener"
            passHref
          >
            <LinkedInIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
          </Link>
          <Link
            href="https://github.com/bhurtyalkritan"
            target="_blank"
            rel="noopener"
            passHref
          >
            <GitHubIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCE1xLUv0ZnARG_pXjuq3p6A"
            target="_blank"
            rel="noopener"
            passHref
          >
            <YouTubeIcon fontSize="large" sx={{ mb: 2, fontSize: 60 }} />
          </Link>
          <Link
            href="https://medium.com/@kritanbhurtyal"
            target="_blank"
            rel="noopener"
            passHref
          >
            <FaMedium size={60} style={{ marginBottom: 16 }} />
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* The "game-area" where the quant game lives */}
          <div id="game-area" className={styles.gameArea}>
            {/* Insert the QuantGame component here */}
            <QuantGame />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LinksSection;
