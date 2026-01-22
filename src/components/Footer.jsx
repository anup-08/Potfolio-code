import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#0b1220] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">

        <p className="text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
            <Github size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
