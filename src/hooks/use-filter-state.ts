import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFilterState = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize state from URL params or defaults
  const [selectedRegion, setSelectedRegion] = useState(() => {
    return searchParams.get('region') || 'All Regions';
  });
  
  const [selectedInterest, setSelectedInterest] = useState(() => {
    return searchParams.get('interest') || 'All Interests';
  });
  
  const [searchName, setSearchName] = useState(() => {
    return searchParams.get('search') || '';
  });
  
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page ? parseInt(page, 10) : 1;
  });

  // Update URL when filters change
  const updateURL = (updates: Record<string, string | number>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === '' || value === 'All Regions' || value === 'All Interests') {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value.toString());
      }
    });
    
    setSearchParams(newSearchParams, { replace: true });
  };

  // Wrapper functions that update both state and URL
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setCurrentPage(1); // Reset to first page when filter changes
    updateURL({ region, page: 1 });
  };

  const handleInterestChange = (interest: string) => {
    setSelectedInterest(interest);
    setCurrentPage(1); // Reset to first page when filter changes
    updateURL({ interest, page: 1 });
  };

  const handleSearchChange = (search: string) => {
    setSearchName(search);
    setCurrentPage(1); // Reset to first page when filter changes
    updateURL({ search, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL({ page });
  };

  // Sync state with URL params when they change externally (e.g., browser back/forward)
  useEffect(() => {
    const region = searchParams.get('region') || 'All Regions';
    const interest = searchParams.get('interest') || 'All Interests';
    const search = searchParams.get('search') || '';
    const page = searchParams.get('page');
    const pageNum = page ? parseInt(page, 10) : 1;

    setSelectedRegion(region);
    setSelectedInterest(interest);
    setSearchName(search);
    setCurrentPage(pageNum);
  }, [searchParams]);

  return {
    selectedRegion,
    selectedInterest,
    searchName,
    currentPage,
    handleRegionChange,
    handleInterestChange,
    handleSearchChange,
    handlePageChange,
  };
}; 