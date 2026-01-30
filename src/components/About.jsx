import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { aboutMe, personalInfo } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 text-white relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* subtle separator */}
        <div className="h-px bg-white/10 mb-14" />

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-10 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
            <p className="text-white/70 text-lg leading-relaxed text-center mb-8">
              {aboutMe.description}
            </p>

            <div className="space-y-4">
              {aboutMe.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 text-white/80"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <CheckCircle2 size={18} className="text-emerald-400 mt-1" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500
                  shadow-lg shadow-orange-500/20
                  hover:shadow-xl hover:shadow-orange-500/30
                  hover:-translate-y-[2px]
                  transition-all duration-300
                "
              >
              View LeetCode Profile
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
