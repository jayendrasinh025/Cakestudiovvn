import React, { useEffect, useRef, useState } from 'react';
import { Menu, X as CloseIcon } from 'lucide-react';
import { BRAND_INFO } from '../data/cakes';

interface HeroProps {
  onExploreClick: () => void;
  onCreateClick: () => void;
  onSelectHeroCake: (cakeId: string) => void;
}

const PLATE_IMAGE_URL =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/dc4ac5c7-4eee-48ab-814c-cbba3c9fd1b7.jpg';

const PLATE_VIDEO_URL =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/81764d30-8120-4ab5-8491-4dd852b82496.mp4';

const HERO_FAN_CARDS = [
  {
    id: 'pastel-butterfly-tiered',
    title: 'Pastel Butterfly & Sphere Tier',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122509291_a648d740.jpg',
    left: 472,
    top: 419,
    rotate: -12,
    zIndex: 11,
  },
  {
    id: 'white-gold-architectural',
    title: 'Gilded Palm & Pearl Blanc',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122409942_51fdac31.jpg',
    left: 601,
    top: 407,
    rotate: -4,
    zIndex: 12,
  },
  {
    id: 'floral-swing-canopy',
    title: 'Botanical Swing & Rose Trellis',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122044617_1f3e360f.jpg',
    left: 711,
    top: 409,
    rotate: 4,
    zIndex: 13,
  },
  {
    id: 'white-lily-vintage-lambeth',
    title: 'Ivory Lambeth & Stargazer Lily',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122437451_61575a23.jpg',
    left: 827,
    top: 419,
    rotate: 12,
    zIndex: 14,
  },
];

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'Creations', href: '#creations' },
  { label: 'Categories', href: '#categories' },
  { label: 'Custom Cake', href: '#custom-cakes' },
  { label: 'Contact', href: '#contact' },
];

export const Hero: React.FC<HeroProps> = ({
  onCreateClick,
  onSelectHeroCake,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for the single Web Animations entrance timeline
  const navLogoRef = useRef<HTMLAnchorElement | null>(null);
  const navActionsRef = useRef<HTMLDivElement | null>(null);
  const swipe1BgRef = useRef<HTMLSpanElement | null>(null);
  const swipe1TextRef = useRef<HTMLSpanElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const swipe2BgRef = useRef<HTMLSpanElement | null>(null);
  const swipe2TextRef = useRef<HTMLSpanElement | null>(null);
  const sublineRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

    // 0.0s: Logo and nav buttons fade in
    if (navLogoRef.current) {
      navLogoRef.current.animate(
        [
          { opacity: 0, transform: 'scale(0.92)' },
          { opacity: 1, transform: 'scale(1)' },
        ],
        { duration: 550, delay: 0, easing, fill: 'both' }
      );
    }

    if (navActionsRef.current) {
      navActionsRef.current.animate(
        [
          { opacity: 0, transform: 'translateY(-6px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 550, delay: 60, easing, fill: 'both' }
      );
    }

    // 0.35s: "Custom" highlighter yellow swipes left-to-right, then word lands
    if (swipe1BgRef.current) {
      swipe1BgRef.current.animate(
        [
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)' },
        ],
        { duration: 360, delay: 350, easing, fill: 'both' }
      );
    }
    if (swipe1TextRef.current) {
      swipe1TextRef.current.animate(
        [
          { opacity: 0, transform: 'scale(1.12) translateY(4px)' },
          { opacity: 1, transform: 'scale(1) translateY(0px)' },
        ],
        { duration: 300, delay: 540, easing, fill: 'both' }
      );
    }

    // 0.7s: Headline develops out of a 14px blur with a 1.04 -> 1 scale
    if (headlineRef.current) {
      headlineRef.current.animate(
        [
          { opacity: 0, filter: 'blur(14px)', transform: 'scale(1.04)' },
          { opacity: 1, filter: 'blur(0px)', transform: 'scale(1)' },
        ],
        { duration: 750, delay: 700, easing, fill: 'both' }
      );
    }

    // 1.45s: "Freshly Baked!" marked in the same way
    if (swipe2BgRef.current) {
      swipe2BgRef.current.animate(
        [
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)' },
        ],
        { duration: 380, delay: 1450, easing, fill: 'both' }
      );
    }
    if (swipe2TextRef.current) {
      swipe2TextRef.current.animate(
        [
          { opacity: 0, transform: 'scale(1.12) translateY(4px)' },
          { opacity: 1, transform: 'scale(1) translateY(0px)' },
        ],
        { duration: 300, delay: 1650, easing, fill: 'both' }
      );
    }

    // 1.85s: Subline settles out of a soft blur
    if (sublineRef.current) {
      sublineRef.current.animate(
        [
          { opacity: 0, filter: 'blur(8px)', transform: 'translateY(8px)' },
          { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' },
        ],
        { duration: 650, delay: 1850, easing, fill: 'both' }
      );
    }
  }, []);

  return (
    <section id="home" className="sky-hero-viewport">
      {/* =========================================================
          DESKTOP PINNED NAVIGATION (> 820px)
          Logo at (118, 22), Links at y=44 (35.5 apart),
          Circle btn 283 from right, Pill 168x44 at 107 from right
          ========================================================= */}
      <header className="sky-pinned-nav hidden min-[821px]:block">
        {/* White Six-Petal Flower Logo at (118, 22), 44x44 */}
        <a
          ref={navLogoRef}
          href="#home"
          aria-label="Cake Studio Home"
          className="sky-nav-logo"
        >
          <svg
            viewBox="0 0 44 44"
            className="w-full h-full drop-shadow-[0_2px_10px_rgba(17,73,122,0.22)]"
            fill="currentColor"
          >
            <g transform="translate(22,22)">
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-11.5"
                  rx="6.2"
                  ry="9.5"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="4.2" fill="#f6f03b" />
            </g>
          </svg>
        </a>

        {/* Centred Nav Links at y = 44, 35.5px apart */}
        <nav aria-label="Primary Navigation" className="sky-nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="sky-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Nav Buttons */}
        <div ref={navActionsRef}>
          {/* 50px Translucent White Circle Button, 283 from right */}
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cake Studio on Instagram"
            title="Visit @cake_studio_vvn on Instagram"
            className="sky-nav-circle-btn"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[42%] h-[42%]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* 168x44 White Pill at 107 from right */}
          <button
            type="button"
            onClick={onCreateClick}
            className="sky-nav-pill"
          >
            Begin Your Cake
          </button>
        </div>
      </header>

      {/* =========================================================
          PHONE / MOBILE TOP FLOW (<= 820px)
          Compact nav (logo, pill, round menu button), then copy in flow
          ========================================================= */}
      <div className="w-full min-[821px]:hidden relative z-30 px-5 pt-4 pb-2 flex flex-col items-center text-center">
        <div className="w-full flex items-center justify-between">
          <a
            href="#home"
            aria-label="Cake Studio Home"
            className="w-10 h-10 text-white inline-flex items-center justify-center"
          >
            <svg viewBox="0 0 44 44" className="w-full h-full" fill="currentColor">
              <g transform="translate(22,22)">
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="0"
                    cy="-11.5"
                    rx="6.2"
                    ry="9.5"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="4.2" fill="#f6f03b" />
              </g>
            </svg>
          </a>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onCreateClick}
              className="px-4 h-10 rounded-full bg-white text-[#161c08] text-xs font-semibold tracking-tight shadow-md whitespace-nowrap cursor-pointer"
            >
              Begin Your Cake
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="w-10 h-10 rounded-full bg-white/25 border border-white/40 text-white inline-flex items-center justify-center backdrop-blur-md cursor-pointer"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="w-full mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-[#161c08] shadow-xl flex flex-col gap-2 text-sm font-semibold">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#161c08]/10 last:border-none"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Copy in Flow */}
        <div className="mt-6 flex flex-col items-center">
          <div className="highlighter-swipe px-4 py-1 text-[26px]">
            <span>Cake Studio</span>
          </div>
          <h1
            className="mt-1 font-editorial text-[44px] sm:text-[56px] text-white leading-[1.03]"
            style={{
              WebkitTextStroke: '0.8px #ffffff',
              textShadow: '0 4px 18px rgba(25,92,152,0.25)',
            }}
          >
            Made to Be Remembered
          </h1>
          <div className="highlighter-swipe mt-1 px-4 py-1 text-[24px]">
            <span>With Love!</span>
          </div>
          <p className="mt-3 text-white text-sm leading-relaxed max-w-[34ch] font-normal">
            Turn your sweetest ideas into cakes you love — baked fresh to order in Anand, from first sketch to masterpiece.
          </p>
        </div>
      </div>

      {/* =========================================================
          1440 x 900 SCENE FRAME
          Contains the plate, 111.11% looping video, headline block,
          4 fanned cards on the island, rough highlighter labels +
          hand-drawn yellow arrows, and island CTA block.
          ========================================================= */}
      <div className="sky-scene-frame">
        <div className="sky-scene-inner-shift relative w-full h-full">
          {/* 1440x900 Static Plate Image */}
          <img
            src={PLATE_IMAGE_URL}
            alt="Floating grassy island with waterfall in a clear blue sky above clouds"
            referrerPolicy="no-referrer"
            className="sky-plate-img"
          />

          {/* 1280x720 Looping Video overlaid at 111.11% width, left -5.556% */}
          <video
            src={PLATE_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="sky-plate-video"
          />

          {/* =====================================================
              HEADLINE BLOCK (Desktop > 820px, in 1440x900 coordinates)
              - Highlighter "Custom" / "Cake Studio": 131x44 at (657, 117), 40px
              - Headline "Made to Be Remembered": 103px, centred, top 140
              - Highlighter "With Love!": 176x45 at (638, 241), 39px
              - Subline: 17.2px / 24.5px, centred, top 312, two lines
              ===================================================== */}
          <div className="hidden min-[821px]:block">
            {/* Highlighter 1: 131x44 at (657, 117), 40u */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(657 * var(--u))',
                top: 'calc(117 * var(--u))',
                width: 'calc(131 * var(--u))',
                height: 'calc(44 * var(--u))',
                zIndex: 15,
              }}
              className="flex items-center justify-center"
            >
              <span
                ref={swipe1BgRef}
                aria-hidden="true"
                className="absolute inset-[-8%_-10%] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 72' preserveAspectRatio='none'%3E%3Cpath fill='%23f6f03b' d='M11.5,11.2 C4.2,13.5 1.8,19.4 4.9,24.8 C2.1,29.1 0.8,35.6 5.4,40.2 C2.2,46.5 4.8,53.9 10.6,57.4 C8.4,61.8 13.9,66.3 21.8,65.7 C68.4,68.9 135.2,67.2 198.6,65.9 C219.4,65.4 236.8,66.8 247.9,63.2 C254.6,60.9 258.1,54.8 254.2,49.4 C258.8,44.2 259.4,36.5 253.8,31.9 C257.9,26.1 256.2,18.7 249.8,14.8 C252.4,10.2 246.5,6.4 238.2,6.8 C184.5,4.1 104.8,5.2 38.4,7.9 C26.2,8.4 16.8,9.5 11.5,11.2 Z'/%3E%3C/svg%3E")`,
                  backgroundSize: '100% 100%',
                  filter: 'drop-shadow(0 0 calc(1.5 * var(--u)) rgba(246, 240, 59, 0.75))',
                }}
              />
              <span
                ref={swipe1TextRef}
                style={{
                  fontSize: 'calc(38 * var(--u))',
                  letterSpacing: '-0.02em',
                }}
                className="relative z-10 font-bold text-[#161c08] leading-none"
              >
                Custom
              </span>
            </div>

            {/* Headline: 103u DM Serif Display 400, white with 1.1u stroke, centred, top 140 */}
            <h1
              ref={headlineRef}
              style={{
                position: 'absolute',
                top: 'calc(140 * var(--u))',
                left: '0',
                right: '0',
                fontSize: 'calc(103 * var(--u))',
                zIndex: 14,
              }}
              className="sky-headline-serif text-center whitespace-nowrap pointer-events-none"
            >
              Cake Studio Art
            </h1>

            {/* Highlighter 2: 176x45 at (638, 241), 39u */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(638 * var(--u))',
                top: 'calc(241 * var(--u))',
                width: 'calc(176 * var(--u))',
                height: 'calc(45 * var(--u))',
                zIndex: 15,
              }}
              className="flex items-center justify-center"
            >
              <span
                ref={swipe2BgRef}
                aria-hidden="true"
                className="absolute inset-[-8%_-10%] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 72' preserveAspectRatio='none'%3E%3Cpath fill='%23f6f03b' d='M11.5,11.2 C4.2,13.5 1.8,19.4 4.9,24.8 C2.1,29.1 0.8,35.6 5.4,40.2 C2.2,46.5 4.8,53.9 10.6,57.4 C8.4,61.8 13.9,66.3 21.8,65.7 C68.4,68.9 135.2,67.2 198.6,65.9 C219.4,65.4 236.8,66.8 247.9,63.2 C254.6,60.9 258.1,54.8 254.2,49.4 C258.8,44.2 259.4,36.5 253.8,31.9 C257.9,26.1 256.2,18.7 249.8,14.8 C252.4,10.2 246.5,6.4 238.2,6.8 C184.5,4.1 104.8,5.2 38.4,7.9 C26.2,8.4 16.8,9.5 11.5,11.2 Z'/%3E%3C/svg%3E")`,
                  backgroundSize: '100% 100%',
                  filter: 'drop-shadow(0 0 calc(1.5 * var(--u)) rgba(246, 240, 59, 0.75))',
                }}
              />
              <span
                ref={swipe2TextRef}
                style={{
                  fontSize: 'calc(36 * var(--u))',
                  letterSpacing: '-0.02em',
                }}
                className="relative z-10 font-bold text-[#161c08] leading-none"
              >
                With Love!
              </span>
            </div>

            {/* Subline: 17.2px / 24.5px, centred, top 312, two lines */}
            <p
              ref={sublineRef}
              style={{
                position: 'absolute',
                top: 'calc(312 * var(--u))',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: 'calc(17.2 * var(--u))',
                lineHeight: 'calc(24.5 * var(--u))',
                zIndex: 15,
              }}
              className="text-white text-center font-normal whitespace-nowrap drop-shadow-[0_1px_10px_rgba(18,75,128,0.28)]"
            >
              Turn your sweetest ideas into cakes you love — handcrafted
              <br />
              in Anand, from first sketch to unforgettable centrepiece.
            </p>
          </div>

          {/* =====================================================
              FOUR FANNED CARDS ON THE FLOATING ISLAND
              132x162, 5px white border, radius 12, soft shadow:
              - (472, 419) at -12 deg
              - (601, 407) at -4 deg
              - (711, 409) at 4 deg
              - (827, 419) at 12 deg
              Hover: lift 18u, straighten (0deg) and grow to 1.07
              ===================================================== */}
          {HERO_FAN_CARDS.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => onSelectHeroCake(card.id)}
              aria-label={`View ${card.title} in full screen`}
              className="sky-fan-card"
              style={
                {
                  left: `calc(${card.left} * var(--u))`,
                  top: `calc(${card.top} * var(--u))`,
                  zIndex: card.zIndex,
                  '--card-rot': `${card.rotate}deg`,
                } as React.CSSProperties
              }
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
              />
            </button>
          ))}

          {/* =====================================================
              LABELS AND HAND-DRAWN YELLOW ARROWS
              1. Left Highlighter "Made from Scratch!" at (395, 424), rotated -11 deg,
                 with a hand-drawn yellow arrow curving into the first card.
              2. Right Highlighter "Real Studio Creations" at (927, 518), rotated -6 deg,
                 with one arrow curling up to the 4th card and a double arrow curling down.
              ===================================================== */}
          {/* Left Label at (395, 424) rotated -11 deg */}
          <div
            style={{
              position: 'absolute',
              left: 'calc(340 * var(--u))',
              top: 'calc(424 * var(--u))',
              transform: 'rotate(-11deg)',
              zIndex: 20,
            }}
            className="pointer-events-none"
          >
            <div
              style={{
                fontSize: 'calc(14.5 * var(--u))',
                padding: 'calc(5 * var(--u)) calc(12 * var(--u))',
              }}
              className="highlighter-swipe"
            >
              <span>100% Custom Made!</span>
            </div>
          </div>

          {/* Left Hand-Drawn Yellow Arrow curving into the first card */}
          <svg
            viewBox="0 0 110 90"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'calc(382 * var(--u))',
              top: 'calc(452 * var(--u))',
              width: 'calc(92 * var(--u))',
              height: 'calc(76 * var(--u))',
              zIndex: 20,
              filter: 'drop-shadow(0 2px 6px rgba(16, 48, 82, 0.25))',
            }}
            className="pointer-events-none"
            fill="none"
          >
            <path
              d="M 18 10 C 12 44, 38 68, 78 58"
              stroke="#f6f03b"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            <path
              d="M 66 47 L 82 57 L 69 69"
              stroke="#f6f03b"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Right Label at (927, 518) rotated -6 deg */}
          <div
            style={{
              position: 'absolute',
              left: 'calc(968 * var(--u))',
              top: 'calc(518 * var(--u))',
              transform: 'rotate(-6deg)',
              zIndex: 20,
            }}
            className="pointer-events-none"
          >
            <div
              style={{
                fontSize: 'calc(14.5 * var(--u))',
                padding: 'calc(5 * var(--u)) calc(12 * var(--u))',
              }}
              className="highlighter-swipe"
            >
              <span>Real Cake Results</span>
            </div>
          </div>

          {/* Right Hand-Drawn Yellow Arrows: one curling up to 4th card, double arrow curling down */}
          <svg
            viewBox="0 0 140 150"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'calc(942 * var(--u))',
              top: 'calc(448 * var(--u))',
              width: 'calc(125 * var(--u))',
              height: 'calc(135 * var(--u))',
              zIndex: 20,
              filter: 'drop-shadow(0 2px 6px rgba(16, 48, 82, 0.25))',
            }}
            className="pointer-events-none"
            fill="none"
          >
            {/* Upper arrow curling up-left toward the 4th card */}
            <path
              d="M 68 64 C 76 34, 52 16, 22 22"
              stroke="#f6f03b"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 33 12 L 18 22 L 32 32"
              stroke="#f6f03b"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Lower double arrow curling down */}
            <path
              d="M 58 98 C 46 116, 52 134, 74 140"
              stroke="#f6f03b"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path
              d="M 72 95 C 62 112, 68 128, 86 134"
              stroke="#f6f03b"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M 65 132 L 78 142 L 64 147"
              stroke="#f6f03b"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* =====================================================
              CALL TO ACTION ON THE ISLAND
              - Highlighter "Fresh Baked": 96x25 at (672, 584)
              - White pill "Create Your Cake": 195x44 at (622, 624), 17px Poppins 600
              - Note "Made with love in Anand, Gujarat.": 15.6px, centred at top 682
              ===================================================== */}
          {/* Highlighter at (672, 584), 96x25 */}
          <div
            style={{
              position: 'absolute',
              left: 'calc(672 * var(--u))',
              top: 'calc(584 * var(--u))',
              minWidth: 'calc(96 * var(--u))',
              height: 'calc(25 * var(--u))',
              fontSize: 'calc(13.5 * var(--u))',
              padding: '0 calc(10 * var(--u))',
              zIndex: 20,
            }}
            className="highlighter-swipe"
          >
            <span>Fresh Baked</span>
          </div>

          {/* White Pill at (622, 624), 195x44, 17px Poppins 600 */}
          <button
            type="button"
            onClick={onCreateClick}
            style={{
              position: 'absolute',
              left: 'calc(622 * var(--u))',
              top: 'calc(624 * var(--u))',
              width: 'calc(195 * var(--u))',
              height: 'calc(44 * var(--u))',
              fontSize: 'calc(17 * var(--u))',
              zIndex: 20,
            }}
            className="rounded-full bg-white text-[#161c08] font-semibold tracking-[-0.015em] flex items-center justify-center shadow-[0_10px_28px_rgba(16,48,82,0.28)] hover:scale-[1.04] active:scale-[0.99] transition-transform cursor-pointer whitespace-nowrap"
          >
            Create Your Cake
          </button>

          {/* Note at top 682, 15.6px, centred */}
          <p
            style={{
              position: 'absolute',
              top: 'calc(682 * var(--u))',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 'calc(15.6 * var(--u))',
              zIndex: 20,
            }}
            className="text-white font-medium text-center whitespace-nowrap drop-shadow-[0_2px_8px_rgba(12,38,66,0.45)]"
          >
            Every celebration deserves a masterpiece.
          </p>
        </div>
      </div>
    </section>
  );
};
