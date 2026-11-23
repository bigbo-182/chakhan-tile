'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PORTFOLIO_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    category: '욕실 리모델링',
    title: '이천 신축 아파트 욕실 전체 시공',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    category: '주거 · 주방',
    title: '주방 서브웨이 타일 시공',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
    category: '상업 · 카페',
    title: '이천 카페 바닥 포인트 타일',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    category: '주거 · 거실',
    title: '아파트 거실 대리석 바닥 시공',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
    category: '상업 · 사무실',
    title: '신축 사무실 바닥 전체 시공',
    tall: false,
  },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: '#F0F9F2', color: '#5BBD72' }}
            >
              PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black" style={{ letterSpacing: '-1.5px' }}>
              최근 시공 사례
            </h2>
          </div>
          <Link href="/portfolio" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">
            전체 보기 →
          </Link>
        </div>

        {/* 모바일: 1열 고정 높이 / 데스크톱: 3열 + row-span */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
          style={{ gridAutoRows: '200px' }}>
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                item.tall ? 'sm:row-span-2' : ''
              }`}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              {/* 오버레이 - 모바일은 항상 표시 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 md:translate-y-2 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block text-[10px] bg-white/20 text-white px-2 py-0.5 rounded mb-1">
                  {item.category}
                </span>
                <p className="text-white text-xs sm:text-sm font-bold leading-tight">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 라이트박스 */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl font-light hover:opacity-70 w-10 h-10 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-2 text-white text-4xl px-2 py-4 hover:opacity-70 z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length); }}
          >‹</button>
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PORTFOLIO_ITEMS[lightbox].src}
              alt={PORTFOLIO_ITEMS[lightbox].title}
              fill
              className="object-cover"
              sizes="95vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded mb-2 inline-block">
                {PORTFOLIO_ITEMS[lightbox].category}
              </span>
              <p className="text-white font-bold text-sm sm:text-base">{PORTFOLIO_ITEMS[lightbox].title}</p>
            </div>
          </div>
          <button
            className="absolute right-2 text-white text-4xl px-2 py-4 hover:opacity-70 z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % PORTFOLIO_ITEMS.length); }}
          >›</button>
          <div className="absolute bottom-4 flex gap-2">
            {PORTFOLIO_ITEMS.map((_, i) => (
              <button key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`h-2 rounded-full transition-all ${i === lightbox ? 'bg-white w-5' : 'bg-white/40 w-2'}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
