
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center text-white overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/111/1920/1080?blur=2" 
          alt="Frozen Pipes Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-bold uppercase tracking-wider">24/7 Emergency Service in Eagle River</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            No Water in <br/>
            <span className="text-blue-400">Your Home?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Don't let a frozen pipe turn into a burst disaster. Our steam-thawing experts are standing by in Eagle River to restore your water safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:8443406413" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-red-900/20"
            >
              <i className="fas fa-phone-alt"></i>
              CALL EMERGENCY LINE
            </a>
            <a 
              href="#diagnostics" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-5 rounded-xl font-bold text-xl flex items-center justify-center transition-all"
            >
              Get AI Diagnosis First
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-slate-400">
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">30-60 Min</span>
              <span className="text-sm">Response Time</span>
            </div>
            <div className="h-10 w-px bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">100% Licensed</span>
              <span className="text-sm">Insured Pros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
