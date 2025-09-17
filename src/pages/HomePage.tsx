import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import KnowledgeHub from '../components/KnowledgeHub';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Values />
      <KnowledgeHub />
    </div>
  );
};

export default HomePage;