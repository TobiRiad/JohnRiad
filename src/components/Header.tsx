import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'How It Works',
    path: '/how-it-works'
  },
  {
    name: 'Pricing',
    path: '/pricing'
  }];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-cream-50 py-4' : isScrolled ? 'bg-white/70 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <img
              src="/ChatGPT_Image_Feb_4,_2026,_02_32_52_AM_(1).png"
              alt="John Riad"
              className="h-10 md:h-16 w-auto" />

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-gold-500 hover-underline-animation ${isActive(link.path) ? 'text-gold-500' : 'text-charcoal-900'}`}>

                {link.name}
              </Link>
            )}
            <Link
              to="/book-a-call"
              className="btn-shine bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">

              Book a Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-charcoal-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut'
          }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-cream-50 z-40 md:hidden flex flex-col justify-center items-center space-y-8"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
          }}>

            {navLinks.map((link, idx) =>
          <motion.div
            key={link.name}
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.05 + idx * 0.05,
              duration: 0.3
            }}>

                <Link
              to={link.path}
              className={`text-2xl font-serif ${isActive(link.path) ? 'text-gold-500' : 'text-charcoal-900'}`}>

                  {link.name}
                </Link>
              </motion.div>
          )}
            <motion.div
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.05 + navLinks.length * 0.05,
              duration: 0.3
            }}>

              <Link
              to="/book-a-call"
              className="bg-gold-500 text-white px-8 py-3 rounded-md text-lg font-medium shadow-lg mt-4">

                Book a Call
              </Link>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}