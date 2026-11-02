import React from 'react';
import { MessageCircle, Instagram, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/cakes';

export const FinalCTAAndContact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Section 8: The Final Call To Action */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="reveal-item bg-gradient-to-br from-[#3195e0] to-[#49a9f3] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="highlighter-swipe px-3.5 py-1.5 text-sm mb-4">
                  <span>Zero Stress · Custom Baked</span>
                </div>
                <h2
                  className="font-editorial text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight text-white mb-5 max-w-xl"
                  style={{ WebkitTextStroke: '0.6px #ffffff' }}
                >
                  Let&apos;s Make Your Next Celebration Sweeter.
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg mb-9">
                  Have a celebration coming up? Let&apos;s create something beautiful together.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold tracking-tight bg-white text-[#161c08] hover:bg-[#f6f03b] transition-colors duration-200 whitespace-nowrap shrink-0 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold tracking-tight bg-white/20 border border-white/45 text-white hover:bg-white/30 transition-colors duration-200 whitespace-nowrap shrink-0"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Explore Instagram</span>
                  </a>
                </div>
              </div>

              {/* Overlapping Tilted Framed Cake Cards */}
              <div className="lg:col-span-5 relative">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-7 overflow-hidden aspect-[4/5] bg-white border-[6px] border-white rounded-2xl shadow-2xl -rotate-3">
                    <img
                      src="/assets/aistudio/cake_studio_vvn_14050811_122437451_61575a23.jpg"
                      alt="Sculptural white vintage Lambeth cake with pink stargazer lilies and gold candle"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-5 overflow-hidden aspect-[3/4] bg-white border-[6px] border-white rounded-2xl shadow-2xl rotate-6">
                    <img
                      src="/assets/aistudio/cake_studio_vvn_14050811_121750122_0c0bd04d.jpg"
                      alt="Blush ribbon and fresh rose birthday cake"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Contact Section & Footer */}
      <footer
        id="contact"
        className="bg-[#f5faff] border-t border-[#3195e0]/15 pt-20 pb-12 text-[#161c08]"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="reveal-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#161c08]/10">
            {/* Brand Identity Column */}
            <div className="lg:col-span-5">
              <a
                href="#home"
                className="inline-flex items-center gap-3 font-editorial text-3xl text-[#161c08] mb-4"
              >
                <span className="w-9 h-9 rounded-full bg-[#3195e0] text-white inline-flex items-center justify-center">
                  <svg viewBox="0 0 44 44" className="w-6 h-6" fill="currentColor">
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
                </span>
                <span>{BRAND_INFO.name}</span>
              </a>
              <div className="mb-3">
                <span className="highlighter-swipe px-3 py-1 text-xs">
                  <span>{BRAND_INFO.bioQuote}</span>
                </span>
              </div>
              <p className="text-xs text-[#161c08]/65 mb-5">
                {BRAND_INFO.bioTags}
              </p>
              <p className="text-sm text-[#161c08]/75 max-w-sm leading-relaxed">
                {BRAND_INFO.mainStatement} Handcrafted custom cakes in {BRAND_INFO.location}.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-xs font-bold tracking-tight text-[#3195e0]">
                Contact &amp; Orders
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#3195e0] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs text-[#161c08]/55">Phone / WhatsApp</span>
                    <a
                      href={`tel:+${BRAND_INFO.phoneRaw}`}
                      className="font-semibold text-[#161c08] hover:text-[#3195e0] transition-colors"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#3195e0] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs text-[#161c08]/55">WhatsApp Direct</span>
                    <a
                      href={BRAND_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#161c08] hover:text-[#3195e0] transition-colors"
                    >
                      <span>wa.me/919213656032</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-[#3195e0] mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs text-[#161c08]/55">Instagram Portfolio</span>
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#161c08] hover:text-[#3195e0] transition-colors"
                    >
                      <span>{BRAND_INFO.instagramHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Location & Navigation */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-bold tracking-tight text-[#3195e0]">
                Studio Location
              </h3>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#3195e0] mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-[#161c08]">{BRAND_INFO.name}</p>
                  <p className="text-[#161c08]/70">{BRAND_INFO.location}</p>
                  <a
                    href={BRAND_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-[#161c08] hover:text-[#3195e0] underline decoration-[#f6f03b] decoration-2 underline-offset-4"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#161c08]/10 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#161c08]/70">
                <a href="#home" className="hover:text-[#3195e0]">Home</a>
                <a href="#creations" className="hover:text-[#3195e0]">Creations</a>
                <a href="#categories" className="hover:text-[#3195e0]">Categories</a>
                <a href="#custom-cakes" className="hover:text-[#3195e0]">Custom Cake</a>
                <a href="#story" className="hover:text-[#3195e0]">Story</a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#161c08]/55">
            <p>© {currentYear} {BRAND_INFO.name} · {BRAND_INFO.location}. All rights reserved.</p>
            <p>{BRAND_INFO.bioQuote}</p>
          </div>
        </div>
      </footer>
    </>
  );
};
