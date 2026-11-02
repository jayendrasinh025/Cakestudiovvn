import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAKE_CATEGORIES, CakeItem } from '../data/cakes';

interface ExploreCategoriesProps {
  onSelectCategoryForEnquiry: (
    designPreset: CakeItem['designStyle'],
    occasionPreset: string
  ) => void;
  onFilterGalleryByCategory: (categoryName: string) => void;
}

export const ExploreCategories: React.FC<ExploreCategoriesProps> = ({
  onSelectCategoryForEnquiry,
  onFilterGalleryByCategory,
}) => {
  const [birthday, anniversary, floral, designer, theme, custom] = CAKE_CATEGORIES;

  return (
    <section
      id="categories"
      className="py-24 lg:py-32 bg-white border-t border-[#3195e0]/12 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Introduction */}
        <div className="reveal-item max-w-3xl mb-16 lg:mb-24">
          <div className="highlighter-swipe px-3.5 py-1.5 text-sm mb-4">
            <span>Explore Our Cakes</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight text-[#161c08] mb-5">
            Every Celebration Deserves a Masterpiece.
          </h2>
          <p className="text-base sm:text-lg text-[#161c08]/75 leading-relaxed">
            From intimate candlelit anniversaries to grand first-birthday centrepieces, explore the signature styles we handcraft in our Anand studio.
          </p>
        </div>

        {/* Layout Group 1: Asymmetrical 2-Column Editorial Spread (01 Birthday & 02 Anniversary) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20 lg:mb-28">
          {/* 01. Birthday Cakes — 7 Columns */}
          <div className="reveal-item lg:col-span-7 bg-[#f5faff] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#3195e0]/15">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="sm:col-span-6 overflow-hidden aspect-[4/5] bg-white border-[5px] border-white rounded-2xl shadow-md -rotate-1">
                <img
                  src={birthday.image}
                  alt={birthday.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  style={{ objectPosition: birthday.objectPosition }}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="sm:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#3195e0] tracking-tight block mb-2">
                    {birthday.number}. {birthday.tagline}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#161c08] mb-3">
                    {birthday.name}
                  </h3>
                  <p className="text-sm text-[#161c08]/75 leading-relaxed mb-5">
                    {birthday.description}
                  </p>
                  <div className="text-xs text-[#161c08]/65 space-y-1.5 mb-7 pt-4 border-t border-[#161c08]/10">
                    {birthday.highlights.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onFilterGalleryByCategory(birthday.name)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-tight bg-[#161c08] text-white hover:bg-[#3195e0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{birthday.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectCategoryForEnquiry(birthday.designPreset, birthday.occasionPreset)
                    }
                    className="text-xs font-bold text-[#161c08] hover:text-[#3195e0] underline decoration-[#f6f03b] decoration-2 underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 02. Anniversary Cakes — 5 Columns Offset Downward */}
          <div className="reveal-item lg:col-span-5 lg:mt-12 bg-[#f5faff] rounded-3xl p-6 sm:p-8 border border-[#3195e0]/15 flex flex-col justify-between">
            <div className="overflow-hidden aspect-[4/4] mb-6 bg-white border-[5px] border-white rounded-2xl shadow-md rotate-1">
              <img
                src={anniversary.image}
                alt={anniversary.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                style={{ objectPosition: anniversary.objectPosition }}
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-[#3195e0] tracking-tight block mb-1.5">
                {anniversary.number}. {anniversary.tagline}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#161c08] mb-2.5">
                {anniversary.name}
              </h3>
              <p className="text-sm text-[#161c08]/75 leading-relaxed mb-5">
                {anniversary.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#161c08]/10">
                <span className="text-xs text-[#161c08]/60">
                  {anniversary.highlights.join(' · ')}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onSelectCategoryForEnquiry(anniversary.designPreset, anniversary.occasionPreset)
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-tight bg-[#161c08] text-white hover:bg-[#3195e0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{anniversary.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onFilterGalleryByCategory(anniversary.name)}
                  className="text-xs font-bold text-[#161c08] hover:text-[#3195e0] underline decoration-[#f6f03b] decoration-2 underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View in Gallery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Group 2: Full-Width Editorial Feature Spread (03 Floral Cakes) */}
        <div className="reveal-item mb-20 lg:mb-28 bg-gradient-to-br from-[#3195e0] to-[#49a9f3] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="highlighter-swipe px-3 py-1 text-xs mb-4">
                <span>{floral.number} · Signature Botanicals</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white mb-4">
                {floral.name}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                {floral.description}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/85 mb-8">
                {floral.highlights.map((h, i) => (
                  <React.Fragment key={h}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span>{h}</span>
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onFilterGalleryByCategory(floral.name)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-tight bg-white text-[#161c08] hover:bg-[#f6f03b] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-md"
                >
                  <span>{floral.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onSelectCategoryForEnquiry(floral.designPreset, floral.occasionPreset)
                  }
                  className="px-6 py-3 rounded-full text-xs font-bold tracking-tight border border-white/50 text-white hover:bg-white/15 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Commission a Floral Cake
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-12 gap-4 sm:gap-6 items-center">
              <div className="col-span-7 overflow-hidden aspect-[4/5] bg-white border-[5px] border-white rounded-2xl shadow-xl -rotate-2">
                <img
                  src={floral.image}
                  alt="Ivory vintage Lambeth cake with pink stargazer lilies"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="col-span-5 overflow-hidden aspect-[3/4] bg-white border-[5px] border-white rounded-2xl shadow-xl rotate-3 mt-8 sm:mt-12">
                <img
                  src={floral.secondaryImage}
                  alt="Blush pink floral birthday cake with stargazer lily and pearls"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Layout Group 3: Dual Editorial Showcase (04 Designer Cakes & 05 Theme Cakes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch mb-20 lg:mb-28">
          {/* 04. Designer Cakes */}
          <div className="reveal-item lg:col-span-5 bg-[#161c08] text-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="overflow-hidden aspect-[4/5] mb-7 bg-white border-[5px] border-white rounded-2xl shadow-lg">
                <img
                  src={designer.image}
                  alt={designer.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  style={{ objectPosition: designer.objectPosition }}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="highlighter-swipe px-3 py-1 text-xs mb-3">
                <span>{designer.number} · Couture Tiers</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-3">
                {designer.name}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {designer.description}
              </p>
            </div>

            <div className="pt-5 border-t border-white/15 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() =>
                  onSelectCategoryForEnquiry(designer.designPreset, designer.occasionPreset)
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-tight bg-[#f6f03b] text-[#161c08] hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{designer.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => onFilterGalleryByCategory(designer.name)}
                className="text-xs font-bold text-[#f6f03b] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Designs
              </button>
            </div>
          </div>

          {/* 05. Theme Cakes */}
          <div className="reveal-item lg:col-span-7 bg-[#f5faff] rounded-3xl border border-[#3195e0]/15 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-7">
              <div className="overflow-hidden aspect-[4/5] bg-white border-[5px] border-white rounded-2xl shadow-md -rotate-1">
                <img
                  src={theme.image}
                  alt="Mercedes and fitness theme custom cake"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden aspect-[4/5] bg-white border-[5px] border-white rounded-2xl shadow-md rotate-2">
                <img
                  src={theme.secondaryImage}
                  alt="Range Rover and gold sphere theme cake"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-[#3195e0] tracking-tight block mb-2">
                {theme.number}. {theme.tagline}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#161c08] mb-3">
                {theme.name}
              </h3>
              <p className="text-sm text-[#161c08]/75 leading-relaxed mb-6">
                {theme.description}
              </p>

              <div className="pt-5 border-t border-[#161c08]/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onFilterGalleryByCategory(theme.name)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-tight bg-[#161c08] text-white hover:bg-[#3195e0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{theme.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectCategoryForEnquiry(theme.designPreset, theme.occasionPreset)
                    }
                    className="text-xs font-bold text-[#161c08] hover:text-[#3195e0] underline decoration-[#f6f03b] decoration-2 underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
                <span className="text-xs text-[#161c08]/55">
                  {theme.highlights.join(' · ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Group 4: Bespoke Storytelling Showcase (06 Custom Creations) */}
        <div className="reveal-item bg-[#f5faff] rounded-3xl border border-[#3195e0]/15 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 overflow-hidden aspect-[3/4] bg-white border-[5px] border-white rounded-2xl shadow-md -rotate-2">
                <img
                  src={custom.image}
                  alt="Botanical swing custom cake with handcrafted figurine and fresh roses"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="col-span-5 overflow-hidden aspect-[3/4] bg-white border-[5px] border-white rounded-2xl shadow-md rotate-2">
                <img
                  src={custom.secondaryImage}
                  alt="London farewell custom story cake from India to UK"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="highlighter-swipe px-3 py-1 text-xs mb-3">
                <span>{custom.number} · Bespoke Storytelling</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#161c08] mb-4">
                {custom.name}
              </h3>
              <p className="text-sm sm:text-base text-[#161c08]/75 leading-relaxed mb-6">
                {custom.description}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#161c08]/65 mb-8">
                {custom.highlights.map((h, i) => (
                  <React.Fragment key={h}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span>{h}</span>
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onSelectCategoryForEnquiry(custom.designPreset, custom.occasionPreset)
                  }
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-tight bg-[#161c08] text-white hover:bg-[#3195e0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{custom.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onFilterGalleryByCategory(custom.name)}
                  className="text-xs font-bold text-[#161c08] hover:text-[#3195e0] underline decoration-[#f6f03b] decoration-2 underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View Custom Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
