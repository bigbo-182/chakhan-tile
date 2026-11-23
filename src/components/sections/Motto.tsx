const MOTTOS = [
  {
    number: '01',
    icon: '⏰',
    quote: '근면성실하자',
    title: '약속을 지키는 팀',
    desc: '시작 시간부터 마감까지 모든 약속을 소중히 여깁니다.',
    color: '#7AB3D4',
  },
  {
    number: '02',
    icon: '🔍',
    quote: '세밀하게 작업하자',
    title: '완벽한 마감',
    desc: '타일 한 장, 줄눈 하나도 끝낸 후 한 번 더 확인합니다.',
    color: '#5BBD72',
  },
  {
    number: '03',
    icon: '🤝',
    quote: '서로서로 친하게 지내자',
    title: '함께 만드는 현장',
    desc: '동료와 협력사 모두 존중하는 현장 문화를 만듭니다.',
    color: '#D4A849',
  },
  {
    number: '04',
    icon: '🦺',
    quote: '안전이 최우선',
    title: '안전이 최고의 기술',
    desc: '다치지 않고 일하는 것이 가장 중요한 가치입니다.',
    color: '#E8A5B0',
  },
];

export default function Motto() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6" style={{ background: '#F8FAFC' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: '#F0F9F2', color: '#5BBD72' }}
          >
            OUR VALUES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mb-1" style={{ letterSpacing: '-1.5px' }}>
            착한 타일의 <span style={{ color: '#5BBD72' }}>일하는 방식</span>
          </h2>
          <p className="text-xs text-gray-400">대표가 직접 만든 네 가지 약속</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {MOTTOS.map((m) => (
            <div
              key={m.number}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* 상단 컬러 바 */}
              <div className="h-1 w-full" style={{ background: m.color }} />

              <div className="p-4 flex flex-col flex-1">
                {/* 아이콘 + 번호 */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${m.color}18` }}
                  >
                    {m.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest" style={{ color: m.color }}>
                    {m.number}
                  </span>
                </div>

                {/* 제목 */}
                <p className="text-sm font-black text-gray-800 mb-1 leading-tight">{m.title}</p>

                {/* 원문 */}
                <p className="text-[10px] text-gray-400 italic mb-2">"{m.quote}"</p>

                {/* 설명 */}
                <p className="text-[11px] text-gray-500 leading-relaxed mt-auto">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 컬러 바 */}
        <div className="mt-5 flex gap-1">
          {MOTTOS.map((m) => (
            <div key={m.number} className="h-1 flex-1 rounded-full" style={{ background: m.color }} />
          ))}
        </div>
      </div>
    </section>
  );
}
