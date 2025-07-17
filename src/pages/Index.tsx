import { useState, useMemo } from 'react';
import { HeroCard } from '@/components/HeroCard';
import { FilterBar } from '@/components/FilterBar';
import { heroes } from '@/data/heroes';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedInterest, setSelectedInterest] = useState('All Interests');

  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      const regionMatch = selectedRegion === 'All Regions' || hero.region === selectedRegion;
      const interestMatch = selectedInterest === 'All Interests' || hero.interest === selectedInterest;
      return regionMatch && interestMatch;
    });
  }, [selectedRegion, selectedInterest]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroBanner}
          alt="Celebrating inspiring women throughout history"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ScanSheCan
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Discover inspiring women through scannable QR codes
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Inspiring Women Throughout History
          </h2>
          <p className="text-muted-foreground">
            Explore stories of courage, innovation, and achievement. Each hero has a unique QR code you can print and share.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          selectedRegion={selectedRegion}
          selectedInterest={selectedInterest}
          onRegionChange={setSelectedRegion}
          onInterestChange={setSelectedInterest}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredHeroes.length} of {heroes.length} heroes
          </p>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>

        {/* No Results */}
        {filteredHeroes.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No heroes found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
