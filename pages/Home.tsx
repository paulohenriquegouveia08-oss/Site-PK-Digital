import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Benefits />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
