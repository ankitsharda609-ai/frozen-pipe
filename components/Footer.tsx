
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <i className="fas fa-snowflake text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                ARCTIC<span className="text-blue-500">SHIELD</span>
              </span>
            </div>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              Premium emergency frozen pipe thawing and burst pipe repair service. We specialize in the extreme conditions of Eagle River and Anchorage, Alaska. Available 24/7/365.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Our Location</h4>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
                <span>12000 Business Blvd,<br/>Eagle River, AK 99577</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-500"></i>
                <a href="tel:8443406413" className="hover:text-blue-400 transition-colors">(844) 340-6413</a>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-clock text-blue-500"></i>
                <span>Open 24/7 (Emergency)</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Service Areas</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-chevron-right text-blue-500 text-xs"></i>
                Eagle River
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-chevron-right text-blue-500 text-xs"></i>
                Chugiak
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-chevron-right text-blue-500 text-xs"></i>
                Peters Creek
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-chevron-right text-blue-500 text-xs"></i>
                Anchorage
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} ArcticShield Frozen Pipe Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
