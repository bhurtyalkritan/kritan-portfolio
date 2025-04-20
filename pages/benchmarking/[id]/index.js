import { useRouter } from 'next/router';
import { benchmarkData } from '@/constants/benchmarkData';
import Head from 'next/head';
import styles from '@/styles/BenchmarkDetail.module.css';

export default function BenchmarkDetail() {
  const router = useRouter();
  const { id } = router.query;
  const test = benchmarkData.find(t => t.id === id);

  if (!test) {
    return <div>Test not found</div>;
  }

  return (
    <>
      <Head>
        <title>{test.title} Benchmark</title>
        <meta name="description" content={test.description} />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{test.title}</h1>
          <p className={styles.date}>Tested on: {test.date}</p>
          <p className={styles.description}>{test.description}</p>
        </div>
        
        <div className={styles.results}>
          <h2>Test Results</h2>
          <table className={styles.resultsTable}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {test.tests.map((metric, i) => (
                <tr key={i}>
                  <td>{metric.name}</td>
                  <td>{metric.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
