import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Toronto Drywall
            </h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              From small repairs to complete commercial installations, we deliver professional drywall services across the Greater Toronto Area. Our commitment to quality and customer satisfaction makes us Toronto&apos;s preferred choice for all drywall needs.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Our Services
            </h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/residential" className="hover:text-yellow-400 transition-colors">
                  Residential Drywall
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="hover:text-yellow-400 transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="/new-construction" className="hover:text-yellow-400 transition-colors">
                  New Construction
                </Link>
              </li>
              <li>
                <Link href="/repairs" className="hover:text-yellow-400 transition-colors">
                  Drywall Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Service Areas
            </h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <ul className="space-y-3 text-gray-300">
              <li>Toronto</li>
              <li>North York</li>
              <li>Etobicoke</li>
              <li>Scarborough</li>
              <li>Mississauga</li>
              <li>Greater Toronto Area</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact Us
            </h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <div className="text-gray-300 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-yellow-400" />
                <p>Toronto, Ontario</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p>+1 778-653-4862</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p>office@toronto-drywall.com</p>
              </div>
              <div className="flex space-x-4 mt-6 pt-6 border-t border-gray-800">
                <a 
                  href="#" 
                  className="p-2 bg-gray-900 hover:bg-yellow-400 hover:text-black transition-colors rounded-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-900 hover:bg-yellow-400 hover:text-black transition-colors rounded-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Toronto Drywall. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;