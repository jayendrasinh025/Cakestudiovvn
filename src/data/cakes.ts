export interface CakeItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  designStyle: 'Floral' | 'Minimal' | 'Elegant' | 'Cartoon / Theme' | 'Luxury' | 'Custom Idea';
  image: string;
  objectPosition: string;
  aspectClass: string;
  masonrySpan: string;
  description: string;
  details: string;
}

export const BRAND_INFO = {
  name: 'Cake Studio',
  location: 'Anand, Gujarat, India',
  phoneDisplay: '+91 9213656032',
  phoneRaw: '919213656032',
  whatsappUrl: 'https://wa.me/919213656032',
  instagramUrl: 'https://www.instagram.com/cake_studio_vvn/',
  instagramHandle: '@cake_studio_vvn',
  bioQuote: 'Baking happiness, one cake at a time.',
  bioTags: 'Custom cakes · Freshly baked · Made with love · Live Cake',
  mainStatement: 'Every Celebration Deserves a Masterpiece.',
  supportingStatement:
    'From beautiful little details to extraordinary designs, we turn your sweetest ideas into cakes worth remembering.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cake+Studio+Anand+Gujarat+India',
};

export const PORTFOLIO_CAKES: CakeItem[] = [
  {
    id: 'pastel-butterfly-tiered',
    title: 'Pastel Butterfly & Sphere Tier',
    subtitle: 'Two-Tier First Birthday Centrepiece',
    category: 'Designer Cakes',
    designStyle: 'Elegant',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122509291_a648d740.jpg',
    objectPosition: 'center 45%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-7 lg:col-span-7',
    description:
      'A two-tier pastel buttercream creation featuring delicate palette-knife strokes, matte sugar spheres, gold-rimmed butterflies, and custom mirror-gold calligraphy.',
    details: 'Two-Tier · Hand-Painted Butterflies · Pastel Sugar Spheres',
  },
  {
    id: 'white-gold-architectural',
    title: 'Gilded Palm & Pearl Blanc',
    subtitle: 'Architectural White & Gold',
    category: 'Anniversary Cakes',
    designStyle: 'Minimal',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122409942_51fdac31.jpg',
    objectPosition: 'center 50%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-5 lg:col-span-5 md:mt-16',
    description:
      'Refined horizontal ribbed white buttercream crowned with metallic gold palm fans, cascading edible gold leaf, and satin pearl spheres.',
    details: 'Ribbed Texture · Edible Gold Leaf · Metallic Palm Accents',
  },
  {
    id: 'white-lily-vintage-lambeth',
    title: 'Ivory Lambeth & Stargazer Lily',
    subtitle: 'Sculptural Vintage Piping',
    category: 'Floral Cakes',
    designStyle: 'Floral',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122437451_61575a23.jpg',
    objectPosition: 'center 55%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-5 lg:col-span-5',
    description:
      'Classic all-white vintage ruffle swags and shell borders paired with dramatic pink-and-white stargazer lilies and a tall twisted gold taper candle.',
    details: 'Vintage Ruffle Piping · Fresh Stargazer Lilies · Gold Taper',
  },
  {
    id: 'floral-swing-canopy',
    title: 'Botanical Swing & Rose Trellis',
    subtitle: 'Handcrafted Figurine & Fresh Florals',
    category: 'Custom Creations',
    designStyle: 'Custom Idea',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122044617_1f3e360f.jpg',
    objectPosition: 'center 42%',
    aspectClass: 'aspect-[3/4]',
    masonrySpan: 'md:col-span-7 lg:col-span-7 md:-mt-8',
    description:
      'An enchanting floral hoop swing framing a handcrafted fondant figurine, surrounded by fresh white chrysanthemums, baby’s breath, and blush garden roses.',
    details: 'Floral Hoop Swing · Hand-Sculpted Figurine · Fresh Roses',
  },
  {
    id: 'coquette-rose-ribbons',
    title: 'Blush Ribbon & Rose Crown',
    subtitle: 'Coquette Floral Celebration',
    category: 'Birthday Cakes',
    designStyle: 'Floral',
    image: '/assets/aistudio/cake_studio_vvn_14050811_121750122_0c0bd04d.jpg',
    objectPosition: 'center 48%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-6 lg:col-span-6',
    description:
      'Soft ivory and rose-blush buttercream dressed with satin pink bows, fresh pink-tipped roses, golden dragees, and a shimmering crown wreath topper.',
    details: 'Satin Ribbon Bows · Fresh Pink Roses · Gold Sugar Pearls',
  },
  {
    id: 'blush-lily-pearl',
    title: 'Rosewater Ruffle & Lily Bloom',
    subtitle: 'Soft Pink Vintage Celebration',
    category: 'Floral Cakes',
    designStyle: 'Floral',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122253407_4b48b704.jpg',
    objectPosition: 'center 52%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-6 lg:col-span-6 md:mt-14',
    description:
      'Delicate rose-pink buttercream with dual-tone ribbon ruffles, sugar pearl studs, and a statement blooming stargazer lily.',
    details: 'Blush Ombré Finish · Pearl Dragees · Statement Lily',
  },
  {
    id: 'london-farewell-story',
    title: 'India to London Farewell Edition',
    subtitle: 'Bespoke Travel & Milestone Story',
    category: 'Theme Cakes',
    designStyle: 'Custom Idea',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122115357_c0bd9c6d.jpg',
    objectPosition: 'center 48%',
    aspectClass: 'aspect-[3/4]',
    masonrySpan: 'md:col-span-5 lg:col-span-4',
    description:
      'Created for a special bon voyage celebration, complete with architectural London skyline illustrations, flight path detailing from India to the UK, and custom toppers.',
    details: 'Skyline Wrap · Custom Route Topper · Milestone Message',
  },
  {
    id: 'mercedes-fitness-monochrome',
    title: 'Monochrome Mercedes & Athletics',
    subtitle: 'Personalised Lifestyle Theme',
    category: 'Theme Cakes',
    designStyle: 'Cartoon / Theme',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122516437_7769117d.jpg',
    objectPosition: 'center 50%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-7 lg:col-span-4 md:mt-10',
    description:
      'Crisp white fondant-style finish combining automotive passion and fitness—featuring a luxury sedan silhouette, alloy wheels, handcrafted kettlebells, and gym duffle.',
    details: 'Handcrafted Gym Accents · Automotive Topper · Bold Monochrome',
  },
  {
    id: 'range-rover-gold-noir',
    title: 'Noir Brushstroke & Range Rover',
    subtitle: 'Gold & Charcoal Luxe Theme',
    category: 'Birthday Cakes',
    designStyle: 'Luxury',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122348411_071e4e56.jpg',
    objectPosition: 'center 50%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-6 lg:col-span-4 md:mt-20',
    description:
      'Dramatic charcoal-and-white brushstroke tier accented with metallic gold spheres, embossed golden medallions, and a custom SUV showcase.',
    details: 'Charcoal Brushstroke · Metallic Gold Spheres · Custom Topper',
  },
  {
    id: 'gilded-drip-reserve',
    title: 'Gilded Drip & Reserve Edition',
    subtitle: 'Bespoke Celebration Statement',
    category: 'Custom Creations',
    designStyle: 'Luxury',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122213408_c3e2b07c.jpg',
    objectPosition: 'center 48%',
    aspectClass: 'aspect-[4/5]',
    masonrySpan: 'md:col-span-6 lg:col-span-6 md:col-start-4',
    description:
      'Smooth ivory finish with hand-painted metallic gold drip, scattered golden sugar pearls, and custom-crafted novelty celebration toppers.',
    details: 'Metallic Gold Drip · Custom Fondant Art · Gold Board Presentation',
  },
];

export interface CakeCategoryFeature {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  secondaryImage?: string;
  objectPosition: string;
  designPreset: CakeItem['designStyle'];
  occasionPreset: string;
  ctaLabel: string;
}

export const CAKE_CATEGORIES: CakeCategoryFeature[] = [
  {
    id: 'birthday-cakes',
    number: '01',
    name: 'Birthday Cakes',
    tagline: 'First birthdays, milestone years & joyful surprises',
    description:
      'Whether it is an enchanting two-tier pastel creation for a first birthday or a chic ribbon-and-rose centrepiece, every birthday cake is tailored around the guest of honour.',
    highlights: ['Single & Multi-Tier Options', 'Custom Name & Age Toppers', 'Freshly Baked to Order'],
    image: '/assets/aistudio/cake_studio_vvn_14050811_121750122_0c0bd04d.jpg',
    objectPosition: 'center 48%',
    designPreset: 'Elegant',
    occasionPreset: 'Birthday Celebration',
    ctaLabel: 'Explore Designs',
  },
  {
    id: 'anniversary-cakes',
    number: '02',
    name: 'Anniversary Cakes',
    tagline: 'Timeless romance in ivory, champagne & edible gold',
    description:
      'Designed to honour shared milestones with refined textures, delicate metallic gold leaf, pearl accents, and understated luxury.',
    highlights: ['Ribbed & Textured Buttercream', 'Edible Gold Leaf & Pearls', 'Intimate & Grand Sizes'],
    image: '/assets/aistudio/cake_studio_vvn_14050811_122409942_51fdac31.jpg',
    objectPosition: 'center 50%',
    designPreset: 'Minimal',
    occasionPreset: 'Anniversary',
    ctaLabel: 'Enquire Now',
  },
  {
    id: 'floral-cakes',
    number: '03',
    name: 'Floral Cakes',
    tagline: 'Fresh botanical blooms & vintage Lambeth piping',
    description:
      'From dramatic stargazer lilies and garden roses to intricate vintage ruffle piping, our floral cakes bring natural grace to the table.',
    highlights: ['Fresh Cut Florals', 'Vintage Lambeth Ruffle Piping', 'Soft Blush & Ivory Palettes'],
    image: '/assets/aistudio/cake_studio_vvn_14050811_122437451_61575a23.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122253407_4b48b704.jpg',
    objectPosition: 'center 52%',
    designPreset: 'Floral',
    occasionPreset: 'Special Celebration',
    ctaLabel: 'Explore Designs',
  },
  {
    id: 'designer-cakes',
    number: '04',
    name: 'Designer Cakes',
    tagline: 'Art-directed silhouettes crafted like edible sculptures',
    description:
      'Statement tiers featuring hand-painted watercolor strokes, 3D butterflies, pastel sugar spheres, and contemporary architectural balance.',
    highlights: ['Palette-Knife Buttercream Art', '3D Butterfly & Sphere Clusters', 'Bespoke Colour Palettes'],
    image: '/assets/aistudio/cake_studio_vvn_14050811_122509291_a648d740.jpg',
    objectPosition: 'center 45%',
    designPreset: 'Luxury',
    occasionPreset: 'Milestone Celebration',
    ctaLabel: 'Enquire Now',
  },
  {
    id: 'theme-cakes',
    number: '05',
    name: 'Theme Cakes',
    tagline: 'Passions, hobbies & personalities brought to life',
    description:
      'From luxury automobiles and fitness icons to bespoke lifestyle themes, we translate their favourite world into an unmistakable celebration cake.',
    highlights: ['Custom Hobby & Lifestyle Toppers', 'Hand-Sculpted Fondant Details', 'Bold Personalised Finishes'],
    image: '/assets/aistudio/cake_studio_vvn_14050811_122516437_7769117d.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122348411_071e4e56.jpg',
    objectPosition: 'center 50%',
    designPreset: 'Cartoon / Theme',
    occasionPreset: 'Themed Birthday',
    ctaLabel: 'Explore Designs',
  },
  {
    id: 'custom-creations',
    number: '06',
    name: 'Custom Creations',
    tagline: 'One-of-a-kind storytelling for unforgettable moments',
    description:
      'Have a farewell journey from India to the UK, a suspended floral swing, or a completely original concept? Share your sketch or vision and we will craft it from scratch.',
    highlights: ['100% Bespoke Concepting', 'Structural & Floral Hoops', 'Personalised Story Elements'],
    image: '/assets/aistudio/cake_studio_vvn_14050811_122044617_1f3e360f.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122115357_c0bd9c6d.jpg',
    objectPosition: 'center 42%',
    designPreset: 'Custom Idea',
    occasionPreset: 'Custom Surprise',
    ctaLabel: 'Create Your Cake',
  },
];

export const DESIGN_STYLE_PREVIEWS: Record<
  CakeItem['designStyle'],
  {
    title: string;
    caption: string;
    image: string;
    secondaryImage: string;
    notes: string;
  }
> = {
  Floral: {
    title: 'Botanical & Vintage Ruffle Direction',
    caption: 'Inspired by our Stargazer Lily & Fresh Rose creations',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122437451_61575a23.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122253407_4b48b704.jpg',
    notes: 'Fresh florals, vintage Lambeth piping, delicate sugar pearls, and soft blush or ivory tones.',
  },
  Minimal: {
    title: 'Architectural & Refined Minimal Direction',
    caption: 'Inspired by our Ribbed Ivory & Gold Leaf creations',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122409942_51fdac31.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122509291_a648d740.jpg',
    notes: 'Clean lines, textured buttercream ribs, understated metallic accents, and balanced negative space.',
  },
  Elegant: {
    title: 'Pastel Couture & Graceful Tier Direction',
    caption: 'Inspired by our Pastel Butterfly & Ribbon Bow creations',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122509291_a648d740.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_121750122_0c0bd04d.jpg',
    notes: 'Soft watercolor strokes, satin bows, pastel spheres, and delicate gold-edged butterflies.',
  },
  'Cartoon / Theme': {
    title: 'Personalised Passion & Theme Direction',
    caption: 'Inspired by our Automotive, Fitness & Travel creations',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122516437_7769117d.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122115357_c0bd9c6d.jpg',
    notes: 'Custom-crafted fondant figurines, hobby motifs, vehicle silhouettes, and tailored storylines.',
  },
  Luxury: {
    title: 'Statement Gold & Couture Tier Direction',
    caption: 'Inspired by our Gilded Reserve & Noir Gold creations',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122348411_071e4e56.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122213408_c3e2b07c.jpg',
    notes: 'Metallic gold drips, satin spheres, multi-tier presence, and bold celebratory detailing.',
  },
  'Custom Idea': {
    title: 'Bespoke One-of-a-Kind Concept',
    caption: 'Inspired by our Floral Swing & Farewell Story creations',
    image: '/assets/aistudio/cake_studio_vvn_14050811_122044617_1f3e360f.jpg',
    secondaryImage: '/assets/aistudio/cake_studio_vvn_14050811_122115357_c0bd9c6d.jpg',
    notes: 'Built entirely around your personal reference, milestone story, or custom structural idea.',
  },
};
