import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './ui/card';
import { skills } from '../data/portfolio';

/* Animation variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 45,
      damping: 22,
      mass: 1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 65,
      damping: 24,
      mass: 0.6,
    },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { title: 'Backend', list: skills.backend },
    { title: 'Frontend', list: skills.frontend },
    { title: 'Database', list: skills.database },
    { title: 'Tools & Others', list: skills.tools },
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-20 bg-gradient-to-br from-[#0b1220] to-[#0f172a]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-14"
        >
          Skills & Technologies
        </motion.h2>

        {/* Cards */}
        <motion.div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="will-change-transform"
            >
              <Card className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {cat.title}
                </h3>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {cat.list.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      className="px-4 py-2 text-sm rounded-lg bg-white/10 text-gray-200 border border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Skills;
