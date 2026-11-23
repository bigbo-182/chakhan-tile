'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

function scrollToSection(href: string) {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (!isMainPage) {
      // Sub-page: navigate to main page with hash
      const target = href === '#' ? '/' : `/${href}`;
      window.location.href = target;
      return;
    }
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" onClick={(e) => handleNav(e, '#')}>
          <Logo size="md" />
        </a>

        {/* 데스크톱 네비 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#1E1E2E' }}
          >
            무료 견적 받기
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => handleNav(e, item.href)} className="text-sm font-medium text-gray-700 py-1">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: '#1E1E2E' }}
          >
            무료 견적 받기
          </a>
        </div>
      )}
    </header>
  );
}
