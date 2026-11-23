import { SITE } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#111' }} className="text-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 좌측 */}
          <div>
            <div className="mb-4">
              <Logo size="sm" dark />
            </div>

            <div className="text-xs leading-loose">
              <p className="text-white/30 text-[10px] tracking-widest mb-1">CONTACT</p>
              <p>대표 {SITE.ceo} · {SITE.phone} · {SITE.tel}</p>
              <p>{SITE.email}</p>
              <p className="text-white/30 text-[10px] tracking-widest mt-3 mb-1">ADDRESS</p>
              <p className="leading-relaxed">{SITE.address}</p>
              <p className="text-white/30 text-[10px] tracking-widest mt-3 mb-1">HOURS</p>
              <p>{SITE.hours}</p>
            </div>

            <div
              className="mt-4 inline-block text-[11px] px-3 py-2 rounded-lg"
              style={{ background: 'rgba(91,189,114,0.1)', border: '1px solid rgba(91,189,114,0.2)', color: '#5BBD72' }}
            >
              💚 수익금의 1%는 지역 사회 기부에 사용됩니다
            </div>
          </div>

          {/* 우측 */}
          <div className="flex flex-col justify-between gap-4 md:items-end">
            <div className="flex gap-2.5">
              <a href={SITE.kakaoUrl} className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-colors" style={{ background: 'rgba(255,255,255,0.08)' }} title="카카오톡">💬</a>
              <a href={SITE.instagramUrl} className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-colors" style={{ background: 'rgba(255,255,255,0.08)' }} title="인스타그램">📸</a>
              <a href={SITE.naverBlogUrl} className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-colors" style={{ background: 'rgba(255,255,255,0.08)' }} title="네이버 블로그">📝</a>
            </div>
            <p className="text-[11px] text-white/30">
              © 2026 기부천사 착한타일. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
