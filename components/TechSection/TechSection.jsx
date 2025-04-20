import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './TechSection.module.css';

const MotionCard = motion(Card);

const techCards = [
  {
    title: 'Arcade',
    image: '/dice.gif',
    description: 'Interactive games and simulations',
    link: '/arcade'
  },
  {
    title: 'Benchmarking',
    image: '/card.gif',
    description: 'LLM performance tests and comparisons',
    link: '/benchmarking'
  },
  {
    title: 'Research',
    image: '/neural-network.jpg',
    description: 'My technical research projects',
    link: '/research'
  },
  {
    title: 'Goals',
    image: '/crispr.webp',
    description: 'Technical goals and progress tracking',
    link: '/goals'
  }
];

function TechSection() {
  return (
    <section id="tech" className={styles.techSection}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'left', mb: 6, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        All Things Tech
      </Typography>
      
      <Grid container spacing={4} className={styles.techCardsContainer}>
        {techCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link href={card.link} passHref>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={styles.techCard}
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
                    {card.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default TechSection;
