import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-2xl border-slate-200 py-2 shadow-sm' 
        : 'bg-white/80 backdrop-blur-xl border-slate-100 py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20 transition-transform group-hover:rotate-6">
            <span className="text-2xl font-black">V</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl leading-none text-slate-900">Vedanta Dental</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black mt-1">Meerut</span>
          </div>
        </NavLink>

        {/* Desktop Menu - Centered Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.path === '/' ? 'home' : link.path.replace('/', '')}`}
              className="font-bold text-sm tracking-wide transition-all hover:text-secondary relative pb-1 text-slate-600 hover:scale-105"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+919876543210" className="flex items-center space-x-2 text-secondary font-bold hover:scale-105 transition-transform">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <a href="#appointment" className="bg-secondary text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-secondary/20 hover:bg-secondary-dark transition-all hover:scale-105">
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white/95 backdrop-blur-3xl border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-10 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.path === '/' ? 'home' : link.path.replace('/', '')}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-bold text-slate-600 hover:text-secondary hover:bg-slate-50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 space-y-4">
                <a href="tel:+919876543210" className="w-full flex items-center justify-center space-x-2 text-secondary font-bold py-3 border-2 border-secondary rounded-xl transition-all">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="#appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-secondary text-white font-bold py-4 rounded-xl shadow-lg transition-all"
                >
                  <Calendar size={20} />
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
