import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <div className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">
      {/* ✅ Global Professional Background (ONLY ONCE) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main spotlight */}
        <div className="absolute -top-72 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Right glow */}
        <div className="absolute top-1/3 -right-80 w-[1000px] h-[1000px] rounded-full bg-purple-500/10 blur-3xl" />

        {/* Bottom left glow */}
        <div className="absolute -bottom-80 -left-72 w-[1100px] h-[1100px] rounded-full bg-blue-500/10 blur-3xl" />

        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/70" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.20) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* ✅ Content */}
      <div className="relative z-10">
        <Header />
        <Hero />

        {/* Smooth flow sections */}
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        {/* Toasts */}
        <Toaster />
      </div>
    </div>
  );
};

export default App;
