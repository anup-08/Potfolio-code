import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card } from "./ui/card";
import { achievements } from "../data/portfolio";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 text-white relative">
      {/* subtle separator (keeps single page feel) */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-white/10 mb-14" />

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition duration-300">
                <div className="flex gap-4">
                  {/* icon */}
                  <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <Award className="text-white/80" size={20} />
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {a.title}
                    </h3>

                    <span className="text-sm text-white/60">{a.year}</span>

                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
