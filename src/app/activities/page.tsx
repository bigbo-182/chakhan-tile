import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';

const STORIES = [
  {
    date: '2024. 03',
    tag: '무상 시공',
    title: '독거노인 가정 욕실 무상 시공',
    desc: '경기도 이천 내 홀로 사시는 어르신 가정의 낡고 위험한 욕실을 무상으로 전면 시공했습니다. 미끄럼 방지 타일과 안전 바닥재를 적용해 사고 위험을 줄였습니다.',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
  },
  {
    date: '2023. 11',
    tag: '지역 아동',
    title: '지역 아동센터 환경 개선 프로젝트',
    desc: '이천시 내 지역 아동센터의 낡은 바닥과 벽면 타일을 전면 교체했습니다. 아이들이 더 밝고 안전한 공간에서 생활할 수 있도록 밝은 컬러의 타일로 시공했습니다.',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
  },
  {
    date: '2023. 08',
    tag: '저소득층 지원',
    title: '기초수급 가정 욕실 시공 지원',
    desc: '형편이 어려운 기초수급 가정 3곳의 욕실 시공을 재료비 원가로 지원했습니다. 착한 타일의 1% 기부금이 직접 활용된 첫 번째 프로젝트입니다.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  },
  {
    date: '2023. 05',
    tag: '무상 시공',
    title: '장애인 가정 화장실 배리어프리 시공',
    desc: '휠체어 사용자 가정의 화장실을 배리어프리(barrier-free)로 개선했습니다. 문턱 제거와 함께 미끄럼 방지 타일을 적용해 안전한 생활 환경을 만들었습니다.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  },
];

const NUMBERS = [
  { number: '12', unit: '건', label: '누적 무상·지원 시공' },
  { number: '28', unit: '명', label: '봉사 참여 인원' },
  { number: '15', unit: '가구', label: '지원 가정' },
  { number: '1%', unit: '', label: '수익금 기부 약속' },
];

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* 히어로 */}
        <div
          className="py-20 px-6 text-center"
          style={{ background: 'linear-gradient(135deg, #F0F9F2, #EAF4FB)' }}
        >
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6">
            ← 홈으로
          </Link>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ background: 'rgba(91,189,114,0.12)', color: '#3DA855' }}
          >
            💚 수익금의 1%를 나눕니다
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: '-2px' }}>
            착한 타일이 걷는<br />착한 길
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            단순히 타일을 붙이는 것을 넘어,<br />
            우리가 일하는 지역과 이웃에게 따뜻한 마음을 전합니다.
          </p>
        </div>

        {/* 누적 현황 */}
        <div style={{ background: '#1E1E2E' }} className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {NUMBERS.map((n) => (
              <div key={n.label}>
                <div
                  className="text-4xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #7AB3D4, #5BBD72)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-2px',
                  }}
                >
                  {n.number}<span className="text-2xl">{n.unit}</span>
                </div>
                <div className="text-xs text-white/40">{n.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 활동 스토리 */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-12">
            {STORIES.map((story, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* 이미지 */}
                <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 텍스트 */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: '#F0F9F2', color: '#5BBD72' }}
                    >
                      {story.tag}
                    </span>
                    <span className="text-xs text-gray-400">{story.date}</span>
                  </div>
                  <h2 className="text-xl font-black mb-3" style={{ letterSpacing: '-0.5px' }}>
                    {story.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 CTA */}
          <div className="mt-16 text-center p-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, #F0F9F2, #EAF4FB)' }}>
            <p className="text-2xl font-black mb-3" style={{ letterSpacing: '-1px' }}>함께 만들어가는 착한 변화</p>
            <p className="text-sm text-gray-500 mb-6">착한 타일에 시공을 맡기시면, 수익금의 1%가<br />이웃을 위한 나눔으로 이어집니다.</p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: '#1E1E2E' }}
            >
              견적 문의하기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
