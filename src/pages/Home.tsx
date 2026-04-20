import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Play, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1920&q=80"
            alt="Livestock Farm"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-forest/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-forest/40 via-transparent to-brand-cream/10" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">100% Shariah Compliant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-cream leading-[1.1]">
              Halal Wealth Through <br />
              <span className="text-brand-gold italic">90-Day</span> Livestock Cycles.
            </h1>
            
            <p className="text-brand-cream/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Authentic Cattle Breeders since 2012. We operate a scalable, asset-backed livestock fattening model targeting a 43.68% ROI in Year 1. Experience predictable growth with rapid compounding capital efficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-gold text-brand-forest px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2 group"
              >
                Start Investing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto border border-brand-cream/30 text-brand-cream px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-brand-cream/10 transition-all flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square rounded-full border border-brand-gold/20 p-8">
              <div className="w-full h-full rounded-full border border-brand-gold/40 p-8 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80"
                  alt="Premium Livestock"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Stats Badge */}
            <div className="absolute bottom-10 -left-10 bg-brand-cream p-6 rounded-sm shadow-2xl border-l-4 border-brand-gold">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-forest">43.68%</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/60">Target ROI in Year 1</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-brand-cream/50 w-6 h-6" />
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">The Opportunity</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-forest leading-tight">
              Bridging the Supply Gap in Global Protein Demand.
            </h3>
            <p className="text-brand-forest/80 font-sans leading-relaxed text-lg">
              Global protein demand is surging, and Pakistan faces a massive gap between high-quality meat supply and domestic consumption. We capitalize on this structural deficit by leveraging our 12+ years of breeding expertise to deliver premium, export-grade cattle.
            </p>
            <div className="pt-4 border-l-2 border-brand-gold pl-6 space-y-2">
              <h4 className="font-serif font-bold text-brand-forest text-xl">Seasonal Tailwinds</h4>
              <p className="text-brand-forest/80 font-sans text-sm">
                Our 90-day cycles are systematically timed to capture predictable price premiums during peak demand windows like Eid-ul-Adha and Eid-ul-Fitr.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540306141381-8071871216d2?auto=format&fit=crop&w=800&q=80" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80" }}
              alt="Agricultural Demand" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
                title: "Asset-Backed Security",
                desc: "Your investment is tied to physical, traceable livestock assets, providing tangible value and security."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-brand-gold" />,
                title: "Ethical Returns",
                desc: "Profit sharing through genuine economic activity in the livestock sector, free from Riba and speculation."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-gold" />,
                title: "Complete Transparency",
                desc: "Real-time monitoring and reporting. Know exactly where and how your livestock is growing."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="space-y-4"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-brand-forest">{pillar.title}</h3>
                <p className="text-brand-forest/80 font-sans leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Summary */}
      <section className="py-24 px-6 bg-white border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-forest">How Al Raa Farms Grows Wealth</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategic Sourcing", desc: "Healthy calves are systematically acquired at a ~80k PKR benchmark." },
              { step: "02", title: "90-Day Protocol", desc: "World-class nutrition yielding 20-25kg rapid weight gain per cycle." },
              { step: "03", title: "Scale Oversight", desc: "Continuous veterinary monitoring, vaccination, and buffer stock protection." },
              { step: "04", title: "Premium Sales", desc: "Rapid exit through high-end channels targeting ~128k PKR per animal." }
            ].map((item, idx) => (
              <div key={idx} className="relative group p-8 border border-brand-sage/15 hover:border-brand-gold/30 transition-all bg-white card-shadow rounded-xl">
                <span className="text-6xl font-serif font-bold text-brand-gold/10 absolute top-4 right-4 group-hover:text-brand-gold/20 transition-colors">
                  {item.step}
                </span>
                <h4 className="text-xl font-serif font-bold text-brand-forest mb-4">{item.title}</h4>
                <p className="text-sm font-sans text-brand-forest/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/how-it-works" className="inline-flex items-center text-brand-gold font-bold hover:gap-3 transition-all">
              Comprehensive Model Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Shariah Focus Section */}
      <section className="py-24 px-6 premium-gradient text-brand-cream">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-serif font-bold leading-tight text-brand-cream">
              Rooted in <span className="text-brand-gold italic">Principles</span>, <br /> Driven by Results.
            </h2>
            <p className="text-brand-cream/90 font-sans font-light text-lg leading-relaxed">
              Our investment structure is designed under the guidance of leading Islamic finance scholars. We prioritize ethical animal welfare, real economic participation, and equitable risk-sharing.
            </p>
            <ul className="space-y-4">
              {[
                "Riba-Free Structure (No Interest)",
                "Physical Ownership Representation",
                "Mudarabah/Musharakah Based Partnership",
                "Asset-Backed Wealth Creation"
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span className="text-brand-cream/90 font-sans font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/shariah"
              className="inline-block border-b border-brand-gold text-brand-gold pb-1 font-bold hover:text-brand-cream hover:border-brand-cream transition-all"
            >
              Examine Our Compliance Framework
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80" className="rounded-sm w-full h-80 object-cover grayscale" referrerPolicy="no-referrer" alt="Halal Agriculture 1" />
              <img src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=400&q=80" className="rounded-sm w-full h-80 object-cover translate-y-8 grayscale" referrerPolicy="no-referrer" alt="Halal Agriculture 2" />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center p-4 text-center">
              <span className="text-brand-forest font-serif font-bold text-xs uppercase tracking-tighter">Certified Halal Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-forest">
            Join the Next Fattening Cycle
          </h2>
          <p className="text-brand-forest/80 font-sans text-lg">
            Our quarterly investment cycles are now open. Secure your participation in Pakistan's fastest-growing ethical agriculture venture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-brand-forest text-brand-gold px-12 py-5 rounded-md font-bold text-lg hover:bg-brand-sage transition-all shadow-xl"
            >
              Apply for Onboarding
            </Link>
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 font-bold text-brand-forest hover:text-brand-gold transition-colors"
            >
              <div className="w-12 h-12 bg-brand-sage rounded-full flex items-center justify-center text-white">
                <Play className="w-5 h-5 fill-current" />
              </div>
              View Farm Operations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
