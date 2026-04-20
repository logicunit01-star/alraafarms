import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Investment Plans', href: '/plans' },
  { name: 'ROI Calculator', href: '/calculator' },
  { name: 'Shariah Compliance', href: '/shariah' },
  { name: 'Security', href: '/security' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm py-3 border-b border-brand-gold/10' : 'bg-brand-cream'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-14 h-14 bg-white rounded-xl shadow-lg border border-brand-gold/30 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
            <img src="/logo.jpeg" alt="Al Raa Farms Logo" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-tight tracking-tight transition-colors text-brand-forest">AL RAA</span>
            <span className="text-brand-gold font-sans text-[10px] font-semibold tracking-widest uppercase leading-none">Farms</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium tracking-wide transition-colors hover:text-brand-gold relative py-2',
                  isActive ? 'text-brand-gold' : 'text-brand-forest'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-brand-forest text-brand-gold px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide hover:bg-brand-sage transition-all flex items-center gap-2 group shadow-lg shadow-brand-forest/10"
          >
            Invest Now
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-forest p-2 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif font-medium text-brand-forest hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-forest text-brand-gold text-center py-3 rounded-sm font-semibold tracking-wide"
              >
                Invest Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
