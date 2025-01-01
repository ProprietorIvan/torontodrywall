import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  showActions?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ showActions = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-2xl font-bold ${
              scrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}
          >
            Toronto Drywall
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  scrolled || !isHomePage
                    ? 'text-gray-600 hover:text-black'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {showActions && (
              <button
                onClick={() => router.push('/quote')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled || !isHomePage
                    ? 'bg-black text-white hover:bg-yellow-400 hover:text-black'
                    : 'bg-white text-black hover:bg-yellow-400'
                }`}
              >
                Get Quote
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 mt-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-black font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {showActions && (
              <button
                onClick={() => router.push('/quote')}
                className="w-full bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Get Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;