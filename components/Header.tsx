'use client';

import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Atom className="w-8 h-8 text-cyan-500" />
          <span className="text-xl font-bold">RATISS Labs</span>
        </motion.div>
      </div>
    </header>
  );
}
