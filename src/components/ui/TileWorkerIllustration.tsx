export default function TileWorkerIllustration() {
  return (
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">

      {/* ── 배경 바닥 타일 ── */}
      <rect x="0" y="370" width="520" height="110" fill="#F0F4F8" rx="0"/>
      {[0,1,2,3,4,5,6,7].map(col =>
        [0,1].map(row => (
          <rect key={`t-${col}-${row}`}
            x={col * 66 + (row === 1 ? 33 : 0) - 10}
            y={375 + row * 50}
            width="60" height="45" rx="4"
            fill={col % 2 === row % 2 ? '#E2EBF3' : '#EFF3F7'}
            stroke="white" strokeWidth="2"
          />
        ))
      )}

      {/* ── 벽 배경 ── */}
      <rect x="0" y="0" width="520" height="375" fill="#F8FAFC"/>

      {/* ── 작업자 1: 왼쪽 (타일 붙이는 중) ── */}
      {/* 그림자 */}
      <ellipse cx="135" cy="378" rx="55" ry="10" fill="#CBD5E1" opacity="0.5"/>
      {/* 다리 */}
      <rect x="108" y="310" width="26" height="70" rx="13" fill="#2D4A6B"/>
      <rect x="142" y="310" width="26" height="70" rx="13" fill="#2D4A6B"/>
      {/* 신발 */}
      <ellipse cx="121" cy="380" rx="18" ry="8" fill="#1E2D3D"/>
      <ellipse cx="155" cy="380" rx="18" ry="8" fill="#1E2D3D"/>
      {/* 몸통 - 작업복 */}
      <rect x="100" y="200" width="76" height="115" rx="20" fill="#3B6EA5"/>
      {/* 안전조끼 */}
      <path d="M100 205 L116 200 L116 315 L100 315 Z" fill="#F5A623" opacity="0.9"/>
      <path d="M160 205 L176 200 L176 315 L160 315 Z" fill="#F5A623" opacity="0.9"/>
      <rect x="100" y="255" width="76" height="6" fill="#F5E642" opacity="0.7"/>
      <rect x="100" y="275" width="76" height="6" fill="#F5E642" opacity="0.7"/>
      {/* 왼팔 - 헤라 들고 벽 작업 */}
      <path d="M100 225 Q70 220 55 200" stroke="#3B6EA5" strokeWidth="26" strokeLinecap="round" fill="none"/>
      <circle cx="52" cy="197" r="13" fill="#4CAF80"/>
      {/* 헤라 */}
      <rect x="18" y="148" width="10" height="55" rx="4" fill="#8B6914" transform="rotate(20 23 175)"/>
      <path d="M10 145 L42 135 L44 150 L12 160Z" fill="#9E9E9E"/>
      {/* 오른팔 */}
      <path d="M176 225 Q200 215 210 195" stroke="#3B6EA5" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <circle cx="213" cy="192" r="12" fill="#4CAF80"/>
      {/* 목 */}
      <rect x="124" y="180" width="28" height="24" rx="8" fill="#F5CBA7"/>
      {/* 머리 */}
      <circle cx="138" cy="163" r="35" fill="#F5CBA7"/>
      {/* 안전모 */}
      <path d="M106 158 Q110 118 138 115 Q166 118 170 158 Z" fill="#F5A623"/>
      <rect x="103" y="155" width="70" height="9" rx="4" fill="#D4890A"/>
      {/* 얼굴 */}
      <circle cx="128" cy="162" r="4" fill="#2D2D2D"/>
      <circle cx="148" cy="162" r="4" fill="#2D2D2D"/>
      <circle cx="129" cy="161" r="1.5" fill="white"/>
      <circle cx="149" cy="161" r="1.5" fill="white"/>
      <circle cx="123" cy="170" r="6" fill="#E8A5B0" opacity="0.4"/>
      <circle cx="153" cy="170" r="6" fill="#E8A5B0" opacity="0.4"/>
      <path d="M130 172 Q138 178 146 172" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* ── 작업자 2: 가운데 (감독/측정) ── */}
      {/* 그림자 */}
      <ellipse cx="280" cy="378" rx="52" ry="10" fill="#CBD5E1" opacity="0.5"/>
      {/* 다리 */}
      <rect x="254" y="308" width="24" height="72" rx="12" fill="#1E3A5F"/>
      <rect x="286" y="308" width="24" height="72" rx="12" fill="#1E3A5F"/>
      {/* 신발 */}
      <ellipse cx="266" cy="380" rx="18" ry="8" fill="#111827"/>
      <ellipse cx="298" cy="380" rx="18" ry="8" fill="#111827"/>
      {/* 몸통 - 어두운 작업복 */}
      <rect x="246" y="198" width="72" height="115" rx="20" fill="#1E3A5F"/>
      {/* 포켓 */}
      <rect x="267" y="245" width="28" height="20" rx="5" fill="#16304F" opacity="0.8"/>
      {/* 왼팔 - 클립보드 들고 */}
      <path d="M246 220 Q218 222 205 245" stroke="#1E3A5F" strokeWidth="24" strokeLinecap="round" fill="none"/>
      <circle cx="202" cy="248" r="12" fill="#F5CBA7"/>
      {/* 클립보드 */}
      <rect x="168" y="255" width="42" height="52" rx="5" fill="white" stroke="#CBD5E1" strokeWidth="1.5"/>
      <rect x="180" y="250" width="18" height="8" rx="3" fill="#9E9E9E"/>
      <line x1="174" y1="272" x2="204" y2="272" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="174" y1="282" x2="204" y2="282" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="174" y1="292" x2="196" y2="292" stroke="#5BBD72" strokeWidth="2"/>
      {/* 오른팔 */}
      <path d="M318 220 Q340 210 350 225" stroke="#1E3A5F" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <circle cx="353" cy="228" r="12" fill="#F5CBA7"/>
      {/* 목 */}
      <rect x="270" y="178" width="26" height="24" rx="7" fill="#F5CBA7"/>
      {/* 머리 */}
      <circle cx="283" cy="160" r="34" fill="#F5CBA7"/>
      {/* 안전모 - 흰색 (감독) */}
      <path d="M252 156 Q256 118 283 115 Q310 118 314 156Z" fill="#E8EDF2"/>
      <rect x="249" y="153" width="68" height="8" rx="4" fill="#CBD5E1"/>
      {/* 얼굴 */}
      <circle cx="273" cy="158" r="4" fill="#2D2D2D"/>
      <circle cx="293" cy="158" r="4" fill="#2D2D2D"/>
      <circle cx="274" cy="157" r="1.5" fill="white"/>
      <circle cx="294" cy="157" r="1.5" fill="white"/>
      <circle cx="268" cy="167" r="6" fill="#E8A5B0" opacity="0.35"/>
      <circle cx="298" cy="167" r="6" fill="#E8A5B0" opacity="0.35"/>
      <path d="M275 169 Q283 175 291 169" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* ── 작업자 3: 오른쪽 (타일 운반) ── */}
      {/* 그림자 */}
      <ellipse cx="420" cy="378" rx="52" ry="10" fill="#CBD5E1" opacity="0.5"/>
      {/* 다리 */}
      <rect x="396" y="305" width="24" height="75" rx="12" fill="#2D4A6B"/>
      <rect x="428" y="305" width="24" height="75" rx="12" fill="#2D4A6B"/>
      {/* 신발 */}
      <ellipse cx="408" cy="380" rx="18" ry="8" fill="#1E2D3D"/>
      <ellipse cx="440" cy="380" rx="18" ry="8" fill="#1E2D3D"/>
      {/* 몸통 */}
      <rect x="388" y="195" width="72" height="115" rx="20" fill="#3B6EA5"/>
      {/* 안전조끼 */}
      <path d="M388 200 L404 196 L404 310 L388 310 Z" fill="#F5A623" opacity="0.9"/>
      <path d="M448 200 L464 196 L464 310 L448 310 Z" fill="#F5A623" opacity="0.9"/>
      <rect x="388" y="250" width="76" height="6" fill="#F5E642" opacity="0.7"/>
      {/* 양팔 - 타일 박스 들고 */}
      <path d="M388 215 Q370 230 360 255" stroke="#3B6EA5" strokeWidth="24" strokeLinecap="round" fill="none"/>
      <path d="M460 215 Q478 230 488 255" stroke="#3B6EA5" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <circle cx="357" cy="258" r="12" fill="#4CAF80"/>
      <circle cx="490" cy="258" r="12" fill="#4CAF80"/>
      {/* 타일 박스 */}
      <rect x="352" y="262" width="148" height="80" rx="8" fill="white" stroke="#CBD5E1" strokeWidth="2"/>
      {/* 박스 안 타일 격자 */}
      {[0,1,2,3].map(c => [0,1].map(r => (
        <rect key={`box-${c}-${r}`}
          x={360 + c * 34} y={270 + r * 36}
          width="28" height="30" rx="3"
          fill={c % 2 === r % 2 ? '#EAF4FB' : '#FAE8EC'}
          stroke="#E2E8F0" strokeWidth="1"
        />
      )))}
      {/* 목 */}
      <rect x="412" y="175" width="26" height="24" rx="7" fill="#F0C080"/>
      {/* 머리 */}
      <circle cx="424" cy="157" r="34" fill="#F0C080"/>
      {/* 안전모 */}
      <path d="M392 153 Q396 113 424 110 Q452 113 456 153Z" fill="#5BBD72"/>
      <rect x="389" y="150" width="70" height="8" rx="4" fill="#3DA855"/>
      {/* 얼굴 */}
      <circle cx="414" cy="155" r="4" fill="#2D2D2D"/>
      <circle cx="434" cy="155" r="4" fill="#2D2D2D"/>
      <circle cx="415" cy="154" r="1.5" fill="white"/>
      <circle cx="435" cy="154" r="1.5" fill="white"/>
      <circle cx="409" cy="164" r="6" fill="#E8A5B0" opacity="0.35"/>
      <circle cx="439" cy="164" r="6" fill="#E8A5B0" opacity="0.35"/>
      <path d="M416 166 Q424 173 432 166" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* ── 말풍선 ── */}
      <g filter="url(#cardShadow)">
        <rect x="58" y="28" width="148" height="68" rx="14" fill="white"/>
        <path d="M80 96 L70 112 L96 96Z" fill="white"/>
        <text x="74" y="52" fontSize="11" fontWeight="800" fill="#1E1E2E" fontFamily="sans-serif">기부천사 착한타일</text>
        <text x="74" y="68" fontSize="10" fill="#5BBD72" fontFamily="sans-serif">💚 수익금 1% 기부 약속</text>
        <text x="74" y="84" fontSize="9" fill="#9CA3AF" fontFamily="sans-serif">경기도 이천 타일 전문</text>
      </g>

      {/* ── 장식 타일 조각 ── */}
      <rect x="28" y="200" width="24" height="24" rx="4" fill="#7AB3D4" opacity="0.15" transform="rotate(12 40 212)"/>
      <rect x="470" y="100" width="20" height="20" rx="3" fill="#E8A5B0" opacity="0.2" transform="rotate(-8 480 110)"/>
      <rect x="480" y="310" width="18" height="18" rx="3" fill="#5BBD72" opacity="0.18" transform="rotate(15 489 319)"/>

      <defs>
        <filter id="cardShadow" x="-5%" y="-5%" width="115%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1E1E2E" floodOpacity="0.08"/>
        </filter>
      </defs>
    </svg>
  );
}
