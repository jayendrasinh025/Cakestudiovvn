import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CakeItem, PORTFOLIO_CAKES } from '../data/cakes';

interface CreationsGalleryProps {
  selectedCakeId: string | null;
  onSelectCake: (cakeId: string | null) => void;
  onEnquireWithStyle: (style: CakeItem['designStyle'], cakeTitle: string) => void;
  activeCategoryFilter: string;
  onCategoryFilterChange: (category: string) => void;
}

const FILTER_TABS = [
  'All Creations',
  'Floral Cakes',
  'Birthday Cakes',
  'Designer Cakes',
  'Anniversary Cakes',
  'Theme Cakes',
  'Custom Creations',
];

export const CreationsGallery: React.FC<CreationsGalleryProps> = ({
  selectedCakeId,
  onSelectCake,
  onEnquireWithStyle,
  activeCategoryFilter,
  onCategoryFilterChange,
}) => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const filteredCakes =
    activeCategoryFilter === 'All Creations'
      ? PORTFOLIO_CAKES
      : PORTFOLIO_CAKES.filter((cake) => cake.category === activeCategoryFilter);

  const activeLightboxIndex = selectedCakeId
    ? PORTFOLIO_CAKES.findIndex((c) => c.id === selectedCakeId)
    : -1;

  const activeLightboxCake =
    activeLightboxIndex >= 0 ? PORTFOLIO_CAKES[activeLightboxIndex] : null;

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex < 0) return;
    const prevIndex =
      (activeLightboxIndex - 1 + PORTFOLIO_CAKES.length) % PORTFOLIO_CAKES.length;
    onSelectCake(PORTFOLIO_CAKES[prevIndex].id);
  }, [activeLightboxIndex, onSelectCake]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex < 0) return;
    const nextIndex = (activeLightboxIndex + 1) % PORTFOLIO_CAKES.length;
    onSelectCake(PORTFOLIO_CAKES[nextIndex].id);
  }, [activeLightboxIndex, onSelectCake]);

  useEffect(() => {
    if (!activeLightboxCake) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onSelectCake(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeLightboxCake, handlePrev, handleNext, onSelectCake]);

  return (
    <section
      id="creations"
      className="py-24 lg:py-32 bg-[#f5faff] relative"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with Rough Yellow Highlighter Swipe */}
        <div className="reveal-item flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <div className="highlighter-swipe px-3.5 py-1.5 text-sm mb-4">
              <span>Our Cake Showcase</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight text-[#161c08]">
              Sweet Creations.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#161c08]/75 max-w-[44ch] leading-relaxed">
            Every design tells a different story. Discover some of the moments we&apos;ve made sweeter in Anand.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="reveal-item mb-12 lg:mb-16 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter cake creations by category"
            className="inline-flex items-center gap-1.5 p-1.5 bg-white rounded-full shadow-[0_6px_24px_rgba(49,149,224,0.12)] border border-[#3195e0]/15"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategoryFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryFilterChange(tab)}
                  className={`px-4 py-2 text-xs font-semibold tracking-tight rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#f6f03b] text-[#161c08] shadow-xs'
                      : 'text-[#161c08]/70 hover:text-[#161c08] hover:bg-[#f5faff]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Masonry Composition with Framed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-x-8 lg:gap-x-12 items-start">
          {filteredCakes.map((cake, idx) => {
            const spanClass =
              activeCategoryFilter === 'All Creations'
                ? cake.masonrySpan
                : 'md:col-span-6 lg:col-span-6';

            const indexNumber = String(idx + 1).padStart(2, '0');

            return (
              <article
                key={cake.id}
                className={`${spanClass} group flex flex-col`}
              >
                {/* Framed Card with 6px White Border & Soft Sky Shadow */}
                <div
                  onClick={() => onSelectCake(cake.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectCake(cake.id);
                    }
                  }}
                  aria-label={`Inspect ${cake.title} in full screen`}
                  className={`relative overflow-hidden bg-white ${cake.aspectClass} w-full cursor-pointer border-[6px] border-white rounded-[18px] shadow-[0_14px_34px_rgba(16,48,82,0.14)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_22px_44px_rgba(16,48,82,0.22)]`}
                >
                  {!imageErrorMap[cake.id] ? (
                    <img
                      src={cake.image}
                      alt={`${cake.title} — ${cake.description}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() =>
                        setImageErrorMap((prev) => ({ ...prev, [cake.id]: true }))
                      }
                      style={{ objectPosition: cake.objectPosition }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#f5faff]">
                      <Sparkles className="w-8 h-8 text-[#3195e0] mb-3" />
                      <span className="font-editorial text-lg text-[#161c08]">
                        {cake.title}
                      </span>
                    </div>
                  )}

                  {/* Subtle corner affordance on hover */}
                  <div className="
                    absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#161c08]
                    flex items-center justify-center opacity-0 translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 shadow-md
                  ">
                    <ArrowUpRight className="w-4 h-4 text-[#161c08]" />
                  </div>
                </div>

                {/* Editorial Caption Below Image */}
                <div className="pt-4 px-1 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-4 text-xs text-[#161c08]/60">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#3195e0] tabular-nums">
                        {indexNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-[#161c08]/80">
                        {cake.category}
                      </span>
                    </div>
                    <span className="hidden sm:inline text-[11px] text-[#161c08]/55">
                      {cake.subtitle}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#161c08] group-hover:text-[#3195e0] transition-colors">
                      <button
                        type="button"
                        onClick={() => onSelectCake(cake.id)}
                        className="text-left cursor-pointer"
                      >
                        {cake.title}
                      </button>
                    </h3>

                    <button
                      type="button"
                      onClick={() => onEnquireWithStyle(cake.designStyle, cake.title)}
                      className="text-xs font-bold tracking-tight text-[#161c08] hover:text-[#3195e0] underline decoration-[#f6f03b] decoration-2 underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Request Similar
                    </button>
                  </div>

                  <p className="text-xs text-[#161c08]/60 pt-0.5">
                    {cake.details}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeLightboxCake && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxCake.title}
          className="fixed inset-0 z-50 bg-[#0d2238]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-10"
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between gap-4 text-white z-10">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <span className="font-bold text-[#f6f03b] tabular-nums">
                {String(activeLightboxIndex + 1).padStart(2, '0')} /{' '}
                {String(PORTFOLIO_CAKES.length).padStart(2, '0')}
              </span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-white/85">{activeLightboxCake.category}</span>
            </div>

            <button
              type="button"
              onClick={() => onSelectCake(null)}
              aria-label="Close full-screen viewer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-tight bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center Image & Navigation Controls */}
          <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous cake photograph"
              className="absolute left-0 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#f6f03b] text-white hover:text-[#161c08] border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-h-[68vh] max-w-4xl w-full h-full flex items-center justify-center px-12 sm:px-16">
              <img
                src={activeLightboxCake.image}
                alt={activeLightboxCake.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl border-4 border-white shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next cake photograph"
              className="absolute right-0 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#f6f03b] text-white hover:text-[#161c08] border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Bottom Caption & Action Bar */}
          <div className="max-w-5xl w-full mx-auto pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl text-white">
                {activeLightboxCake.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-2xl">
                {activeLightboxCake.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                const style = activeLightboxCake.designStyle;
                const title = activeLightboxCake.title;
                onSelectCake(null);
                onEnquireWithStyle(style, title);
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold tracking-tight bg-[#f6f03b] text-[#161c08] hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Enquire About This Cake
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
