'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 className="section-title mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Architecture Technologique Souveraine & Intelligence Physique
        </motion.h1>

        <motion.p className="text-lg text-slate-400 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Audit Quantique, Topologie Computationnelle ($P_{sig}$) et Reproductibilité Scientifique pour systèmes critiques.
        </motion.p>

        <motion.div className="flex gap-4 justify-center flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <a href="#contact" className="btn-primary flex items-center gap-2">
            Demander un Audit <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#preuves" className="btn-secondary">
            Voir nos Preuves
          </a>
        </motion.div>
      </div>
    </section>
  );
}
