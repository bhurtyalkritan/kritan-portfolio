import Head from 'next/head';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { arcadeGames } from '@/constants/arcadeGames';
import styles from '@/styles/ArcadePage.module.css';

const MotionCard = motion(Card);

export default function ArcadePage() {
  return (
    <>
      <Head>
        <title>Arcade Games</title>
        <meta name="description" content="Collection of interactive games" />
      </Head>

      <main className={styles.container}>
        <Typography variant="h2" component="h1" className={styles.title}>
          Arcade Games
        </Typography>

        <Grid container spacing={4} className={styles.gamesContainer}>
          {arcadeGames.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={game.src} passHref>
                <MotionCard
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className={styles.gameCard}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/${game.title.toLowerCase().replace(' ', '-')}.gif`}
                    alt={game.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {game.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {game.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}
