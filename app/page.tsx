'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProofChart from '@/components/ProofChart';
import Partnership from '@/components/Partnership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ProofChart />
      <Partnership />
      <Contact />
      <Footer />
    </>
  );
}
