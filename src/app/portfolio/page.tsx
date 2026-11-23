'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';

const CATEGORIES = ['전체', '욕실', '주방', '거실/방', '상업공간', '외부'];

const ALL_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', category: '욕실', title: '이천 신축 아파트 욕실 전체 시공' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', category: '주방', title: '주방 서브웨이 타일 시공' },
  { src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80', category: '상업공간', title: '이천 카페 바닥 포인트 타일' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', category: '거실/방', title: '아파트 거실 대리석 바닥 시공' },
  { src: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80', category: '상업공간', title: '신축 사무실 바닥 전체 시공' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', category: '욕실', title: '빌라 욕실 전면 리모델링' },
  { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', category: '주방', title: '주방 모자이크 타일 포인트 시공' },
  { src: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80', category: '거실/방', title: '신축 아파트 거실 바닥 시공' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', category: '욕실', title: '호텔식 욕실 대형 타일 시공' },
  { src: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80', category: '상업공간', title: '레스토랑 바닥 헤링본 타일' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: '외부', title: '빌라 외벽 타일 시공' },
  { src: 'https://images.unsplash.com/photo-1523413555158-f3373a9d5acd?w=800&q=80', category: '주방', title: '카페 주방 백타일 전체 시공' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('전체');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === '전체' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === active);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* 상단 헤더 */}
        <div className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #EAF4FB, #FAE8EC)' }}>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-black mb-3" style={{ letterSpacing: '-1.5px' }}>시공 사례</h1>
          <p className="text-sm text-gray-500">착한 타일이 완성한 공간들을 소개합니다</p>
        </div>

        {/* 필터 탭 */}
        <div className="sticky top-16 bg-white border-b border-gray-100 z-10">
          <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto py-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-800 bg-gray-50'
                }`}
                style={active === cat ? { background: '#1E1E2E' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 그리드 */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridAutoRows: '220px' }}>
            {filtered.map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block text-[10px] bg-white/20 text-white px-2 py-0.5 rounded mb-1.5">{item.category}</span>
                  <p className="text-white text-sm font-bold leading-tight">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />

      {/* 라이트박스 */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-6 text-white text-3xl font-light hover:opacity-70" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="absolute left-4 text-white text-4xl px-4 py-2 hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }}
          >‹</button>
          <div
            className="relative w-full max-w-3xl mx-16 rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={filtered[lightbox].src} alt={filtered[lightbox].title} fill className="object-cover" sizes="90vw" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded mb-2 inline-block">{filtered[lightbox].category}</span>
              <p className="text-white font-bold">{filtered[lightbox].title}</p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white text-4xl px-4 py-2 hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }}
          >›</button>
          <div className="absolute bottom-6 flex gap-2">
            {filtered.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`h-2 rounded-full transition-all ${i === lightbox ? 'bg-white w-5' : 'bg-white/40 w-2'}`} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
