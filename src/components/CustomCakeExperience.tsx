import React, { useState, useEffect } from 'react';
import { MessageCircle, Check, Copy, AlertCircle, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, CakeItem, DESIGN_STYLE_PREVIEWS } from '../data/cakes';

interface CustomCakeExperienceProps {
  preselectedStyle?: CakeItem['designStyle'] | null;
  preselectedOccasion?: string | null;
  preselectedReferenceNote?: string | null;
}

const DESIGN_STYLES: CakeItem['designStyle'][] = [
  'Floral',
  'Minimal',
  'Elegant',
  'Cartoon / Theme',
  'Luxury',
  'Custom Idea',
];

const FLAVOUR_OPTIONS = [
  'Belgian Chocolate Truffle',
  'Classic Vanilla & Berry Compote',
  'Fresh Seasonal Fruit & Cream',
  'Lotus Biscoff & Caramel',
  'Roasted Hazelnut Praline',
  'Red Velvet with Cream Cheese',
  'Rasmalai Fusion',
  'Custom Flavour (Discuss on WhatsApp)',
];

const WEIGHT_OPTIONS = [
  '0.5 kg (Intimate · 4–6 servings)',
  '1.0 kg (Classic · 8–12 servings)',
  '1.5 kg (Celebration · 14–18 servings)',
  '2.0 kg+ (Two-Tier / Grand Gathering)',
  'Not sure — help me choose',
];

const OCCASION_SUGGESTIONS = [
  'Birthday',
  'First Birthday',
  'Anniversary',
  'Bride-to-Be / Engagement',
  'Farewell / Bon Voyage',
  'Special Surprise',
];

export const CustomCakeExperience: React.FC<CustomCakeExperienceProps> = ({
  preselectedStyle,
  preselectedOccasion,
  preselectedReferenceNote,
}) => {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  const [designStyle, setDesignStyle] = useState<CakeItem['designStyle']>('Elegant');
  const [flavour, setFlavour] = useState(FLAVOUR_OPTIONS[0]);
  const [weight, setWeight] = useState(WEIGHT_OPTIONS[1]);
  const [requiredDate, setRequiredDate] = useState('');
  const [instructions, setInstructions] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [readyWhatsAppUrl, setReadyWhatsAppUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedStyle) {
      setDesignStyle(preselectedStyle);
    }
  }, [preselectedStyle]);

  useEffect(() => {
    if (preselectedOccasion) {
      setOccasion(preselectedOccasion);
    }
  }, [preselectedOccasion]);

  useEffect(() => {
    if (preselectedReferenceNote) {
      setInstructions((prev) =>
        prev.includes(preselectedReferenceNote)
          ? prev
          : `Inspired by "${preselectedReferenceNote}". ${prev}`.trim()
      );
    }
  }, [preselectedReferenceNote]);

  const activePreview = DESIGN_STYLE_PREVIEWS[designStyle];

  const buildWhatsAppMessage = () => {
    const formattedDate = requiredDate
      ? new Date(requiredDate + 'T00:00:00').toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : 'To be discussed';

    const lines = [
      `Hello Cake Studio! I would love to enquire about a custom cake.`,
      ``,
      `*Custom Cake Enquiry Details:*`,
      `• *Name:* ${name.trim() || 'Guest'}`,
      `• *Occasion:* ${occasion.trim() || 'Celebration'}`,
      `• *Preferred Design Style:* ${designStyle}`,
      `• *Flavour Preference:* ${flavour}`,
      `• *Approximate Weight:* ${weight}`,
      `• *Required Date:* ${formattedDate}`,
    ];

    if (instructions.trim()) {
      lines.push(`• *Additional Instructions:* ${instructions.trim()}`);
    }

    lines.push(``, `Looking forward to creating something special together!`);
    return lines.join('\n');
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your name so we know how to address you.';
    }
    if (!occasion.trim()) {
      nextErrors.occasion = 'Please share the occasion for the celebration.';
    }
    if (!requiredDate) {
      nextErrors.requiredDate = 'Please select the date you need the cake.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const messageText = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodedMessage}`;

    setReadyWhatsAppUrl(whatsappUrl);

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(buildWhatsAppMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <section
      id="custom-cakes"
      className="py-24 lg:py-32 bg-[#f5faff] border-t border-[#3195e0]/15 relative"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="reveal-item max-w-3xl mb-14 lg:mb-20">
          <div className="highlighter-swipe px-3.5 py-1.5 text-sm mb-4">
            <span>Custom Cake Studio</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight text-[#161c08] mb-5">
            Dream It. Design It. We&apos;ll Bake It.
          </h2>
          <p className="text-base sm:text-lg text-[#161c08]/75 leading-relaxed">
            Have something special in mind? Tell us your idea, and let&apos;s create a cake that feels uniquely yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Interactive Custom Cake Enquiry Form (7 Columns) */}
          <div className="reveal-item lg:col-span-7 bg-white rounded-3xl shadow-[0_14px_40px_rgba(16,48,82,0.08)] border border-[#3195e0]/15 p-6 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Row 1: Name & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs font-bold tracking-tight text-[#161c08] mb-2"
                  >
                    Your Name <span className="text-[#3195e0]">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="e.g. Priya Patel"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-[#f5faff]/60 border ${
                      errors.name ? 'border-red-500' : 'border-[#161c08]/15'
                    } text-[#161c08] placeholder:text-[#161c08]/35 focus:outline-none focus:border-[#3195e0] transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-occasion"
                    className="block text-xs font-bold tracking-tight text-[#161c08] mb-2"
                  >
                    Occasion <span className="text-[#3195e0]">*</span>
                  </label>
                  <input
                    id="enquiry-occasion"
                    type="text"
                    value={occasion}
                    onChange={(e) => {
                      setOccasion(e.target.value);
                      if (errors.occasion) setErrors((prev) => ({ ...prev, occasion: '' }));
                    }}
                    placeholder="e.g. First Birthday, Anniversary"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-[#f5faff]/60 border ${
                      errors.occasion ? 'border-red-500' : 'border-[#161c08]/15'
                    } text-[#161c08] placeholder:text-[#161c08]/35 focus:outline-none focus:border-[#3195e0] transition-colors`}
                  />
                  {errors.occasion && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.occasion}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Quick Occasion Suggestions */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="text-[11px] text-[#161c08]/55 mr-1">Popular occasions:</span>
                {OCCASION_SUGGESTIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setOccasion(item);
                      if (errors.occasion) setErrors((prev) => ({ ...prev, occasion: '' }));
                    }}
                    className={`px-3 py-1 rounded-full text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      occasion === item
                        ? 'bg-[#f6f03b] text-[#161c08] font-bold'
                        : 'bg-[#f5faff] text-[#161c08]/75 hover:bg-[#3195e0]/15 hover:text-[#161c08]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Row 2: Preferred Cake Design Selector */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold tracking-tight text-[#161c08]">
                    Preferred Cake Design
                  </label>
                  <span className="text-[11px] font-semibold text-[#3195e0]">
                    Updates visual inspiration preview
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {DESIGN_STYLES.map((style) => {
                    const active = designStyle === style;
                    return (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setDesignStyle(style)}
                        className={`px-4 py-3 rounded-xl text-xs font-bold tracking-tight text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          active
                            ? 'bg-[#f6f03b] text-[#161c08] border-[#161c08]/20 shadow-xs'
                            : 'bg-white text-[#161c08] border-[#161c08]/15 hover:border-[#3195e0]'
                        }`}
                      >
                        <span className="truncate">{style}</span>
                        {active && <Check className="w-3.5 h-3.5 shrink-0 ml-1.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Flavour Preference & Approximate Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="enquiry-flavour"
                    className="block text-xs font-bold tracking-tight text-[#161c08] mb-2"
                  >
                    Flavour Preference
                  </label>
                  <select
                    id="enquiry-flavour"
                    value={flavour}
                    onChange={(e) => setFlavour(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#f5faff]/60 border border-[#161c08]/15 text-[#161c08] focus:outline-none focus:border-[#3195e0] transition-colors cursor-pointer"
                  >
                    {FLAVOUR_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-weight"
                    className="block text-xs font-bold tracking-tight text-[#161c08] mb-2"
                  >
                    Approximate Cake Weight
                  </label>
                  <select
                    id="enquiry-weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#f5faff]/60 border border-[#161c08]/15 text-[#161c08] focus:outline-none focus:border-[#3195e0] transition-colors cursor-pointer"
                  >
                    {WEIGHT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Required Date */}
              <div>
                <label
                  htmlFor="enquiry-date"
                  className="block text-xs font-bold tracking-tight text-[#161c08] mb-2"
                >
                  Required Date <span className="text-[#3195e0]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="enquiry-date"
                    type="date"
                    value={requiredDate}
                    onChange={(e) => {
                      setRequiredDate(e.target.value);
                      if (errors.requiredDate)
                        setErrors((prev) => ({ ...prev, requiredDate: '' }));
                    }}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-[#f5faff]/60 border ${
                      errors.requiredDate ? 'border-red-500' : 'border-[#161c08]/15'
                    } text-[#161c08] focus:outline-none focus:border-[#3195e0] transition-colors`}
                  />
                </div>
                {errors.requiredDate ? (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.requiredDate}</span>
                  </p>
                ) : (
                  <p className="mt-1.5 text-[11px] text-[#161c08]/60 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3195e0]" />
                    <span>Every cake is freshly baked to order in Anand. Early booking is recommended.</span>
                  </p>
                )}
              </div>

              {/* Row 5: Additional Instructions */}
              <div>
                <label
                  htmlFor="enquiry-instructions"
                  className="block text-xs font-bold tracking-tight text-[#161c08] mb-2"
                >
                  Additional Instructions (Name on Cake, Theme Details, Colour Palette)
                </label>
                <textarea
                  id="enquiry-instructions"
                  rows={3}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Share any special message to pipe on the cake, preferred colours, eggless preference, or design ideas..."
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#f5faff]/60 border border-[#161c08]/15 text-[#161c08] placeholder:text-[#161c08]/35 focus:outline-none focus:border-[#3195e0] transition-colors resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-tight bg-[#161c08] text-white hover:bg-[#3195e0] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>

                <span className="text-xs text-[#161c08]/60">
                  Opens WhatsApp with +91 9213656032 so you can review &amp; send.
                </span>
              </div>

              {/* Post-Validation WhatsApp Ready Panel */}
              {readyWhatsAppUrl && (
                <div className="mt-6 p-5 rounded-2xl bg-[#f5faff] border border-[#3195e0]/30 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-editorial text-lg text-[#161c08]">
                        Your Custom Cake Enquiry is Ready
                      </h4>
                      <p className="text-xs text-[#161c08]/75 mt-0.5">
                        Review your formatted message below and click to open WhatsApp with Cake Studio (+91 9213656032).
                      </p>
                    </div>
                  </div>

                  <pre className="p-3.5 rounded-xl bg-white border border-[#161c08]/10 text-xs text-[#161c08]/85 whitespace-pre-wrap font-sans leading-relaxed">
                    {buildWhatsAppMessage()}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={readyWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-tight bg-[#f6f03b] text-[#161c08] hover:bg-[#161c08] hover:text-white transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Open in WhatsApp Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold tracking-tight border border-[#161c08]/20 bg-white text-[#161c08] hover:border-[#3195e0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#3195e0]" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Live Visual Direction Preview Area (5 Columns) */}
          <div className="reveal-item lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-b from-[#3195e0] to-[#49a9f3] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="highlighter-swipe px-3 py-1 text-xs">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Style: {designStyle}</span>
                  </span>
                </div>
                <span className="text-[11px] text-white/80 font-medium">Cake Studio Archive</span>
              </div>

              <h3 className="font-editorial text-2xl text-white mb-2">
                {activePreview.title}
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-6">
                {activePreview.notes}
              </p>

              {/* Tilted White-Bordered Fan Preview Cards */}
              <div className="grid grid-cols-12 gap-4 items-end mb-6 py-2">
                <div className="col-span-7 overflow-hidden aspect-[4/5] bg-white border-[5px] border-white rounded-2xl shadow-lg -rotate-2">
                  <img
                    src={activePreview.image}
                    alt={activePreview.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="col-span-5 overflow-hidden aspect-[4/5] bg-white border-[5px] border-white rounded-2xl shadow-lg rotate-3">
                  <img
                    src={activePreview.secondaryImage}
                    alt={activePreview.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/25 space-y-2 text-xs">
                <div className="flex items-center justify-between text-white/85">
                  <span>Occasion</span>
                  <span className="font-bold text-white">
                    {occasion || 'Celebration'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-white/85">
                  <span>Flavour Profile</span>
                  <span className="font-bold text-white truncate max-w-[200px]">
                    {flavour}
                  </span>
                </div>
                <div className="flex items-center justify-between text-white/85">
                  <span>Portion Size</span>
                  <span className="font-bold text-white">
                    {weight.split(' (')[0]}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-[11px] text-white/80 italic">
                Have a reference photo from Instagram or Pinterest? You can share it directly in our WhatsApp chat once opened.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
