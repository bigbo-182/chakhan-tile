import { REVIEWS } from '@/lib/constants';

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: '#1E1E2E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(91,189,114,0.15)', color: '#5BBD72' }}
          >
            REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2" style={{ letterSpacing: '-1.5px' }}>
            고객 후기
          </h2>
          <p className="text-sm text-white/40">착한 타일을 경험한 고객분들의 이야기</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 sm:p-7"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-yellow-400 text-sm mb-3">
                {'★'.repeat(review.stars)}
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4">{`"${review.text}"`}</p>
              <p className="text-xs text-white/30">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
