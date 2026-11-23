import { SITE } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href={SITE.kakaoUrl}
        className="w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-105 transition-transform"
        style={{ background: '#FEE500' }}
        title="카카오톡 상담"
        aria-label="카카오톡 상담"
      >
        💬
      </a>
      <a
        href={`tel:${SITE.phone.replace(/-/g, '')}`}
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-105 transition-transform"
        style={{ background: '#5BBD72' }}
        title="전화 문의"
        aria-label="전화 문의"
      >
        📞
      </a>
    </div>
  );
}
