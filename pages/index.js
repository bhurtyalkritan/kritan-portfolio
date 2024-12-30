// pages/index.js

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import HeaderSection from '../components/HeaderSection/HeaderSection';
import TopicCardsSection from '../components/TopicCardsSection/TopicCardsSection';
import AboutSection from '../components/AboutSection/AboutSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import ArcadeSection from '../components/ArcadeSection/ArcadeSection';
import LinksSection from '../components/LinksSection/LinksSection';

// Example constants (if you want to use them in the page)
import { aboutImages } from '../constants/aboutImages';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [showGame, setShowGame] = useState(null);

  // Auto-rotate about section images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAboutImage((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Arcade game handlers
  const handlePlayClick = (src) => {
    setShowGame(src);
  };

  const handleCloseClick = () => {
    setShowGame(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kritan Bhurtyal&apos;s Site</title>
        <meta
          name="description"
          content="Personal website showcasing biotech & computer science projects."
        />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <HeaderSection />

        {/* Topic Cards */}
        <TopicCardsSection
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />

        {/* About Me */}
        <AboutSection currentAboutImage={currentAboutImage} />

        {/* Portfolio */}
        <PortfolioSection />

        {/* Arcade */}
        <ArcadeSection
          showGame={showGame}
          handlePlayClick={handlePlayClick}
          handleCloseClick={handleCloseClick}
        />

        {/* Links (includes the QuantGame area) */}
        <LinksSection />
      </main>
    </div>
  );
}
