import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="/ChatGPT_Image_Feb_4,_2026,_02_32_52_AM_(1).png"
              alt="John Riad"
              className="h-16 w-auto brightness-0 invert" />

            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Premium development partner for high-performance marketing and CRO
              agencies.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-12">
            <Link
              to="/"
              className="text-gray-300 hover:text-gold-400 transition-colors text-sm">

              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-gold-400 transition-colors text-sm">

              Services
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-300 hover:text-gold-400 transition-colors text-sm">

              How It Works
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-gold-400 transition-colors text-sm">

              Pricing
            </Link>
            <Link
              to="/book-a-call"
              className="text-gray-300 hover:text-gold-400 transition-colors text-sm">

              Book a Call
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a
              href="mailto:build@johnriad.agency"
              className="flex items-center space-x-2 text-gray-300 hover:text-gold-400 transition-colors">

              <Mail size={18} />
              <span>build@johnriad.agency</span>
            </a>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© 2026 John Riad. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}