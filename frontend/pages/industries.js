import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';

const industries = [
  ['🏭', 'Industrial raw materials', 'Base metals, polymers, and inputs for heavy manufacturing.'],
  ['🧪', 'Chemicals', 'Bulk and specialty chemicals for industrial production.'],
  ['📦', 'Packaging materials', 'Primary and secondary packaging for global product lines.'],
  ['⚙️', 'Machinery and equipment', 'Manufacturing machinery, tooling, and replacement parts.'],
  ['🔌', 'Electronics components', 'PCBAs, semiconductors, and connectors for OEM supply.'],
  ['🧵', 'Textiles', 'Yarns, fabrics, and finished textile materials.'],
  ['🌾', 'Agriculture commodities', 'Processed and raw agri commodities for trade.'],
  ['🧱', 'Construction materials', 'Cement products, steel structures, and fittings.'],
  ['🛒', 'FMCG ingredients', 'Ingredients and additives for consumer products.']
];

export default function IndustriesPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-semibold">Industries Supported by RYOVAX</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([icon, title, desc]) => (
            <GlassCard key={title}>
              <p className="text-2xl">{icon}</p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
