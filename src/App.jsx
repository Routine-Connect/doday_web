import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StreakDemo from './components/StreakDemo';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <StreakDemo />
      <Download />
      <Footer />
    </div>
  );
}

export default App;