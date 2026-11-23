import { SERVICES, PROCESS_STEPS } from '@/lib/constants';

export default function Services() {
  return (
    <>
      {/* 서비스 종류 */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: '#F0F9F2', color: '#5BBD72' }}
            >
              SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3" style={{ letterSpacing: '-1.5px' }}>
              시공 서비스
            </h2>
            <p className="text-gray-500 text-sm">욕실부터 상업공간까지, 모든 공간의 타일 시공을 책임집니다</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="border border-gray-100 rounded-2xl p-4 sm:p-7 hover:shadow-lg transition-shadow"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-5`}>
                  {service.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시공 프로세스 */}
      <section className="py-14 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: '#F0F9F2', color: '#5BBD72' }}
            >
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black" style={{ letterSpacing: '-1px' }}>시공 프로세스</h2>
          </div>

          {/* 모바일: 원래 2열 그리드 */}
          <div className="grid grid-cols-2 sm:hidden gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="text-center bg-white rounded-2xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-xl mx-auto mb-2">
                  {step.icon}
                </div>
                <p className="text-[10px] font-bold tracking-widest mb-1" style={{ color: '#5BBD72' }}>
                  {step.step}
                </p>
                <p className="text-xs font-bold text-gray-800">{step.title}</p>
              </div>
            ))}
          </div>

          {/* 데스크톱: 가로 — 아이콘/텍스트 크기 키우고 화살표 개선 */}
          <div className="hidden sm:flex items-center justify-between gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex items-center flex-1">
                {/* 스텝 카드 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-3xl md:text-4xl mx-auto mb-3 shadow-sm">
                    {step.icon}
                  </div>
                  <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#5BBD72' }}>
                    {step.step}
                  </p>
                  <p className="text-sm md:text-base font-bold text-gray-800">{step.title}</p>
                </div>

                {/* 화살표 */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="flex-shrink-0 px-1">
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
                      <path d="M2 7 L26 7" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M22 3 L30 7 L22 11" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
