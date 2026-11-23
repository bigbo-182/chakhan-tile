'use client';

import Image from 'next/image';

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EAF4FB 0%, #F7F4FB 40%, #FAE8EC 100%)' }}
    >
      {/* 배경 블러 원 */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: '#7AB3D4', filter: 'blur(80px)' }} />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: '#E8A5B0', filter: 'blur(90px)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 md:py-0 md:min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center w-full">

          {/* 좌측 텍스트 */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 md:mb-6"
              style={{ background: 'rgba(91,189,114,0.12)', color: '#3DA855' }}
            >
              <span>💚</span>
              <span>수익금의 1%를 지역 사회에 기부합니다</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-5"
              style={{ letterSpacing: '-2px', color: '#1E1E2E' }}
            >
              착한 사람들이<br />
              만드는{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7AB3D4, #E8A5B0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                착한 공간
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              경기도 이천을 중심으로,<br className="hidden sm:block" />
              정직한 가격과 꼼꼼한 시공으로<br className="hidden sm:block" />
              여러분의 공간을 새롭게 만들어 드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('#portfolio')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity cursor-pointer"
                style={{ background: '#1E1E2E' }}
              >
                시공 사례 보기
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold border-2 hover:bg-white/60 transition-colors cursor-pointer bg-white/40"
                style={{ borderColor: '#1E1E2E', color: '#1E1E2E' }}
              >
                무료 견적 받기
              </button>
            </div>
          </div>

          {/* 우측 이미지 */}
          <div className="flex justify-center items-end order-1 md:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              <Image
                src="/images/hero-workers.png"
                alt="기부천사 착한타일 시공팀"
                width={600}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 (데스크톱만) */}
      <button
        onClick={() => scrollTo('#about')}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
      >
        <span className="text-[10px] text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-px h-7 bg-gray-400 animate-pulse" />
      </button>
    </section>
  );
}
