"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart2 className={`h-8 w-8 ${scrolled ? "text-royalBlue" : "text-cream"} transition-colors`} />
          <span className={`font-semibold text-xl md:text-2xl ${scrolled ? "text-black" : "text-cream"} transition-colors`}>Datlee</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className={`${scrolled ? "text-black" : "text-cream"} hover:text-royalBlue transition-colors`}>
            Features
          </Link>
          <Link href="#how-it-works" className={`${scrolled ? "text-black" : "text-cream"} hover:text-royalBlue transition-colors`}>
            How It Works
          </Link>
          <Link href="#team" className={`${scrolled ? "text-black" : "text-cream"} hover:text-royalBlue transition-colors`}>
            Team
          </Link>
          <Link href="#pricing" className={`${scrolled ? "text-black" : "text-cream"} hover:text-royalBlue transition-colors`}>
            Pricing
          </Link>
        </nav>

        {/* <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-royalBlue hover:bg-white">
            Login
          </Button>
          <Button className="bg-royalBlue hover:bg-royalBlue/90 text-white">
            Create an account
          </Button>
        </div> */}

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-royalBlue" : "text-cream"} transition-colors`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 animate-fade-in">
          <div className="flex flex-col p-6 space-y-6">
            <Link
              href="#features"
              className="text-lg font-medium text-gray-700 hover:text-royalBlue"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium text-gray-700 hover:text-royalBlue"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              href="#team"
              className="text-lg font-medium text-gray-700 hover:text-royalBlue"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium text-gray-700 hover:text-royalBlue"
              onClick={toggleMenu}
            >
              Pricing
            </Link>

            {/* <div className="pt-6 border-t border-gray-200 flex flex-col space-y-4">
              <Link href="/login" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full justify-center">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={toggleMenu}>
                <Button className="w-full justify-center bg-royalBlue hover:bg-royalBlue/90 text-white">
                  Create an account
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;