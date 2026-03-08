import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import data from '../../data/sourcing_data.json';

export default function InsightsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-semibold">Global Trade Insights</h1>
        <p className="mt-3 text-slate-300">Top sourcing countries, growing sectors, export hubs, and supply chain regions.</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {data.map((entry) => (
            <GlassCard key={entry.country}>
              <h2 className="text-2xl font-semibold">{entry.country}</h2>
              <p className="mt-2 text-sm text-slate-300">Specializations: {entry.industries.join(', ')}</p>
              <div className="mt-4 h-3 rounded-full bg-slate-700">
                <div className="h-3 rounded-full bg-gradient-to-r from-cyan-300 to-green-300" style={{ width: `${entry.tradeIndicator}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-300">Trade competitiveness index: {entry.tradeIndicator}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6">
          <h3 className="text-2xl font-semibold">Featured Insight: Electronics manufacturing growth</h3>
          <p className="mt-2 text-slate-300">High momentum observed in Vietnam, China, and Taiwan supply chains due to export processing zones and semiconductor ecosystem investments.</p>
        </GlassCard>
      </section>
    </Layout>
  );
}
