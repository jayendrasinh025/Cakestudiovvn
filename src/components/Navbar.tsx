import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/cakes';

interface NavbarProps {
  onOrderClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Creations', href: '#creations' },
  { label: 'Custom Cakes', href: '#custom-cakes' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 hero-step-0 ${
        scrolled
          ? 'bg-[#FFFDFC]/95 backdrop-blur-md border-b border-[#302326]/8 py-3.5'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-editorial text-2xl sm:text-[26px] font-semibold tracking-tight text-[#302326] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713B50]"
        >
          {BRAND_INFO.name}
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#302326]/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#713B50] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#713B50] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Mobile trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-semibold tracking-tight text-[#FFFDFC] bg-[#713B50] hover:bg-[#302326] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#713B50]"
          >
            Order a Cake
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#302326] hover:text-[#713B50] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDFC] border-b border-[#302326]/10 px-5 pt-4 pb-8 shadow-xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-lg font-editorial text-[#302326] hover:text-[#713B50] border-b border-[#302326]/6 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderClick();
              }}
              className="w-full py-3.5 px-6 text-sm font-semibold text-[#FFFDFC] bg-[#713B50] hover:bg-[#302326] transition-colors text-center cursor-pointer"
            >
              Order a Cake
            </button>
            <div className="pt-2 flex items-center justify-between text-xs text-[#302326]/65">
              <span>{BRAND_INFO.location}</span>
              <a href={`tel:${BRAND_INFO.phoneRaw}`} className="underline hover:text-[#713B50]">
                {BRAND_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
