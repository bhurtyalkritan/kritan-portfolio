// components/TopicCardsSection/TopicCardsSection.jsx

import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { cardData } from '../../constants/cardData';
import styles from './TopicCardsSection.module.css';

const MotionCard = motion(Card);

function TopicCardsSection({ hoveredCard, setHoveredCard }) {
  return (
    <>
    <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'left', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            Top Projects
          </Typography>
    
    <Grid container spacing={4} className={styles.topicCardsContainer}>
      
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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
                {hoveredCard === index
                  ? `Click to learn more about ${card.title}`
                  : 'Hover to see more'}
              </Typography>
            </CardContent>
          </MotionCard>
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default TopicCardsSection;
