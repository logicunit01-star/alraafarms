import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, Activity, Weight, ShoppingBag, Banknote } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Livestock Sourcing",
    desc: "We source healthy calves (weighing 180kg-220kg) from reputable breeders. Our expert veterinarians conduct rigorous health checks to ensure baseline quality.",
    details: ["Selective sourcing by weight/breed", "Immediate quarantine protocol", "Full vaccination entry"]
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Precision Management",
    desc: "The animals enter our world-class fattening facility. Here, they are managed under strict environmental controls with data-driven monitoring.",
    details: ["24/7 CCTV & Field monitoring", "Climate controlled sheds", "Digital health records"]
  },
  {
    icon: <Weight className="w-8 h-8" />,
    title: "Fattening Cycle",
    desc: "A high-protein, standardized diet ensures steady weight gain. Over 6-9 months, animals achieve target weight (400kg+) optimized for the premium meat market.",
    details: ["Custom organic feed mix", "Regular weight audits", "Stress-free environment"]
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Market Exit",
    desc: "Once peak weight is achieved, animals are sold through our network of premium retailers, exporters, and local wholesale markets (Mandi).",
    details: ["Export-grade bulk sales", "Retail butcher partnerships", "Direct-to-consumer events"]
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Profit Distribution",
    desc: "After accounting for costs (feed, labor, management), the net profit is distributed between the investor and Al Raa Farms according to the agreed ratio.",
    details: ["Transparent audit reports", "Quarterly disbursements", "Re-investment options"]
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold">The Fattening Cycle</h1>
          <p className="text-brand-cream/70 text-lg md:text-xl">
            A scientifically managed, operationally transparent, and Shariah-compliant model for agricultural growth.
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
                <p className="text-brand-sage leading-relaxed text-lg italic">
                  "{step.desc}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      <span className="text-sm font-semibold text-brand-sage uppercase tracking-wide italic">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full aspect-video bg-white p-4 border border-brand-gold/10 shadow-xl overflow-hidden group">
                <img
                  src={`https://picsum.photos/seed/farm-${idx}/800/450`}
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
                  <h3 className="text-3xl font-serif font-bold italic text-brand-gold">Understanding the Economics</h3>
                  <p className="text-brand-cream/70 leading-relaxed">
                    Livestock meat fattening logic is simple yet powerful: Purchasing weight below market average, adding value through scientific nutrition, and selling at market peak.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 border-l-2 border-brand-gold bg-brand-cream/5">
                      <p className="text-xs uppercase font-bold text-brand-gold tracking-widest mb-1">Growth Metric</p>
                      <p className="text-brand-cream font-medium">Average weight gain of 0.8kg - 1.2kg per day depending on breed and season.</p>
                    </div>
                    <div className="p-4 border-l-2 border-brand-gold bg-brand-cream/5">
                      <p className="text-xs uppercase font-bold text-brand-gold tracking-widest mb-1">Management Ratio</p>
                      <p className="text-brand-cream font-medium">1 skilled farm manager per 50 animals, supported by 24/7 automated digital reporting.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-cream/5 p-8 rounded-sm border border-brand-cream/10 backdrop-blur-sm">
                   <p className="text-center font-serif text-2xl mb-8">Model Comparison</p>
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
                          <span>6-9 Month Cycles</span>
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
