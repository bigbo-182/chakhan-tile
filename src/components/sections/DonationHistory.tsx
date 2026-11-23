'use client';

import { useState } from 'react';

const MONTHS = [
  {
    id: '2026-03',
    label: '2026년 3월',
    total: 124000,
    count: 7,
    records: [
      { name: '이○○', type: '욕실 전면 시공', amount: 26000, date: '03/25', donor: 'customer' as const },
      { name: '강팀장', type: '팀장 자발적 추가 기부', amount: 20000, date: '03/22', donor: 'team' as const },
      { name: '김○○', type: '거실 바닥 시공', amount: 19000, date: '03/18', donor: 'customer' as const },
      { name: '박○○', type: '주방 타일 시공', amount: 17000, date: '03/14', donor: 'customer' as const },
      { name: '최○○', type: '상업공간 시공', amount: 22000, date: '03/10', donor: 'customer' as const },
      { name: '이팀원', type: '팀원 자발적 기부', amount: 10000, date: '03/06', donor: 'team' as const },
      { name: '정○○', type: '욕실 부분 보수', amount: 10000, date: '03/03', donor: 'customer' as const },
    ],
  },
  {
    id: '2026-02',
    label: '2026년 2월',
    total: 98000,
    count: 6,
    records: [
      { name: '한○○', type: '아파트 전체 시공', amount: 31000, date: '02/24', donor: 'customer' as const },
      { name: '강팀장', type: '팀장 자발적 추가 기부', amount: 20000, date: '02/20', donor: 'team' as const },
      { name: '오○○', type: '거실 바닥 시공', amount: 18000, date: '02/17', donor: 'customer' as const },
      { name: '윤○○', type: '카페 바닥 시공', amount: 15000, date: '02/11', donor: 'customer' as const },
      { name: '장○○', type: '욕실 부분 보수', amount: 9000, date: '02/06', donor: 'customer' as const },
      { name: '이팀원', type: '팀원 자발적 기부', amount: 5000, date: '02/03', donor: 'team' as const },
    ],
  },
  {
    id: '2026-01',
    label: '2026년 1월',
    total: 107000,
    count: 5,
    records: [
      { name: '임○○', type: '아파트 전체 시공', amount: 34000, date: '01/28', donor: 'customer' as const },
      { name: '강팀장', type: '신년 특별 기부', amount: 20000, date: '01/22', donor: 'team' as const },
      { name: '강○○', type: '욕실 전면 시공', amount: 21000, date: '01/17', donor: 'customer' as const },
      { name: '신○○', type: '주방 타일 시공', amount: 19000, date: '01/10', donor: 'customer' as const },
      { name: '권○○', type: '욕실 부분 보수', amount: 13000, date: '01/04', donor: 'customer' as const },
    ],
  },
  {
    id: '2025-12',
    label: '2025년 12월',
    total: 118000,
    count: 7,
    records: [
      { name: '류○○', type: '빌라 전체 시공', amount: 35000, date: '12/26', donor: 'customer' as const },
      { name: '강팀장', type: '연말 특별 기부', amount: 20000, date: '12/20', donor: 'team' as const },
      { name: '황○○', type: '거실 바닥 시공', amount: 18000, date: '12/17', donor: 'customer' as const },
      { name: '안○○', type: '욕실 전면 시공', amount: 22000, date: '12/12', donor: 'customer' as const },
      { name: '송○○', type: '상업공간 시공', amount: 13000, date: '12/08', donor: 'customer' as const },
      { name: '전○○', type: '주방 타일 시공', amount: 7000, date: '12/04', donor: 'customer' as const },
      { name: '홍○○', type: '욕실 부분 보수', amount: 3000, date: '12/01', donor: 'customer' as const },
    ],
  },
];

const RECENT = MONTHS.flatMap(m =>
  m.records.map(r => ({ ...r, month: m.label }))
).slice(0, 6);

function formatKRW(n: number) {
  return n.toLocaleString('ko-KR') + '원';
}

export default function DonationHistory() {
  const [tab, setTab] = useState<'recent' | string>('recent');
  const selected = MONTHS.find(m => m.id === tab);

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #F0F9F2, #EAF4FB)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(91,189,114,0.15)', color: '#5BBD72' }}
          >
            DONATION HISTORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ letterSpacing: '-1px' }}>
            모금 현황
          </h2>
          <p className="text-sm text-gray-500">착한 타일과 함께해주신 고객님들의 시공이<br className="hidden sm:block" />지역 사회 나눔으로 이어집니다</p>
        </div>

        {/* 누적 총합 카드 */}
        <div
          className="rounded-2xl p-5 sm:p-6 mb-6 flex flex-wrap gap-4 items-center justify-between"
          style={{ background: '#1E1E2E' }}
        >
          <div>
            <p className="text-xs text-white/40 mb-1">2025년 이후 누적 기부금</p>
            <p className="text-3xl font-black" style={{
              background: 'linear-gradient(135deg, #5BBD72, #7AB3D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-1px'
            }}>
              {formatKRW(447000)}
            </p>
          </div>
          <div className="flex gap-5 text-center">
            <div>
              <p className="text-xl font-black text-white">25건</p>
              <p className="text-xs text-white/40">총 참여</p>
            </div>
            <div>
              <p className="text-xl font-black text-white">4개월</p>
              <p className="text-xs text-white/40">연속 기부</p>
            </div>
          </div>
        </div>

        {/* 탭 */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-5">
          <button
            onClick={() => setTab('recent')}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              tab === 'recent' ? 'text-white shadow-sm' : 'text-gray-500 bg-white'
            }`}
            style={tab === 'recent' ? { background: '#5BBD72' } : {}}
          >
            최근 이력
          </button>
          {MONTHS.map(m => (
            <button
              key={m.id}
              onClick={() => setTab(m.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                tab === m.id ? 'text-white shadow-sm' : 'text-gray-500 bg-white'
              }`}
              style={tab === m.id ? { background: '#1E1E2E' } : {}}
            >
              {m.label.replace('년 ', '.').replace('월', '')}
            </button>
          ))}
        </div>

        {/* 콘텐츠 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {tab === 'recent' ? (
            <>
              <div className="px-5 py-4 border-b border-gray-50 flex justify-between items-center">
                <p className="text-sm font-bold">최근 기부 이력</p>
                <span className="text-xs text-gray-400">최신순</span>
              </div>
              {RECENT.map((r, i) => (
                <div key={i} className={`px-5 py-4 flex items-center gap-4 ${i < RECENT.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={r.donor === 'team'
                      ? { background: '#FFF8E8', color: '#D4A849' }
                      : { background: '#F0F9F2', color: '#5BBD72' }}
                  >
                    {r.donor === 'team' ? '🤝' : '💚'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-gray-800">
                        {r.donor === 'team' ? r.name : `${r.name} 고객님`}
                      </p>
                      {r.donor === 'team' && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#FFF0C8', color: '#D4A849' }}>팀</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{r.type} · {r.month.slice(0, 7)}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-black" style={{ color: r.donor === 'team' ? '#D4A849' : '#5BBD72' }}>{formatKRW(r.amount)}</p>
                    <p className="text-[10px] text-gray-300">{r.date}</p>
                  </div>
                </div>
              ))}
            </>
          ) : selected ? (
            <>
              <div className="px-5 py-4 border-b border-gray-50 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <p className="text-sm font-bold">{selected.label} 기부 내역</p>
                  <p className="text-xs text-gray-400">총 {selected.count}건의 시공 참여</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">이달 기부 합계</p>
                  <p className="text-lg font-black" style={{ color: '#5BBD72' }}>{formatKRW(selected.total)}</p>
                </div>
              </div>
              {selected.records.map((r, i) => (
                <div key={i} className={`px-5 py-4 flex items-center gap-4 ${i < selected.records.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={r.donor === 'team'
                      ? { background: '#FFF8E8', color: '#D4A849' }
                      : { background: '#1E1E2E', color: 'white' }}
                  >
                    {r.donor === 'team' ? '🤝' : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-gray-800">
                        {r.donor === 'team' ? r.name : `${r.name} 고객님`}
                      </p>
                      {r.donor === 'team' && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#FFF0C8', color: '#D4A849' }}>팀</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{r.type}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-black" style={{ color: r.donor === 'team' ? '#D4A849' : '#5BBD72' }}>{formatKRW(r.amount)}</p>
                    <p className="text-[10px] text-gray-300">{r.date}</p>
                  </div>
                </div>
              ))}
              <div className="px-5 py-3 bg-gray-50 flex justify-between items-center">
                <p className="text-xs text-gray-500">시공 금액의 1% 자동 기부 + 팀 자발적 기부 포함</p>
                <p className="text-xs font-bold" style={{ color: '#5BBD72' }}>합계 {formatKRW(selected.total)}</p>
              </div>
            </>
          ) : null}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          고객 개인정보 보호를 위해 이름 일부를 마스킹 처리합니다
        </p>
      </div>
    </section>
  );
}
