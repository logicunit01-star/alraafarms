import { motion } from 'motion/react';
import { Target, Heart, Leaf, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="relative h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=1920&q=80"
            alt="About Al Raa Farms"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-forest/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-forest/60 via-brand-forest/40 to-brand-cream/10" />
        </div>
        <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-gold mx-auto flex items-center justify-center rounded-sm mb-4 shadow-2xl"
          >
            <span className="text-brand-forest font-serif font-bold text-3xl">AR</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-brand-cream">
            Cultivating Wealth, <br /> 
            <span className="text-brand-gold italic">Honoring Heritage.</span>
          </h1>
          <p className="text-brand-cream/90 text-lg md:text-2xl font-serif max-w-2xl mx-auto italic font-light drop-shadow-lg">
            "To bridge the gap between ethical investors and the massive potential of Pakistan’s agricultural landscape."
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em]">Established 2012</h2>
              <h3 className="text-4xl font-serif font-bold text-brand-forest">Authentic Cattle Breeders</h3>
              <p className="text-brand-forest/80 font-sans leading-relaxed text-lg">
                Established in 2012 as Authentic Cattle Breeders, Al Raa Farms operates a scalable, asset-backed livestock fattening model targeting a 43.68% ROI in Year 1. Unlike traditional dairy or breeding models, our 90-day cycle offers high predictability and compounding capital efficiency, scaling dynamically from our 150-animal pilot to 250-300 animals by Year 2.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Target className="w-8 h-8 text-brand-gold" />
                <h4 className="font-serif font-bold text-xl text-brand-forest">Our Mission</h4>
                <p className="text-sm font-sans text-brand-forest/80">To capture compounding growth via our 90-day livestock fattening model, delivering exceptional wealth creation.</p>
              </div>
              <div className="space-y-4">
                <Globe className="w-8 h-8 text-brand-gold" />
                <h4 className="font-serif font-bold text-xl text-brand-forest">Our Vision</h4>
                <p className="text-sm font-sans text-brand-forest/80">To become the gold standard of 90-day halal meat supply, bridging the domestic consumption deficit securely.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
               <img src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Cattle Farm" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-gold p-10 max-w-xs shadow-2xl">
               <p className="font-serif italic text-brand-forest text-lg leading-snug">
                 "We are not just fattening livestock; we are fattening the local economy through ethical partnership."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Foundation</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-cream">The Pillars of Al Raa</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-brand-gold" />,
                title: "Animal Dignity",
                desc: "Every animal in our care is treated according to the highest Tayyib standards, ensuring health, comfort, and piousness throughout the cycle."
              },
              {
                icon: <Leaf className="w-8 h-8 text-brand-gold" />,
                title: "Sustainable Growth",
                desc: "We prioritize organic practices and long-term sustainability over quick, artificial gains. Our soil and stock are handled with care."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
                title: "Absolute Integrity",
                desc: "From contract drafting to market sales, we operate with a radical transparency that builds lasting bonds with our investor community."
              }
            ].map((value, idx) => (
              <div key={idx} className="space-y-6 p-8 border border-brand-cream/10 hover:border-brand-gold/50 transition-colors bg-brand-forest/40">
                <div>{value.icon}</div>
                <h4 className="text-2xl font-serif font-bold italic text-brand-cream">{value.title}</h4>
                <p className="text-brand-cream/60 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
           <h3 className="text-3xl font-serif font-bold text-brand-forest">Leadership with Deep Roots</h3>
           <p className="text-brand-forest/80 font-sans leading-relaxed text-lg">
              Al Raa Farms is governed by a diverse team of veterans in Agricultural Science, Investment Banking, and Islamic Jurisprudence. Our collective expertise ensures that every decision balances technical optimization with financial security and religious integrity.
           </p>
           <div className="pt-8">
              <span className="inline-block border-b border-brand-gold pb-2 font-serif italic text-brand-forest font-bold">The Al Raa Management Council</span>
           </div>
        </div>
      </section>
    </div>
  );
}

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
