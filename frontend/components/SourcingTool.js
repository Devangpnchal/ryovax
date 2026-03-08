import { useMemo, useState } from 'react';
import data from '../../data/sourcing_data.json';
import GlassCard from './GlassCard';

export default function SourcingTool() {
  const [query, setQuery] = useState('');

  const matches = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return data
      .filter((country) => country.products.some((product) => product.toLowerCase().includes(q)))
      .map((country) => ({
        country: country.country,
        industries: country.industries.join(', '),
        reason: country.exportStrength
      }));
  }, [query]);

  return (
    <GlassCard>
      <h3 className="text-2xl font-semibold">Product Sourcing Intelligence Tool</h3>
      <p className="mt-2 text-slate-300">Type a product like “Steel pipes”, “Packaging materials”, or “Electronics components”.</p>
      <input
        className="mt-4 w-full rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 focus:ring"
        placeholder="Enter product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-4 space-y-3">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div key={match.country} className="rounded-xl border border-white/15 bg-slate-900/60 p-4">
              <p className="font-semibold text-cyan-300">{match.country}</p>
              <p className="text-sm text-slate-300">Industry specialization: {match.industries}</p>
              <p className="text-sm text-slate-300">Trade advantage: {match.reason}</p>
            </div>
          ))
        ) : query ? (
          <p className="text-sm text-slate-300">No direct match found. Try broader terms like “Textiles” or “Electronics”.</p>
        ) : null}
      </div>
    </GlassCard>
  );
}
