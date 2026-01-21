import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features'; // Import unique
import Pricing from '../components/Pricing'; 
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Barre de navigation */}
      <Navbar />
      
      {/* Section d'accueil (Promesse) */}
      <Hero />
      
      {/* Section Notes & IA (Transformation) */}
      <Features />
      
      {/* Section Tarifs (Transparence) */}
      <Pricing />
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default Index;