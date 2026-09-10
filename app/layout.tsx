import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RATISS Labs — Cabinet Consulting Deep Tech Souverain',
  description: 'Audit Quantique, Topologie et IA Souveraine pour systèmes critiques.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#0a0f1c] text-white antialiased">{children}</body>
    </html>
  );
}
