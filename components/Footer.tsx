
import React from 'react';
import { 
  DONATION_EXTERNAL_URL, 
  INSTAGRAM_LINK, 
  LINKEDIN_LINK, 
  TIKTOK_LINK 
} from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <footer className="bg-beyond-brown text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <div className="relative w-12 h-12 flex items-center justify-center mb-4">
                <div className="absolute w-10 h-3 bg-beyond-teal rounded-sm"></div>
                <div className="absolute w-3 h-10 bg-beyond-teal rounded-sm"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">Beyond <br/><span className="text-beyond-teal">Aid Mission</span></span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Sustainable healthcare support through clinical supply chains and professional hospital partnerships.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-widest text-xs border-b border-white/10 pb-2">Explore</h4>
            <ul className="space-y-5 text-sm font-bold text-gray-300">
              <li><button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-beyond-teal transition-colors outline-none text-left">Home</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'impact')} className="hover:text-beyond-teal transition-colors outline-none text-left">How we help</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'about')} className="hover:text-beyond-teal transition-colors outline-none text-left">Our Team</button></li>
              <li><a href={DONATION_EXTERNAL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-beyond-teal transition-colors underline decoration-beyond-teal">Donate Externally</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-widest text-xs border-b border-white/10 pb-2">Active Mission</h4>
            <ul className="space-y-5 text-sm font-bold text-gray-300">
              {/* <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-beyond-teal rounded-full"></span>
                <span>Children’s Heart Fund Ethiopia</span>
              </li> */}
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-beyond-teal rounded-full"></span>
                <span>Cardiac Center, Addis Ababa</span>
              </li>
              {/* <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-beyond-teal rounded-full"></span>
                <span>Beloved Mission Partner</span>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-widest text-xs border-b border-white/10 pb-2">Stay Connected</h4>
            <p className="text-xs text-gray-300 mb-6 font-medium">Join our community on social media.</p>
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-beyond-teal hover:scale-110 transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-beyond-teal hover:scale-110 transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a 
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-beyond-teal hover:scale-110 transition-all group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest gap-6 text-center">
          <p>© 2026 Beyond Aid Mission. Partnered with Beloved Mission (501c3).</p>
          {/* <div className="space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
