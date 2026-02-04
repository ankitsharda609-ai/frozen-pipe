
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the first signs of a frozen pipe?",
      answer: "The most common sign is no water in the house or a significant drop in water pressure when you turn on a faucet. You may also see frost on exposed pipes or hear strange clanking noises when the water is turned on."
    },
    {
      question: "Is a frozen pipe an emergency?",
      answer: "Yes. In Alaska’s sub-zero temperatures, water expands as it freezes, creating immense pressure. This often leads to a burst pipe emergency, which can cause thousands of dollars in water damage once the ice thaws."
    },
    {
      question: "Can I thaw my own pipes?",
      answer: "While some minor freezes can be handled with a hair dryer, we strongly advise against using blowtorches or high-heat lamps, as these are major fire hazards. Professional thawing is safer and ensures the pipe hasn't already suffered structural damage."
    },
    {
      question: "Do you provide emergency service in Eagle River?",
      answer: "Absolutely. We are located at 12000 Business Blvd, Eagle River, AK 99577. We prioritize frozen pipe and burst pipe calls to protect your home from flooding."
    },
    {
      question: "How can I prevent my pipes from freezing again?",
      answer: "We recommend insulating crawlspaces, installing thermostatically controlled heat tape, and letting faucets drip during extreme 'cold snaps' below zero."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-500">Everything you need to know about frozen pipes in Alaska</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 text-left flex items-center justify-between"
            >
              <span className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                {faq.question}
              </span>
              <i className={`fas fa-chevron-down text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-500' : ''}`}></i>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-blue-50 rounded-3xl text-center border border-blue-100">
        <p className="text-slate-900 font-bold mb-4">Need immediate professional help?</p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-500 text-sm uppercase tracking-widest font-bold">Eagle River Emergency Line</span>
          <a href="tel:8443406413" className="text-3xl font-extrabold text-red-600 hover:text-red-700 transition-colors">
            (844) 340-6413
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
