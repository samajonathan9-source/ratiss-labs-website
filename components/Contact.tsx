'use client';

import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Prêt à Démarrer?
        </motion.h2>

        <motion.p className="text-lg text-slate-400 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          Contactez-nous pour discuter de vos besoins en audit et consulting Deep Tech.
        </motion.p>

        <motion.div className="flex gap-4 justify-center flex-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <a href="mailto:jonathan.ratisslabs@zohomail.com" className="btn-primary flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Envoyer un Email
          </a>
          <a href="https://github.com/samajonathan9-source" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>

        <motion.p className="text-center text-slate-500 text-sm mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          ORCID: <a href="https://orcid.org/0009-0000-4092-5313" className="text-cyan-500 hover:underline">0009-0000-4092-5313</a>
        </motion.p>
      </div>
    </section>
  );
}
