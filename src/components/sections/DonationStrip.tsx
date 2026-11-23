export default function DonationStrip() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 px-4 py-3.5 text-white font-medium"
      style={{ background: 'linear-gradient(135deg, #5BBD72, #3DA855)' }}
    >
      <span className="text-lg">💚</span>
      <p className="text-center text-xs sm:text-sm leading-snug">
        <strong className="font-black text-sm sm:text-base">수익금의 1%</strong>를 지역 사회와 이웃을 위해 기부합니다 — 착한 타일의 약속
      </p>
      <a href="#donation" className="text-white/80 underline text-xs hover:text-white transition-colors whitespace-nowrap">
        자세히 보기 →
      </a>
    </div>
  );
}
