import { motion } from 'motion/react';
import { Eye, Lock, FileSearch, ShieldCheck, Map, Smartphone } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Real-Time CCTV Access",
    desc: "Portfolio and institutional investors gain secure, 24/7 digital access to our farm feeds. Watch your investment grow in real-time."
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Insured Operation",
    desc: "We utilize multi-layer risk mitigation, including Takaful (Shariah insurance) to protect against unforeseen environmental and health calamities."
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Third-Party Audits",
    desc: "Our financial and operational records are reviewed quarterly by independent auditors to ensure fund integrity and Shariah compliance."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Health Governance",
    desc: "Our herd is overseen by seasoned veterinarians with mandatory health audits every 15 days, minimizing the risk of asset depreciation."
  }
];

export default function SecurityTransparency() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1920&q=80"
            alt="Security and Transparency"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-forest/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-forest/60 via-brand-forest/40 to-brand-cream/10" />
        </div>
         <div className="max-w-3xl mx-auto space-y-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold italic text-brand-gold">Trust by Design.</h1>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream">Security & <span className="text-brand-gold italic">Transparency</span></h2>
          <p className="text-brand-cream/90 text-lg md:text-xl font-light">
             We understand that agricultural investment requires more than just good will—it requires proof. Explore our multi-layered trust ecosystem.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {securityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex gap-8 group"
              >
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-forest transition-all duration-500">
                  {feature.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-brand-forest">{feature.title}</h3>
                  <p className="text-brand-forest/80 font-sans leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Tracking Visual */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 relative z-10">
            <div className="w-20 h-1 bg-brand-gold" />
            <h2 className="text-4xl font-serif font-bold text-brand-cream">Traceability Dashboard</h2>
            <p className="text-brand-cream/70 text-lg leading-relaxed">
              Every animal in our fattening program is tagged with a unique digital ID. This allows us to track feed intake, weight gain, and health intervention history for every single asset accurately.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <Map className="w-6 h-6 text-brand-gold" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold">GPS Sourcing</h4>
                <p className="text-xs text-brand-cream/60">Identify exact origins of every calf purchase.</p>
              </div>
              <div className="space-y-2">
                <Smartphone className="w-6 h-6 text-brand-gold" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold">Investor App</h4>
                <p className="text-xs text-brand-cream/60">Manage your entire portfolio from your smartphone.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center items-center">
             <div className="relative">
                <div className="absolute inset-0 bg-brand-gold blur-3xl opacity-20 animate-pulse" />
                <div className="relative bg-brand-forest p-4 rounded-3xl border border-brand-cream/10 shadow-2xl w-full max-w-sm aspect-[9/16] rotate-3 overflow-hidden">
                   <div className="bg-brand-forest p-6 h-full space-y-6">
                      <div className="flex justify-between items-center">
                         <span className="text-[8px] uppercase font-bold tracking-[0.3em] text-brand-gold">Ar Raa Farms App</span>
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      </div>
                      <div className="space-y-2">
                         <p className="text-[10px] text-brand-cream/50 uppercase">Active Asset</p>
                         <p className="text-xl font-serif">Cow #AR-9421</p>
                      </div>
                      <div className="p-4 bg-brand-cream/5 rounded-sm border border-brand-cream/10">
                         <p className="text-[8px] uppercase mb-4 opacity-50">Growth Performance</p>
                         <div className="flex items-end gap-1 h-20">
                            {[40, 45, 60, 55, 75, 85, 95].map((h, i) => (
                              <div key={i} className="flex-1 bg-brand-gold/60" style={{height: `${h}%`}} />
                            ))}
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-3 bg-brand-cream/5 text-[8px]">
                            <p className="opacity-50">Last Weight</p>
                            <p className="font-bold">342.5 KG</p>
                         </div>
                         <div className="p-3 bg-brand-cream/5 text-[8px]">
                            <p className="opacity-50">Health Status</p>
                            <p className="font-bold text-brand-sage">OPTIMAL</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Reporting Integrity */}
      <section className="py-24 px-6 text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl font-serif font-bold text-brand-forest">Unwavering Reporting Integrity</h3>
            <p className="text-brand-forest/80 font-sans leading-relaxed">
              "At Al Raa Farms, we believe that transparency is not just about showing the good news; it's about accurate, timely reporting that builds long-term confidence. Our investors receive standardized reports that break down weight gains, expenditure vs projection, and market sentiment updates."
            </p>
            <div className="pt-8">
               <button className="border-2 border-brand-forest text-brand-forest px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-forest hover:text-brand-gold transition-all">
                  Sample Investor Report (PDF)
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
