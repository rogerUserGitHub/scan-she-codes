import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { REGIONS, INTERESTS } from '@/data/heroes';

interface FilterBarProps {
  selectedRegion: string;
  selectedInterest: string;
  onRegionChange: (region: string) => void;
  onInterestChange: (interest: string) => void;
}

export const FilterBar = ({
  selectedRegion,
  selectedInterest,
  onRegionChange,
  onInterestChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Select value={selectedRegion} onValueChange={onRegionChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            {REGIONS.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Select value={selectedInterest} onValueChange={onInterestChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Interest" />
          </SelectTrigger>
          <SelectContent>
            {INTERESTS.map((interest) => (
              <SelectItem key={interest} value={interest}>
                {interest}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};