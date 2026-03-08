import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  ['Home', '/'],
  ['Suppliers', '/suppliers'],
  ['Request RFQ', '/rfq'],
  ['Industries', '/industries'],
  ['Insights', '/insights'],
  ['Become Supplier', '/become-supplier']
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-widest">RYOVAX</Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navItems.map(([label, href]) => (
              <Link key={label} href={href} className="text-slate-300 transition hover:text-white">{label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-soft-radial">{children}</motion.main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} RYOVAX · Global Procurement Platform
      </footer>
    </div>
  );
}
