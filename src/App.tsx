/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Hero } from './components/Hero';
import { CreationsGallery } from './components/CreationsGallery';
import { ExploreCategories } from './components/ExploreCategories';
import { CustomCakeExperience } from './components/CustomCakeExperience';
import { BrandStory } from './components/BrandStory';
import { FinalCTAAndContact } from './components/FinalCTAAndContact';
import { CakeItem } from './data/cakes';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [selectedCakeId, setSelectedCakeId] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All Creations');

  const [preselectedStyle, setPreselectedStyle] = useState<CakeItem['designStyle'] | null>(null);
  const [preselectedOccasion, setPreselectedOccasion] = useState<string | null>(null);
  const [preselectedReferenceNote, setPreselectedReferenceNote] = useState<string | null>(null);

  useScrollReveal([activeCategoryFilter]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireWithStyle = (style: CakeItem['designStyle'], cakeTitle: string) => {
    setPreselectedStyle(style);
    setPreselectedReferenceNote(cakeTitle);
    scrollToSection('custom-cakes');
  };

  const handleSelectCategoryForEnquiry = (
    designPreset: CakeItem['designStyle'],
    occasionPreset: string
  ) => {
    setPreselectedStyle(designPreset);
    setPreselectedOccasion(occasionPreset);
    scrollToSection('custom-cakes');
  };

  const handleFilterGalleryByCategory = (categoryName: string) => {
    setActiveCategoryFilter(categoryName);
    scrollToSection('creations');
  };

  return (
    <div className="min-h-screen bg-[#f5faff] text-[#161c08] flex flex-col selection:bg-[#f6f03b] selection:text-[#161c08]">
      <main className="flex-1">
        <Hero
          onExploreClick={() => scrollToSection('creations')}
          onCreateClick={() => scrollToSection('custom-cakes')}
          onSelectHeroCake={(cakeId) => setSelectedCakeId(cakeId)}
        />

        <CreationsGallery
          selectedCakeId={selectedCakeId}
          onSelectCake={(cakeId) => setSelectedCakeId(cakeId)}
          onEnquireWithStyle={handleEnquireWithStyle}
          activeCategoryFilter={activeCategoryFilter}
          onCategoryFilterChange={(category) => setActiveCategoryFilter(category)}
        />

        <ExploreCategories
          onSelectCategoryForEnquiry={handleSelectCategoryForEnquiry}
          onFilterGalleryByCategory={handleFilterGalleryByCategory}
        />

        <CustomCakeExperience
          preselectedStyle={preselectedStyle}
          preselectedOccasion={preselectedOccasion}
          preselectedReferenceNote={preselectedReferenceNote}
        />

        <BrandStory />

        <FinalCTAAndContact />
      </main>
    </div>
  );
}
