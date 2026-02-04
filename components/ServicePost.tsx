
import React from 'react';

const ServicePost: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Frozen Pipe Emergency in Eagle River? We Can Help!</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Living in Alaska means dealing with extreme cold, and unfortunately, that often leads to <strong className="text-slate-900">frozen pipes</strong>. 
            When the temperature drops in Eagle River, your home’s plumbing is at high risk. A frozen pipe isn't just an inconvenience—it's a ticking time bomb for a <strong className="text-red-600">burst pipe emergency</strong>.
          </p>
          <p>
            If you've turned on your faucet and found <strong className="text-slate-900">no water in the house</strong>, or only a tiny trickle, you likely have a freeze. 
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Why You Need Professional Thawing</h3>
            <p className="text-blue-800">
              Attempting to thaw pipes yourself with open flames or improper equipment can lead to fire hazards or cracked pipes. Our team at <strong className="font-bold">ArcticShield</strong> uses professional-grade steam thawing and safe thermal equipment to restore your water flow without damaging your property.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <i className="fas fa-tools text-blue-400"></i>
            Our Specialized Services
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-400 mt-1"></i>
              <div>
                <strong className="block text-blue-400">Rapid Pipe Thawing:</strong>
                Safe, fast restoration of water flow using industry-standard equipment.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-400 mt-1"></i>
              <div>
                <strong className="block text-blue-400">Burst Pipe Repair:</strong>
                Immediate response to stop flooding and repair damaged sections.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-400 mt-1"></i>
              <div>
                <strong className="block text-blue-400">Emergency "No Water" Diagnosis:</strong>
                Identifying if the freeze is in your walls, crawlspace, or the main line.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle text-green-400 mt-1"></i>
              <div>
                <strong className="block text-blue-400">Prevention Consultations:</strong>
                Installing heat tape and insulation to stop future freeze-ups.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <div className="text-red-600 text-3xl mb-4"><i className="fas fa-faucet-drip"></i></div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">1. Shut off Main Valve</h4>
          <p className="text-slate-600">If you suspect a pipe has burst, stop the water at the source immediately.</p>
        </div>
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <div className="text-red-600 text-3xl mb-4"><i className="fas fa-water"></i></div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">2. Open Faucets</h4>
          <p className="text-slate-600">Relieve pressure as ice expands by keeping faucets in the 'open' position.</p>
        </div>
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <div className="text-red-600 text-3xl mb-4"><i className="fas fa-phone-volume"></i></div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">3. Call the Experts</h4>
          <p className="text-slate-600">Don't wait for ice to split your plumbing. Call us 24/7 for help.</p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Ready to restore your water?</h3>
          <p className="text-blue-100">Serving Eagle River, Chugiak, and surrounding Anchorage 24/7.</p>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-widest opacity-75 mb-1">Emergency Hotline</div>
          <a href="tel:8443406413" className="text-3xl md:text-4xl font-extrabold hover:text-blue-200 transition-colors">
            (844) 340-6413
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServicePost;
