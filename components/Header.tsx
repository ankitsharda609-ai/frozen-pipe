
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <i className="fas fa-snowflake text-white text-xl"></i>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white md:text-white text-slate-900'}`}>
            ARCTIC<span className="text-blue-500">SHIELD</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#diagnostics" className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>AI Assistant</a>
          <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>Services</a>
          <a href="#faq" className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>FAQ</a>
          <a 
            href="tel:8443406413" 
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-red-200"
          >
            (844) 340-6413
          </a>
        </nav>

        {/* Mobile Call Icon Only */}
        <a href="tel:8443406413" className="md:hidden text-red-600 text-2xl">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
