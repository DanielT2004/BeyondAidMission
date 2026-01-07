
import React from 'react';
import { DONATION_EXTERNAL_URL } from '../constants';

const Hero: React.FC = () => {
  const scrollToTeam = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('team');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-soft-blue overflow-hidden">
      {/* Dynamic Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-white rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-cyan-100/50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Purpose Badge */}
        <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/90 border border-cyan-200 mb-12 shadow-sm backdrop-blur-sm">
          <span className="flex h-3 w-3 rounded-full bg-beyond-teal animate-pulse"></span>
          <span className="text-xs md:text-sm font-black text-beyond-teal uppercase tracking-[0.3em]">Our Purpose & Mission</span>
        </div>

        {/* Massive Headline */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter uppercase leading-[0.85]">
            Beyond <span className="text-beyond-teal">Aid</span> <br/>
            Mission 
          </h1>
        </div>

        {/* Expansive Mission Text */}
        <div className="space-y-10 text-xl md:text-2xl lg:text-3xl text-gray-700 leading-snug font-medium text-center max-w-5xl mx-auto">
          <p className="balance">
            Welcome to <strong className="text-beyond-brown font-black">Beyond Aid Mission</strong>. Our purpose is dedicatedly helping healthcare organizations abroad serve their populations through forged sustainable partnerships.
          </p>
          <p className="text-gray-500 font-normal leading-relaxed">
            We focus on clinical excellence by providing high-quality medical supplies and fostering educational information sharing. Our goal is to move past traditional "aid" models into long-term systemic support 
            that empowers local clinicians. 
          </p>
          
          <div className="pt-10 border-t border-cyan-200/60 mt-10">
            <p className="text-lg md:text-xl lg:text-2xl text-beyond-teal font-black italic max-w-4xl mx-auto leading-relaxed">
              "We aim to engage hospital partners not just in one-time aid efforts but also in building long-term partnerships through logistics and supply chain innovation."
            </p>
          </div>
        </div>

        {/* Centered Large CTAs */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl">
          <a
            href={DONATION_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-10 py-5 bg-beyond-teal text-white rounded-2xl font-black text-xl md:text-2xl hover:brightness-110 transition-all shadow-2xl shadow-cyan-300/50 text-center hover:scale-[1.02] active:scale-95 flex items-center justify-center"
          >
            Donate Now
          </a>
          <button
            onClick={scrollToTeam}
            className="flex-1 px-10 py-5 bg-white/80 backdrop-blur-sm text-beyond-brown border-2 border-beyond-brown/20 rounded-2xl font-bold text-xl md:text-2xl hover:bg-white transition-all text-center hover:border-beyond-brown/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center outline-none"
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
