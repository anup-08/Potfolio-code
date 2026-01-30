import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { personalInfo } from "../data/portfolio";
import { Button } from "./ui/button";
import { toast } from "../hooks/use-toast";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* subtle separator */}
        <div className="h-px bg-white/10 mb-14" />

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-12">
          I’m open to opportunities and collaborations. Let’s talk.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition duration-300">
            <Mail className="mx-auto mb-3 text-white/80" />
            <h4 className="text-white font-semibold mb-1">Email</h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/70 text-sm hover:text-white transition"
            >
              {personalInfo.email}
            </a>
          </Card>

          {/* Phone */}
          <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition duration-300">
            <Phone className="mx-auto mb-3 text-white/80" />
            <h4 className="text-white font-semibold mb-1">Phone</h4>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-white/70 text-sm hover:text-white transition"
            >
              {personalInfo.phone}
            </a>
          </Card>

          {/* Location */}
          <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition duration-300">
            <MapPin className="mx-auto mb-3 text-white/80" />
            <h4 className="text-white font-semibold mb-1">Location</h4>
            <p className="text-white/70 text-sm">{personalInfo.location}</p>
          </Card>
        </div>

        {/* SEND EMAIL + COPY FALLBACK */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 border border-white/10 transition"
          >
            <Send size={20} />
            Send Email
          </a>
          <Button
            className="h-auto px-8 py-4 text-lg rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(personalInfo.email);
                toast({ title: "Email copied", description: personalInfo.email });
              } catch (e) {
                window.prompt("Copy email address:", personalInfo.email);
              }
            }}
          >
            Copy Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
