// components/ArcadeSection/ArcadeSection.jsx

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { arcadeGames } from '../../constants/arcadeGames';
import styles from './ArcadeSection.module.css';

function ArcadeSection({ showGame, handlePlayClick, handleCloseClick }) {
  return (
    <Box className={styles.arcadeContainer} id="arcade">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'left', mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        Kritan&apos;s Arcade
      </Typography>
      <Typography variant="h5" paragraph sx={{ textAlign: 'left', mb: 6 }}>
        I&apos;m very passionate about game development...
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
          />
        </Box>
      )}
    </Box>
  );
}

export default ArcadeSection;
