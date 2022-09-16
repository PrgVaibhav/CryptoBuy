import React from 'react';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import MarketAnalysis from './MarketAnalysis';
import ProductsSection from './ProductsSection';

function MainSection() {
  return (
    <main>
      <HeroSection />
      <CardSection />
      <AboutSection />
      <ServiceSection />
      <MarketAnalysis />
      <ProductsSection />
    </main>
  );
}

export default MainSection;
