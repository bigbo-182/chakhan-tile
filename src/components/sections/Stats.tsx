import { STATS } from '@/lib/constants';

export default function Stats() {
  return (
    <section id="about" style={{ background: '#1E1E2E' }} className="py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-1.5"
              style={{
                background: 'linear-gradient(135deg, #7AB3D4, #E8A5B0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-2px',
              }}
            >
              {stat.number}
            </div>
            <div className="text-xs sm:text-sm text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
