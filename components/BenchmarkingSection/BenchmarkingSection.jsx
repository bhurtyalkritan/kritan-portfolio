import styles from './BenchmarkingSection.module.css';
import Link from 'next/link';
import { benchmarkData } from '@/constants/benchmarkData';

const BenchmarkingSection = () => {
  return (
    <section className={styles.benchmarking}>
      <h2>LLM Benchmarking Tests</h2>
      <div className={styles.content}>
        <p>This section details various benchmarking tests I've conducted on different LLMs.</p>
        <div className={styles.testsContainer}>
          {benchmarkData.map((test) => (
            <Link key={test.id} href={`/benchmarking/${test.id}`} className={styles.testCard}>
              <div className={styles.cardImage} style={{ backgroundImage: `url(${test.image})` }} />
              <div className={styles.cardContent}>
                <h3>{test.title}</h3>
                <p className={styles.date}>{test.date}</p>
                <p className={styles.description}>{test.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenchmarkingSection;
