import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Card } from './ui/card';
import { achievements } from '../data/portfolio';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-[#0b1220] to-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
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
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {a.title}
                    </h3>
                    <span className="text-sm text-gray-400">{a.year}</span>
                    <p className="text-gray-300 text-sm mt-2">
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
