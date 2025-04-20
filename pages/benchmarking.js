import Head from 'next/head';
import BenchmarkingSection from '@/components/BenchmarkingSection/BenchmarkingSection';

export default function Benchmarking() {
  return (
    <>
      <Head>
        <title>LLM Benchmarking Tests</title>
        <meta name="description" content="Benchmarking tests for various LLMs" />
      </Head>
      <main>
        <BenchmarkingSection />
      </main>
    </>
  );
}
