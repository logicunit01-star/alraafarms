import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-forest text-brand-cream pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-sm">
                <span className="text-brand-forest font-serif font-bold text-xl">AR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-cream font-serif font-bold text-xl leading-tight tracking-tight">AL RAA</span>
                <span className="text-brand-gold font-sans text-[10px] font-semibold tracking-widest uppercase leading-none">Farms</span>
              </div>
            </Link>
            <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              Pioneering Shariah-compliant livestock investment models that deliver ethical returns and sustainable agricultural growth.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-9 h-9 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-forest transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-forest transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-brand-cream/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-forest transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-brand-gold mb-6 tracking-wide">Investment</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/how-it-works" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  How It Works
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  Investment Plans
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/shariah" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  Shariah Compliance
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  Security & Transparency
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-brand-gold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  About Al Raa
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  Our Mission
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  Farmer Partnership
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors flex items-center group">
                  Contact Support
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-brand-gold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-sm text-brand-cream/60 leading-relaxed">
                  Head Office: Al Raa Corporate Tower, Blue Area, Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm text-brand-cream/60">+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-sm text-brand-cream/60">invest@alraafarms.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-brand-cream/40 uppercase tracking-widest">
            © 2026 Al Raa Farms. All Rights Reserved. Shariah Audited & Certified.
          </p>
          <div className="flex items-center space-x-6 text-[10px] text-brand-cream/40 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
