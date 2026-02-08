import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../data/portfolio";

const Hero = () => {
  // ✅ Stable smooth scroll (prevents header/footer glitch)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90; // fixed header height
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-20 flex items-center text-white relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {personalInfo.name}
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white/80">
            {personalInfo.title}
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl text-lg leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex items-center gap-2 mt-5 text-white/70">
            <MapPin size={18} />
            <span>{personalInfo.location}</span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg shadow-lg shadow-indigo-600/20"
            >
              Get In Touch
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white px-6 py-3 text-lg hover:bg-white/10"
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
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Icon className="text-white/80" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-white/10 to-transparent">
              <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-1 shadow-2xl">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="block w-80 md:w-96 aspect-square object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.015]"
                />
                <div className="pointer-events-none mt-2 h-[2px] rounded-full bg-gradient-to-r from-primary/40 via-white/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-white/80" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
