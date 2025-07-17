import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Info, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <div className="flex flex-col space-y-4">
      <Link
        to="/"
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          isActive('/') 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-muted'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <Link
        to="/about"
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          isActive('/about') 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-muted'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <Info className="w-4 h-4" />
        <span>About</span>
      </Link>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="justify-start gap-2"
      >
        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      </Button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            ScanSheCan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            About
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="mt-6">
              <NavContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};