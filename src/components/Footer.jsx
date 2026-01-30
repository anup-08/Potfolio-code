import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white/60">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition"
          >
            <Github size={18} className="text-white/75" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition"
          >
            <Linkedin size={18} className="text-white/75" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition"
          >
            <Mail size={18} className="text-white/75" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
