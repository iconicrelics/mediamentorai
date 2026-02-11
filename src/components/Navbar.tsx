import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './GradientText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-7 w-7 text-electric-purple group-hover:text-electric-cyan transition-colors" />
            <span className="font-heading font-bold text-xl">
              <GradientText animated={false}>MEDIA MENTOR AI</GradientText>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/calculator">ROI Calculator</NavLink>
            <NavLink to="/quiz">AI Quiz</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-electric-purple to-electric-cyan text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d1a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/calculator" onClick={() => setIsOpen(false)}>ROI Calculator</MobileNavLink>
              <MobileNavLink to="/quiz" onClick={() => setIsOpen(false)}>AI Quiz</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-electric-purple to-electric-cyan text-white text-center rounded-full font-semibold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors group"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-electric-purple to-electric-cyan transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4" />
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
