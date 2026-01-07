
import React from 'react';
import { DONATION_OPTIONS, DONATION_EXTERNAL_URL } from '../constants';

const DonateSection: React.FC = () => {
  const raisedAmount = 1707;
  const targetAmount = 25000;
  const progress = (raisedAmount / targetAmount) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-beyond-teal rounded-[2.5rem] p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-cyan-100">
        {/* Abstract Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Support Our Mission</h2>
          <p className="text-xl text-cyan-50 mb-10 leading-relaxed font-medium">
            Every donation directly funds the logistics of medical supplies for the Cardiac Center in Addis Ababa. Your contribution ensures these life-saving items reach the hands of those who need them most.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-10">
            <div className="flex justify-between items-center mb-4 font-black">
              <span className="text-lg">${raisedAmount.toLocaleString()} raised</span>
              <span className="text-lg">Goal: ${targetAmount.toLocaleString()}</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <a
            href={DONATION_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-beyond-teal rounded-xl font-black text-xl hover:bg-cyan-50 transition-all shadow-2xl hover:scale-105"
          >
            Complete Donation Externally
          </a>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-cyan-100 font-bold uppercase tracking-widest">
            <span>✓ Tax-Deductible</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span>✓ Secure Portal</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span>✓ Direct Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
