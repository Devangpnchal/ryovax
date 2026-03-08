import { motion } from 'framer-motion';

const points = [
  { city: 'Shenzhen', x: '78%', y: '50%' },
  { city: 'Mumbai', x: '67%', y: '58%' },
  { city: 'Istanbul', x: '57%', y: '45%' },
  { city: 'Berlin', x: '53%', y: '33%' },
  { city: 'Mexico City', x: '26%', y: '53%' }
];

export default function WorldMapViz() {
  return (
    <div className="relative h-72 overflow-hidden rounded-3xl border border-cyan-200/20 bg-slate-900/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_60%)]" />
      <svg viewBox="0 0 1000 450" className="absolute inset-0 h-full w-full opacity-40">
        <path d="M58 195l98-40 74 29 58-19 52 22 91-29 66 27 85-23 91 23 96-34" fill="none" stroke="url(#g)" strokeWidth="3" />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#4ade80" />
          </linearGradient>
        </defs>
      </svg>
      {points.map((point, i) => (
        <motion.div
          key={point.city}
          className="absolute"
          style={{ left: point.x, top: point.y }}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.25 }}
        >
          <div className="h-3 w-3 rounded-full bg-cyan-300" />
        </motion.div>
      ))}
    </div>
  );
}
