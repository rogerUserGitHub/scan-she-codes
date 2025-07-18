import { useState, useMemo } from 'react';
import { HeroCard } from '@/components/HeroCard';
import { FilterBar } from '@/components/FilterBar';
import { Input } from '@/components/ui/input';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { heroes } from '@/data/heroes';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedInterest, setSelectedInterest] = useState('All Interests');
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 20;

  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      const regionMatch = selectedRegion === 'All Regions' || hero.region === selectedRegion;
      const interestMatch = selectedInterest === 'All Interests' || hero.interest === selectedInterest;
      const nameMatch = searchName === '' || hero.name.toLowerCase().includes(searchName.toLowerCase());
      return regionMatch && interestMatch && nameMatch;
    });
  }, [selectedRegion, selectedInterest, searchName]);

  const totalPages = Math.ceil(filteredHeroes.length / ITEMS_PER_PAGE);
  
  const paginatedHeroes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredHeroes.slice(startIndex, endIndex);
  }, [filteredHeroes, currentPage]);

  // Reset to page 1 when filters change
  const handleFilterChange = (filterFn: () => void) => {
    filterFn();
    setCurrentPage(1);
  };

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

        {/* Search and Filter Section */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Search by Name</label>
            <Input
              type="text"
              placeholder="Search heroes by name..."
              value={searchName}
              onChange={(e) => handleFilterChange(() => setSearchName(e.target.value))}
              className="max-w-md"
            />
          </div>
          
          <FilterBar
            selectedRegion={selectedRegion}
            selectedInterest={selectedInterest}
            onRegionChange={(region) => handleFilterChange(() => setSelectedRegion(region))}
            onInterestChange={(interest) => handleFilterChange(() => setSelectedInterest(interest))}
          />
        </div>

        {/* Results Count and Pagination Info */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredHeroes.length)} of {filteredHeroes.length} results
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedHeroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {/* Page numbers */}
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNum);
                        }}
                        isActive={currentPage === pageNum}
                        className="min-w-[40px]"
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                {/* Ellipsis for large page counts */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

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
