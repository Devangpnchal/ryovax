export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-white/20 bg-white/10 p-6 shadow-glass backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}
