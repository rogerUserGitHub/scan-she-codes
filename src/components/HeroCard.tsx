import { Link } from 'react-router-dom';
import { Hero } from '@/data/heroes';
import { LazyImage } from '@/components/LazyImage';

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <Link to={`/heroes/${hero.id}`} className="block group">
      <div className="bg-gradient-card rounded-lg shadow-card group-hover:shadow-card-hover transition-all duration-300 overflow-hidden w-full h-80">
        <div className="relative h-48 overflow-hidden">
          <LazyImage
            src={hero.imageUrl}
            alt={hero.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-4 flex flex-col justify-between h-32">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground mb-1 line-clamp-2">
              {hero.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {hero.lifespan}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {hero.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {hero.region}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};