
import React, { useState } from 'react';
import { DONATION_EXTERNAL_URL } from '../constants';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'Our Work', href: 'impact' },
    { name: 'About Us', href: 'about' },
  ];

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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
            <div className="flex items-center">
              {/* Logo Cross Representation */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute w-8 h-3 bg-beyond-teal rounded-sm"></div>
                <div className="absolute w-3 h-8 bg-beyond-teal rounded-sm"></div>
              </div>
              <div className="ml-3 flex flex-col leading-none">
                <span className="text-xl font-black text-beyond-brown tracking-tighter uppercase">Beyond</span>
                <span className="text-sm font-bold text-beyond-brown tracking-widest uppercase opacity-80">Aid Mission</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-semibold transition-colors hover:text-beyond-teal outline-none ${
                  activeSection === item.href ? 'text-beyond-teal underline underline-offset-8' : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={DONATION_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-beyond-teal text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-md shadow-cyan-100"
            >
              Donate Now
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-beyond-teal outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block w-full text-left text-base font-semibold text-gray-700 py-2"
            >
              {item.name}
            </button>
          ))}
          <a
            href={DONATION_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-beyond-teal text-white px-5 py-3 rounded-lg text-center font-bold"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
