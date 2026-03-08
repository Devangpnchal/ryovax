import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import WorldMapViz from '../components/WorldMapViz';
import SourcingTool from '../components/SourcingTool';
import ContactForm from '../components/ContactForm';
import data from '../../data/sourcing_data.json';

const industries = [
  'Industrial raw materials',
  'Chemicals',
  'Packaging materials',
  'Machinery and equipment',
  'Electronics components',
  'Textiles'
];

export default function HomePage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Global Procurement. Simplified.
        </motion.h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          RYOVAX connects companies with verified suppliers across the world for bulk sourcing and industrial procurement.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/rfq" className="rounded-full bg-white px-6 py-3 font-medium text-slate-950">Request Procurement</Link>
          <Link href="/suppliers" className="rounded-full border border-white/30 px-6 py-3">Explore Suppliers</Link>
          <Link href="/become-supplier" className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3">Become Supplier</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2">
        <WorldMapViz />
        <GlassCard>
          <h2 className="text-2xl font-semibold">Global sourcing regions</h2>
          <p className="mt-2 text-slate-300">Live sourcing corridors across APAC, EMEA, and Americas with multi-country supplier matching.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>• Supplier discovery directory with country & industry filters</li>
            <li>• RFQ procurement flow for structured requirements</li>
            <li>• Trade intelligence insights for strategic sourcing decisions</li>
          </ul>
        </GlassCard>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-semibold">Global Sourcing Intelligence</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <GlassCard key={item.country}>
              <h3 className="text-xl font-semibold">{item.country}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.industries.join(', ')}</p>
              <p className="mt-2 text-sm text-cyan-200">Trade indicator: {item.tradeIndicator}/100</p>
              <p className="mt-2 text-sm text-slate-300">{item.exportStrength}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2">
        <SourcingTool />
        <GlassCard>
          <h3 className="text-2xl font-semibold">How RYOVAX works</h3>
          <ol className="mt-4 space-y-3 text-slate-200">
            <li>1. Submit procurement requirement</li>
            <li>2. RYOVAX analyzes sourcing regions and risk indicators</li>
            <li>3. We connect buyers with suitable suppliers</li>
            <li>4. Deal closes under our commission model</li>
          </ol>
          <h4 className="mt-6 text-lg font-semibold">Industries served</h4>
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            {industries.map((industry) => <span key={industry} className="rounded-full bg-white/10 px-3 py-1">{industry}</span>)}
          </div>
        </GlassCard>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-2">
        <GlassCard>
          <h3 className="text-2xl font-semibold">Supplier discovery + procurement intelligence</h3>
          <p className="mt-2 text-slate-300">Combine data-led country recommendations with vetted supplier outreach from one premium platform.</p>
          <Link href="/insights" className="mt-5 inline-block rounded-full bg-cyan-400 px-5 py-2 font-medium text-slate-950">View Trade Insights</Link>
        </GlassCard>
        <ContactForm />
      </section>
    </Layout>
  );
}
