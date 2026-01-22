import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0b1220] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I’m open to opportunities and collaborations. Let’s talk.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Email */}
          <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <Mail className="mx-auto mb-3 text-white" />
            <h4 className="text-white font-semibold mb-1">Email</h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-300 text-sm hover:underline"
            >
              {personalInfo.email}
            </a>
          </Card>

          {/* Phone */}
          <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <Phone className="mx-auto mb-3 text-white" />
            <h4 className="text-white font-semibold mb-1">Phone</h4>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-gray-300 text-sm hover:underline"
            >
              {personalInfo.phone}
            </a>
          </Card>

          {/* Location */}
          <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <MapPin className="mx-auto mb-3 text-white" />
            <h4 className="text-white font-semibold mb-1">Location</h4>
            <p className="text-gray-300 text-sm">
              {personalInfo.location}
            </p>
          </Card>

        </div>

        {/* SEND EMAIL BUTTON (NO asChild, NO interception) */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium
                     rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     text-white shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
                     transition"
        >
          <Send size={20} />
          Send Email
        </a>


      </div>
      
    </section>
  );
};

export default Contact;
