
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Impact Stats Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        <div className="bg-beyond-teal rounded-[2rem] p-10 text-white shadow-lg shadow-cyan-100 flex flex-col justify-center text-center">
          <div className="text-6xl font-black mb-2 tracking-tighter text-white">100%</div>
          <div className="text-sm font-bold uppercase tracking-widest opacity-90">Logistics Focused</div>
          <p className="mt-4 text-xs font-medium opacity-80 leading-relaxed">
            Every dollar contributed goes directly toward sourcing and shipping critical medical equipment.
          </p>
        </div>
        <div className="bg-beyond-brown rounded-[2rem] p-10 text-white shadow-lg shadow-amber-900/10 flex flex-col justify-center text-center">
          <div className="text-5xl font-black mb-2 tracking-tighter italic">Partnerships</div>
          <div className="text-sm font-bold uppercase tracking-widest opacity-80">Sustainable Hope</div>
          <p className="mt-4 text-xs font-medium opacity-80 leading-relaxed">
            We don't just send aid; we build long-term clinical relationships with local hospitals.
          </p>
        </div>
        <div className="bg-gray-900 rounded-[2rem] p-10 text-white shadow-lg flex flex-col justify-center text-center">
          <div className="text-5xl font-black mb-2 tracking-tighter uppercase text-beyond-teal">7,000+</div>
          <div className="text-sm font-bold uppercase tracking-widest opacity-80">Miles Covered</div>
          <p className="mt-4 text-xs font-medium opacity-80 leading-relaxed">
            Navigating complex global logistics from the USA to the heart of Ethiopia.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="scroll-mt-24">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">The Beyond Aid Team</h3>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Our team consists of medical professionals, logistics experts, and dedicated volunteers committed to bridging the gap in global healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-12">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-beyond-teal rounded-full transform rotate-6 group-hover:rotate-0 transition-transform duration-300 -z-10 opacity-10"></div>
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-all duration-300">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h4 className="font-black text-gray-900 text-sm sm:text-lg tracking-tight">{member.name}</h4>
              <p className="text-xs text-beyond-teal font-black uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
