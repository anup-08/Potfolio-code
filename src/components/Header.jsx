import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { personalInfo } from "../data/portfolio";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ FIXED smooth scroll (no header/footer glitch)
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      transform-gpu will-change-transform ${
        scrolled
          ? "bg-[#070B14]/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <h1 className="font-extrabold text-white text-xl md:text-3xl tracking-tight">
            {personalInfo.name}
          </h1>

          {/* ✅ Professional Open To Work */}
          {personalInfo.openToWork && (
            <Badge
              className="
                flex items-center gap-2 rounded-full px-3 py-1
                bg-emerald-500/10 text-emerald-200
                border border-emerald-500/25 font-medium
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs md:text-sm">Open to Work</span>
            </Badge>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative text-white/70 hover:text-white transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white/80 group-hover:w-full transition-all duration-300" />
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-xl font-medium bg-white text-black hover:bg-white/90 transition shadow-sm"
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
        <div className="md:hidden bg-[#070B14]/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-4 py-4 gap-4">
            {[...navItems, { label: "Contact", id: "contact" }].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-white/70 hover:text-white transition"
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
