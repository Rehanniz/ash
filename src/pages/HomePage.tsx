import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedGames from '../components/Home/FeaturedGames';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedGames />
    </div>
  );
};

export default HomePage;