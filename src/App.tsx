import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#091c2b] text-[#edf5f5] flex flex-col font-sans selection:bg-[#34a0a4]/30 selection:text-[#b5e48c]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Portfolio />
          <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
