import React from 'react';
import { BRAND_INFO } from '../data/cakes';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      className="py-24 lg:py-32 bg-gradient-to-b from-[#3195e0] to-[#49a9f3] text-white relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tilted Framed Cake Cards */}
          <div className="reveal-item lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
              <div className="col-span-7 overflow-hidden aspect-[3/4] bg-white border-[6px] border-white rounded-2xl shadow-2xl -rotate-3">
                <img
                  src="/assets/aistudio/cake_studio_vvn_14050811_122044617_1f3e360f.jpg"
                  alt="Handcrafted botanical hoop swing cake with fresh roses by Cake Studio"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_42%]"
                />
              </div>

              <div className="col-span-5 space-y-5">
                <div className="overflow-hidden aspect-[4/5] bg-white border-[6px] border-white rounded-2xl shadow-2xl rotate-3">
                  <img
                    src="/assets/aistudio/cake_studio_vvn_14050811_122253407_4b48b704.jpg"
                    alt="Soft pink vintage Lambeth cake with stargazer lily and pearl dragees"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30">
                  <p className="font-editorial text-base text-white leading-snug">
                    &ldquo;{BRAND_INFO.bioQuote}&rdquo;
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-[#f6f03b]">
                    Anand, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Story Prose */}
          <div className="reveal-item lg:col-span-6 lg:pl-6">
            <div className="highlighter-swipe px-3.5 py-1.5 text-sm mb-5">
              <span>Our Story</span>
            </div>

            <h2
              className="font-editorial text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.06] tracking-tight text-white mb-7"
              style={{ WebkitTextStroke: '0.6px #ffffff' }}
            >
              More Than Just a Cake.
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-white/95 leading-relaxed mb-6">
              At Cake Studio, we believe the smallest details make the sweetest memories. From thoughtful designs to beautiful finishing touches, every creation is made to bring something special to your celebrations.
            </p>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-10 max-w-[54ch]">
              {BRAND_INFO.supportingStatement}
            </p>

            {/* Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/25">
              <div>
                <span className="text-xs font-bold text-[#f6f03b] block mb-1">
                  01 · Custom Designed
                </span>
                <p className="text-xs text-white/85 leading-relaxed">
                  Individually imagined around your celebration, theme, and personal story.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#f6f03b] block mb-1">
                  02 · Freshly Baked
                </span>
                <p className="text-xs text-white/85 leading-relaxed">
                  Prepared fresh to order in our Anand kitchen with care and precision.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#f6f03b] block mb-1">
                  03 · Made With Love
                </span>
                <p className="text-xs text-white/85 leading-relaxed">
                  Hand-piped vintage ruffles, delicate florals, and bespoke finishing details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
