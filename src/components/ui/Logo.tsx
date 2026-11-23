import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md';
  dark?: boolean;
}

export default function Logo({ size = 'md', dark = false }: LogoProps) {
  const iconSize = size === 'sm' ? 44 : 56;
  const textColor = dark ? 'text-white' : 'text-gray-900';
  const subColor = dark ? 'rgba(255,255,255,0.5)' : '#9CA3AF';

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo-icon.png"
        alt="기부천사 착한타일 로고"
        width={iconSize}
        height={iconSize}
        style={{ flexShrink: 0 }}
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest" style={{ color: subColor }}>
          기부천사
        </span>
        <span
          className={`text-sm sm:text-base font-black tracking-tight ${textColor}`}
          style={{ letterSpacing: '-0.5px' }}
        >
          착한 타일
        </span>
      </div>
    </div>
  );
}
