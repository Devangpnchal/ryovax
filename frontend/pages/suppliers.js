import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';

const suppliers = [
  { company: 'Shenzhen Axis Components', country: 'China', industry: 'Electronics', category: 'Components', products: 'PCBAs, connectors', desc: 'High-volume electronics manufacturing partner.' },
  { company: 'Ananta Chem Global', country: 'India', industry: 'Chemicals', category: 'Raw Materials', products: 'Solvents, additives', desc: 'Industrial chemicals with export compliance support.' },
  { company: 'Marmara Metal Works', country: 'Turkey', industry: 'Industrial Materials', category: 'Steel', products: 'Steel pipes, coils', desc: 'ISO-certified steel processing and custom dimensions.' },
  { company: 'Nord Precision GmbH', country: 'Germany', industry: 'Machinery', category: 'Equipment', products: 'Automation modules', desc: 'Precision engineering for high-spec industrial lines.' },
  { company: 'Monterrey Pack Solutions', country: 'Mexico', industry: 'Packaging', category: 'Packaging', products: 'Corrugated, flexible packaging', desc: 'Nearshore packaging manufacturer for North America.' }
];

export default function SupplierPage() {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('All');
  const [industry, setIndustry] = useState('All');

  const filtered = useMemo(() => suppliers.filter((s) => {
    const matchesSearch = `${s.company} ${s.products}`.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = country === 'All' || s.country === country;
    const matchesIndustry = industry === 'All' || s.industry === industry;
    return matchesSearch && matchesCountry && matchesIndustry;
  }), [search, country, industry]);

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-semibold">Supplier Discovery Directory</h1>
        <p className="mt-3 text-slate-300">Search and filter verified suppliers by country, industry, and product category.</p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <input placeholder="Search suppliers or products" value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-xl bg-slate-900 px-4 py-3" />
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-xl bg-slate-900 px-4 py-3">
            <option>All</option>
            {[...new Set(suppliers.map((s) => s.country))].map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="rounded-xl bg-slate-900 px-4 py-3">
            <option>All</option>
            {[...new Set(suppliers.map((s) => s.industry))].map((i) => <option key={i}>{i}</option>)}
          </select>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.map((s) => (
            <GlassCard key={s.company}>
              <h3 className="text-xl font-semibold">{s.company}</h3>
              <p className="mt-1 text-sm text-cyan-200">{s.country} · {s.industry} · {s.category}</p>
              <p className="mt-2 text-sm text-slate-300">Products: {s.products}</p>
              <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
              <a href="/rfq" className="mt-4 inline-block rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950">Contact Supplier</a>
            </GlassCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
