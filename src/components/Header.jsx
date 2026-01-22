import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { personalInfo } from '../data/portfolio';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'bg-[#0b1220]/90 backdrop-blur border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <h1 className="font-extrabold text-white text-xl md:text-3xl tracking-wide">
            {personalInfo.name}
          </h1>

          {personalInfo.openToWork && (
            <Badge className="flex items-center gap-2 border border-green-500 bg-[#071322] text-green-100 px-3 py-1 rounded-full font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Open to Work</span>
            </Badge>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-gray-300 hover:text-white transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all hover:w-full" />
            </button>
          ))}

          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b1220] border-t border-white/10">
          <div className="flex flex-col px-4 py-4 gap-4">
            {[...navItems, { label: 'Contact', id: 'contact' }].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-300 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
