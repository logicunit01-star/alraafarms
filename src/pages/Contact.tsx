import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentRange: '',
    plan: 'Portfolio Tier',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Onboarding request:', formData);
    alert('Thank you for your interest. An Al Raa investment officer will contact you within 24 hours.');
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold italic text-brand-gold">Secure Your Future.</h1>
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Investor Onboarding & Inquiry</h2>
          <p className="text-brand-cream/70 text-lg">
            Ready to participate in the upcoming cycle? Submit your details below and request our full investment prospectus.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-brand-forest leading-tight">Get in Touch with Our <br /> Investment Desk</h3>
              <p className="text-brand-sage text-lg leading-relaxed">
                Whether you’re a first-time halal investor or an institutional manager, our team is here to guide you through our asset-backed model.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-brand-gold/20 rounded-sm flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-forest transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/40 mb-1">Direct Line</p>
                  <p className="text-lg font-serif font-bold text-brand-forest">+92 (300) 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-brand-gold/20 rounded-sm flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-forest transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/40 mb-1">Email Inquiry</p>
                  <p className="text-lg font-serif font-bold text-brand-forest">invest@alraafarms.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-brand-gold/20 rounded-sm flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-forest transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/40 mb-1">HQ Islamabad</p>
                  <p className="text-lg font-serif font-bold text-brand-forest">Level 4, Al Raa Tower, Blue Area</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <a 
                 href="https://wa.me/923362115517" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-4 bg-brand-sage text-white px-8 py-4 rounded-sm font-bold shadow-xl hover:bg-brand-forest transition-all"
               >
                 <MessageSquare className="w-5 h-5" />
                 Connect via WhatsApp
               </a>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-12 border border-brand-gold/20 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Send className="w-24 h-24 text-brand-forest" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-forest/50">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-cream border-b border-brand-gold/20 p-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-forest"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-forest/50">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-brand-cream border-b border-brand-gold/20 p-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-forest"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-forest/50">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-brand-cream border-b border-brand-gold/20 p-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-forest"
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-forest/50">Investment Range</label>
                  <select
                    className="w-full bg-brand-cream border-b border-brand-gold/20 p-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-forest appearance-none"
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({...formData, investmentRange: e.target.value})}
                  >
                    <option value="">Select Range</option>
                    <option value="5k-25k">$5,000 - $25,000</option>
                    <option value="25k-100k">$25,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-forest/50">Message / Inquiries</label>
                <textarea
                  className="w-full bg-brand-cream border-b border-brand-gold/20 p-3 h-32 focus:outline-none focus:border-brand-gold transition-colors text-brand-forest"
                  placeholder="Tell us about your investment objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-forest text-brand-gold py-5 font-bold tracking-widest text-xs uppercase hover:bg-brand-sage transition-all flex items-center justify-center gap-3 rounded-md"
              >
                Request Prospectus & Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
