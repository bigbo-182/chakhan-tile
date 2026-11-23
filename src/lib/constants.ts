export const SITE = {
  name: '착한 타일',
  nameKo: '착한사람들 · 착한타일',
  ceo: '강정호',
  phone: '010-9271-0988',
  tel: '031-334-7881',
  email: 'xhdn1201@naver.com',
  address: '경기도 이천시 백사면 청백리로89번길 16 M520 빌리지 203동 17호',
  hours: '평일 09:00 – 18:00  |  토요일 09:00 – 13:00',
  donationPercent: 1,
  kakaoUrl: '#',
  instagramUrl: '#',
  naverBlogUrl: '#',
} as const;

export const NAV_ITEMS = [
  { label: '소개', href: '#about' },
  { label: '시공사례', href: '#portfolio' },
  { label: '서비스', href: '#services' },
  { label: '착한활동', href: '#donation' },
  { label: '문의', href: '#contact' },
] as const;

export const STATS = [
  { number: '1,200+', label: '누적 시공 건수' },
  { number: '98%', label: '고객 만족도' },
  { number: '15년+', label: '시공 경력' },
  { number: '1년', label: '무상 A/S 보장' },
] as const;

export const SERVICES = [
  {
    icon: '🚿',
    title: '욕실 타일 시공',
    desc: '바닥, 벽면 전체 교체부터 부분 보수까지. 방수 처리 포함 꼼꼼한 마감 보장.',
    color: 'bg-blue-50',
  },
  {
    icon: '🍳',
    title: '주방 타일 시공',
    desc: '서브웨이, 모자이크, 대형 타일 등 다양한 스타일 시공 가능.',
    color: 'bg-orange-50',
  },
  {
    icon: '🏠',
    title: '거실 / 방 바닥',
    desc: '대리석, 포슬린, 세라믹 등 고급 자재를 활용한 거실 바닥 시공.',
    color: 'bg-green-50',
  },
  {
    icon: '🏢',
    title: '상업 공간 시공',
    desc: '카페, 식당, 사무실 등 상업 공간 전문 시공. 빠른 공기 준수.',
    color: 'bg-pink-50',
  },
  {
    icon: '🧱',
    title: '외부 타일 시공',
    desc: '건물 외벽, 외부 계단 등 내후성 타일 시공 전문.',
    color: 'bg-purple-50',
  },
  {
    icon: '🔨',
    title: '철거 및 보수',
    desc: '기존 타일 철거 및 하자 보수. 누수 방지 방수 처리 전문.',
    color: 'bg-yellow-50',
  },
] as const;

export const PROCESS_STEPS = [
  { icon: '📞', step: 'STEP 01', title: '문의 / 상담' },
  { icon: '📍', step: 'STEP 02', title: '현장 방문' },
  { icon: '📋', step: 'STEP 03', title: '견적 확정' },
  { icon: '🪣', step: 'STEP 04', title: '시공 진행' },
  { icon: '✅', step: 'STEP 05', title: '사후 관리' },
] as const;

export const DONATION_ACTIVITIES = [
  {
    icon: '👴',
    name: '독거노인 무상 시공',
    desc: '형편이 어려운 어르신 가정 무상 시공 지원',
  },
  {
    icon: '🏫',
    name: '지역 아동센터 환경 개선',
    desc: '아이들이 생활하는 공간을 새롭게',
  },
  {
    icon: '🤝',
    name: '저소득층 가정 지원',
    desc: '기초수급 가정 욕실 시공 지원',
  },
] as const;

export const REVIEWS = [
  {
    stars: 5,
    text: '정말 꼼꼼하게 시공해 주셨어요. 마감 처리가 깔끔하고 기대 이상이었습니다. 다음에 또 맡길 예정입니다.',
    author: '경기도 이천시 · 아파트 욕실 시공',
  },
  {
    stars: 5,
    text: '가격도 합리적이고 결과도 만족스러웠어요. 약속한 날짜에 정확하게 맞춰주셔서 너무 좋았습니다.',
    author: '경기도 여주시 · 카페 바닥 시공',
  },
  {
    stars: 5,
    text: '1% 기부 활동을 알고 더 믿음이 갔습니다. 시공도 훌륭하고 업체 마인드도 좋아서 주변에 적극 추천하고 있어요.',
    author: '경기도 광주시 · 주택 전체 시공',
  },
] as const;
