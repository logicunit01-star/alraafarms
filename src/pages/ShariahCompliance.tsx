import { motion } from 'motion/react';
import { Landmark, Scale, HandIcon, HeartOff, CheckCircle2, FileText } from 'lucide-react';

const principles = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Asset-Backed Trading",
    desc: "Investment is directed toward physical livestock. We do not trade in debt, options, or speculative instruments."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Mudarabah Structure",
    desc: "A partnership model where the investor provides capital (Rab-ul-Maal) and Al Raa Farms provides expertise (Mudarib)."
  },
  {
    icon: <HandIcon className="w-8 h-8" />,
    title: "Equitable Risk Sharing",
    desc: "Profits are shared according to a pre-agreed ratio. Any financial loss is borne by the capital provider, while the manager loses their effort and time, as per Shariah law."
  },
  {
    icon: <HeartOff className="w-8 h-8" />,
    title: "Elimination of Riba",
    desc: "There is no fixed return or guaranteed interest. All returns are the result of genuine trading and value-adding economic activity."
  }
];

export default function ShariahCompliance() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block border border-brand-gold px-4 py-1 text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-4">
            Certified Framework
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Shariah Compliance</h1>
          <p className="text-brand-cream/70 text-lg md:text-xl">
            Integrity is our primary asset. Every operational phase is audited to ensure absolute alignment with Islamic Finance principles.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-10 border border-brand-gold/10 shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full transition-all group-hover:w-32 group-hover:h-32" />
                <div className="relative z-10 space-y-6">
                  <div className="text-brand-gold">{principle.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-brand-forest">{principle.title}</h3>
                  <p className="text-brand-sage leading-relaxed italic">
                    {principle.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Husbandry */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://picsum.photos/seed/islamic-pattern/1920/1080" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Ethical Animal Husbandry (Tayyib)</h2>
          <p className="text-lg text-brand-cream/80 leading-relaxed italic">
            "Shariah compliance extends beyond financial contracts to the treatment of the animals themselves. We ensure our livestock is raised in environments that respect their nature, provided with Tayyib (pure/wholesome) feed, and managed with compassion."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <CheckCircle2 className="w-6 h-6 text-brand-gold mx-auto" />
              <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">Hormone Free</p>
            </div>
            <div className="space-y-2">
              <CheckCircle2 className="w-6 h-6 text-brand-gold mx-auto" />
              <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">Pure Feed Only</p>
            </div>
            <div className="space-y-2">
              <CheckCircle2 className="w-6 h-6 text-brand-gold mx-auto" />
              <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">Zero Neglect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Footer */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-brand-gold/10 p-12 text-center border-2 border-brand-gold/20 border-dashed">
          <FileText className="w-12 h-12 text-brand-gold mx-auto mb-6" />
          <h3 className="text-2xl font-serif font-bold text-brand-forest mb-4">Fatwa & Shariah Audit</h3>
          <p className="text-brand-sage mb-8 leading-relaxed">
            Our operational manuals and Mudarabah contracts have been reviewed and approved by certified Shariah Scholars specializing in Agriculture and Commodity Trading.
          </p>
          <button className="bg-brand-forest text-brand-gold px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-sage transition-colors rounded-sm">
            Request Certification Papers
          </button>
        </div>
      </section>
    </div>
  );
}
