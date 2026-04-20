import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, Activity, Weight, ShoppingBag, Banknote } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Strategic Sourcing",
    desc: "Healthy calves are systematically acquired at a market-optimized ~80k PKR benchmark. Our veterinarians conduct rigorous checks to establish baseline health.",
    details: ["Selective sourcing by weight/breed", "Strict entry quarantine", "Full vaccination baseline"],
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "90-Day Fattening Protocol",
    desc: "We enforce a 90-day nutrition cycle yielding 20-25kg rapid weight gain. Our world-class facilities maintain strict environmental controls for peak animal performance.",
    details: ["24/7 condition monitoring", "Custom organic feed mix", "Digital weight tracking"],
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Scale Oversight",
    desc: "Risk is mitigated natively via continuous veterinary monitoring, absolute adherence to strict vaccination protocols, and physical buffer stock protection.",
    details: ["Takaful buffer integration", "15-day health audits", "Low mortality focus"],
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Premium Sales Exit",
    desc: "At market peak, livestock is exited into high-end retail and wholesale ecosystems, targeting ~128k PKR per animal for rapid capital turnover.",
    details: ["Export-grade alignment", "Eid-ul-Adha premium targeting", "Bulk B2B sales"],
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Profit Distribution",
    desc: "After accounting for costs (feed, labor, management), the net profit is distributed between the investor and Al Raa Farms according to the agreed ratio.",
    details: ["Transparent audit reports", "Quarterly disbursements", "Re-investment options"],
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1920&q=80"
            alt="The Fattening Cycle"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-forest/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-forest/60 via-brand-forest/40 to-brand-cream/10" />
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream">
            The <span className="text-brand-gold italic">Fattening</span> Cycle
          </h1>
          <p className="text-brand-cream/90 font-sans text-lg md:text-xl font-light">
            A scientifically managed, operationally transparent, and highly capitalized model for agricultural growth.
          </p>
        </div>
      </section>

      {/* Visual Flow Header */}
      <section className="py-16 px-6 bg-brand-gold/5 border-b border-brand-gold/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
            {["Investor Funds", "Animal Purchase", "Growth Cycle", "Peak Sale", "Shared Profit"].map((step, idx) => (
              <div key={idx} className="flex items-center group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-brand-gold border-dashed flex items-center justify-center text-brand-gold font-bold mb-2">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-forest">{step}</span>
                </div>
                {idx < 4 && <ArrowRight className="hidden md:block w-5 h-5 text-brand-gold/50 mx-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Steps */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-brand-forest text-brand-gold rounded-sm flex items-center justify-center">
                  {step.icon}
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-forest">{step.title}</h2>
                <p className="text-brand-forest/80 font-sans leading-relaxed text-lg">
                  {step.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                      <span className="text-sm font-semibold font-sans text-brand-sage uppercase tracking-wide">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full aspect-video bg-white p-4 border border-brand-gold/10 shadow-xl overflow-hidden group">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Economics Summary */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-forest p-12 relative border border-brand-cream/10">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full translate-x-32 -translate-y-32" />
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-brand-gold">Understanding the Economics</h3>
                  <p className="text-brand-cream/90 font-sans font-light leading-relaxed">
                    Livestock meat fattening logic is simple yet powerful: Purchasing weight below market average, adding value through scientific nutrition, and selling at market peak.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 border-l-2 border-brand-gold bg-brand-cream/5 shadow-sm rounded-r-md">
                      <p className="text-xs font-sans uppercase font-bold text-brand-gold tracking-widest mb-1">Growth Metric</p>
                      <p className="text-brand-cream font-sans font-medium">Targeting robust weight gain of 20-25kg per animal during a rapid 90-day cycle.</p>
                    </div>
                    <div className="p-4 border-l-2 border-brand-gold bg-brand-cream/5 shadow-sm rounded-r-md">
                      <p className="text-xs font-sans uppercase font-bold text-brand-gold tracking-widest mb-1">Management Ratio</p>
                      <p className="text-brand-cream font-sans font-medium">1 skilled farm manager per 50 animals, supported by 24/7 automated digital reporting.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-cream/5 p-8 rounded-xl border border-brand-cream/10 backdrop-blur-md shadow-2xl">
                   <p className="text-center font-serif text-2xl mb-8 font-bold text-brand-cream">Model Comparison</p>
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs tracking-widest uppercase font-bold text-brand-gold">
                          <span>Risk Allocation</span>
                          <span>Shared</span>
                        </div>
                        <div className="h-1 bg-brand-cream/10">
                          <div className="h-full bg-brand-gold w-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs tracking-widest uppercase font-bold text-brand-gold">
                          <span>Asset Backing</span>
                          <span>100% Physical</span>
                        </div>
                        <div className="h-1 bg-brand-cream/10">
                          <div className="h-full bg-brand-gold w-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs tracking-widest uppercase font-bold text-brand-gold">
                          <span>Liquidity</span>
                          <span>90-Day Rapid Cycles</span>
                        </div>
                        <div className="h-1 bg-brand-cream/10">
                          <div className="h-full bg-brand-gold w-1/2" />
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
