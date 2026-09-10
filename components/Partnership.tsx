'use client';

import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

export default function Partnership() {
  return (
    <section id="partenariat" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Handshake className="w-16 h-16 text-violet-500 mx-auto mb-6" />
          <h2 className="section-title">Déploiement Physique & Partenariats</h2>
          <p className="text-lg text-slate-400 mb-8">
            Nos architectures RATISS-GRID, RATISS-QPU-Ambient et RATISS-BIOLAB sont ouvertes aux partenariats industriels.
          </p>

          <motion.div className="mt-8 bg-slate-800 border border-violet-500/30 rounded-xl p-8" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-4">Modèle Revenue-Share</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-cyan-500 mb-2">30%</p>
                <p className="text-slate-400">Architecture + Oversight</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-violet-500 mb-2">70%</p>
                <p className="text-slate-400">Fabrication + Déploiement</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
