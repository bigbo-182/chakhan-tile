'use client';

import { useState } from 'react';
import { SITE } from '@/lib/constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #EAF4FB, #FAE8EC)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: '#F0F9F2', color: '#5BBD72' }}
          >
            CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3" style={{ letterSpacing: '-1.5px' }}>
            무료 견적을 받아보세요
          </h2>
          <p className="text-sm text-gray-500">전화, 카카오톡, 온라인 폼 — 편하신 방법으로 연락 주세요</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {/* 빠른 연락 */}
          <div className="flex flex-col gap-3">
            <a
              href={SITE.kakaoUrl}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 hover:shadow-md transition-shadow group"
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                style={{ background: '#FEE500' }}
              >
                💬
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-0.5">카카오톡 상담</p>
                <p className="font-bold text-sm group-hover:text-green-600 transition-colors">카카오톡 채널 바로가기</p>
              </div>
              <span className="ml-auto text-gray-300 flex-shrink-0">→</span>
            </a>

            <a
              href={`tel:${SITE.phone.replace(/-/g, '')}`}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 hover:shadow-md transition-shadow group"
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                style={{ background: '#F0F9F2' }}
              >
                📞
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-0.5">전화 문의</p>
                <p className="font-bold text-sm">{SITE.phone}</p>
              </div>
              <span className="ml-auto text-gray-300 flex-shrink-0">→</span>
            </a>

            <div className="bg-white/60 rounded-2xl p-4 sm:p-5 text-sm text-gray-500 leading-relaxed">
              <p className="font-bold text-gray-800 mb-1.5">운영 시간</p>
              <p className="text-xs sm:text-sm">{SITE.hours}</p>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">{SITE.address}</p>
            </div>
          </div>

          {/* 온라인 견적 폼 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10">
                <div className="text-5xl">✅</div>
                <p className="font-bold text-lg">견적 문의가 접수되었습니다!</p>
                <p className="text-sm text-gray-500 text-center">빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <h3 className="font-bold mb-0.5">온라인 견적 신청</h3>

                {/* 모바일에서는 1열, sm 이상에서 2열 */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">성함 *</label>
                    <input
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">연락처 *</label>
                    <input
                      required
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">시공 주소</label>
                  <input
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400"
                    placeholder="경기도 이천시..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">시공 종류</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 bg-white">
                      <option value="">선택</option>
                      <option>욕실</option>
                      <option>주방</option>
                      <option>거실/방</option>
                      <option>상업공간</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">면적 (평)</label>
                    <input
                      type="number"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400"
                      placeholder="예: 5"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">문의 내용</label>
                  <textarea
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 resize-none"
                    rows={3}
                    placeholder="시공에 대해 자유롭게 작성해 주세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#1E1E2E' }}
                >
                  견적 문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
