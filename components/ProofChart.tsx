'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle } from 'lucide-react';

const data = [
  { niveau: 0.0, p_sig: 2.3569, h1_robuste: 1 },
  { niveau: 0.25, p_sig: 0.8228, h1_robuste: 2 },
  { niveau: 0.5, p_sig: 0.3859, h1_robuste: 9 },
  { niveau: 0.75, p_sig: 0.3188, h1_robuste: 12 },
  { niveau: 1.0, p_sig: 0.2972, h1_robuste: 16 },
];

export default function ProofChart() {
  return (
    <section id="preuves" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="section-title text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Preuves Techniques Validées
        </motion.h2>

        <motion.div className="mt-12 bg-slate-800/50 border border-slate-700 rounded-xl p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h3 className="text-2xl font-bold text-cyan-500 mb-2">Calibration Sensibilité $P_{sig}$</h3>
          <p className="text-slate-400 mb-6">Seuil d'inflexion ~0.12 validé via homologie persistante robuste</p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid stroke="#334155" />
              <XAxis dataKey="niveau" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              <Legend />
              <Line type="monotone" dataKey="p_sig" stroke="#06b6d4" strokeWidth={2} />
              <Line type="monotone" dataKey="h1_robuste" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="mt-8 flex items-center gap-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
          <p className="text-slate-300">
            <span className="text-cyan-500 font-semibold">Validation PushT Réelle :</span> 25 650 frames sans erreur
          </p>
        </motion.div>
      </div>
    </section>
  );
}
