
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicePost from './components/ServicePost';
import FAQ from './components/FAQ';
import AIDiagnostic from './components/AIDiagnostic';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="diagnostics" className="bg-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <AIDiagnostic />
          </div>
        </div>

        <div id="services" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <ServicePost />
          </div>
        </div>

        <div id="faq" className="bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </main>

      <Footer />

      {/* Persistent Mobile Call Button */}
      <a 
        href="tel:8443406413"
        className="md:hidden fixed bottom-6 right-6 left-6 z-50 bg-red-600 text-white font-bold py-4 rounded-full shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
      >
        <i className="fas fa-phone-alt animate-pulse"></i>
        EMERGENCY CALL: (844) 340-6413
      </a>
    </div>
  );
};

export default App;
