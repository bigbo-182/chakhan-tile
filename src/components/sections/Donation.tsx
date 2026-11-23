import Link from 'next/link';
import { DONATION_ACTIVITIES } from '@/lib/constants';

export default function Donation() {
  return (
    <section
      id="donation"
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #F0F9F2, #EAF4FB)' }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-14 shadow-xl shadow-green-100/50 text-center">
          {/* 퍼센트 - 모바일 반응형 */}
          <div
            className="font-black leading-none mb-2"
            style={{
              fontSize: 'clamp(56px, 18vw, 88px)',
              color: '#5BBD72',
              letterSpacing: '-3px',
            }}
          >
            1<span style={{ fontSize: 'clamp(28px, 9vw, 44px)' }}>%</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4" style={{ letterSpacing: '-1px' }}>
            착한 타일의 1% 나눔 약속
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-7">
            착한 타일은 모든 시공 수익금의 <strong className="text-gray-800">1%</strong>를 지역 사회를 위해 기부합니다.
            단순히 타일을 붙이는 것을 넘어, 우리가 일하는 지역과 이웃에게 따뜻한 마음을 전하고자 합니다.
          </p>

          <Link
            href="/activities"
            className="inline-block px-7 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90 mb-8"
            style={{ background: '#1E1E2E' }}
          >
            활동 스토리 보기
          </Link>

          {/* 활동 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DONATION_ACTIVITIES.map((act) => (
              <div key={act.name} className="bg-gray-50 rounded-2xl p-4 text-center">
                <div className="text-2xl sm:text-3xl mb-2">{act.icon}</div>
                <p className="text-sm font-bold mb-1">{act.name}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
