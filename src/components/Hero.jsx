import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-[#0b1220] via-[#0b1220] to-[#1a1440] text-white relative overflow-hidden">

      {/* Ambient background blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {personalInfo.name}
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-300">
            Java Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed">
            Building scalable backend systems and modern frontend experiences
            using Spring Boot, React, and cloud-native tools.
          </p>

          <div className="flex items-center gap-2 mt-5 text-gray-300">
            <MapPin size={18} />
            <span>{personalInfo.location}</span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={() => scrollTo('contact')}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 text-lg shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
            >
              Get In Touch
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white px-6 py-3 text-lg hover:bg-white/10"
            >
              <a href={personalInfo.resume}>Download Resume</a>
            </Button>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-8">
            {[ 
              { icon: Github, link: personalInfo.github },
              { icon: Linkedin, link: personalInfo.linkedin },
              { icon: Mail, link: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE – ATTRACTIVE UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">

            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-lg group-hover:opacity-100 transition" />

            {/* Image container */}
            <div className="relative bg-[#0b1220] p-2 rounded-3xl">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition"
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('about')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
