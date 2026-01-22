import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0b1220] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          A selection of projects demonstrating real-world full-stack development experience.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
            >

              <Card className="h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-md bg-white/10 text-gray-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-white/30 text-white hover:bg-white/10"
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={16} className="mr-2" /> Code
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                    >
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} className="mr-2" /> Demo
                      </a>
                    </Button>
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

export default Projects;
