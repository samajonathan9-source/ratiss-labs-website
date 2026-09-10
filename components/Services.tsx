'use client';

import { motion } from 'framer-motion';
import { Zap, Lock, FileText } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Audit Cohérence Quantique',
    description: 'Validation cross-IBM + signature topologique $P_{sig}$.',
    price: 'À partir de 8 k€',
  },
  {
    icon: Lock,
    title: 'Agents IA Souverains',
    description: 'Architecture local-first, ZK-proof, multi-LLM sans cloud.',
    price: 'À partir de 15 k€',
  },
  {
    icon: FileText,
    title: 'Reproductibilité Scientifique',
    description: 'Code déterministe, validation croisée, publication-ready.',
    price: 'À partir de 5 k€',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="section-title text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Nos Services Phares
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}>
                <Icon className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <p className="text-cyan-500 font-semibold">{service.price}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
