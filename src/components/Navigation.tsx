import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navigation = ({ currentPage, showActions = true, transparent = true }: any) => {
  const { push } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 ${transparent ? 'bg-transparent' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo - Updated with Next/Image */}
          <div className="flex items-center gap-2">
            <div className="w-16 sm:w-24 relative">
              <Image
                src="/logo.webp"
                alt="Handyman logo"
                width={96}
                height={96}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {showActions ? (
              <div className='flex flex-1 items-center justify-end gap-8 w-100'>
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      push(link.url)
                    }}
                    className={`text-lg transition-colors ${transparent ? 'text-white hover:text-[#FACC15]' : 'text-gray-500 hover:text-[#ffc526]'}`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            ) : (
              <button
                onClick={() => window.open('/services', '_current')}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Your Quote Now
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 stroke-white" />
              ) : (
                <Menu className="h-6 w-6 stroke-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url)
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 px-4 text-white hover:text-[#FACC15] transition-colors"
                >
                  {link.text}
                </a>
              ))}

              {/* Mobile Actions */}
              <div>
                {showActions ? null : (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#FACC15] text-black px-4 py-2 rounded-lg hover:bg-[#ffc526] transition-colors"
                  >
                    Get Started Now
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;