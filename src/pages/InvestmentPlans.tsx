import { motion } from 'motion/react';
import { Check, Info, TrendingUp, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Growth Tier",
    range: "$25,000 - $50,000",
    cycle: "12-24 Months Horizon",
    purity: "Entry Level",
    features: [
      "Direct livestock allocation",
      "Cycle-Based Distributions",
      "Reinvestment Options",
      "Full Exit mechanism",
      "Mitigation: Health & Buffer"
    ],
    recommended: false
  },
  {
    name: "Portfolio Tier",
    range: "$50,000 - $150,000",
    cycle: "12-24 Months Horizon",
    purity: "Mid-Level Professional",
    features: [
      "Priority herd allocation",
      "Cycle-Based Distributions",
      "Seamless Reinvestment Options",
      "Dedicated account manager",
      "Expedited Full Exit"
    ],
    recommended: true
  },
  {
    name: "Institutional Tier",
    range: "$150k - $500k+",
    cycle: "12-24 Months Horizon",
    purity: "High Net Worth / Fund",
    features: [
      "Wholesale pricing benefits",
      "Cycle-Based Distributions",
      "Institutional Reinvestment",
      "Audit seat availability",
      "Custom Full Exit schedule"
    ],
    recommended: false
  }
];

export default function InvestmentPlans() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=1920&q=80"
            alt="Premium Agricultural Investment"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-forest/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-forest/60 via-brand-forest/40 to-brand-cream/10" />
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream">
            Investment <span className="text-brand-gold italic">Tiers</span>
          </h1>
          <p className="text-brand-cream/90 text-lg md:text-xl font-light">
            Ethical wealth creation tailored to your capacity. Shariah-compliant asset growth at every level.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-24 px-6 relative z-10 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white border ${plan.recommended ? 'border-brand-gold shadow-2xl scale-105 z-20' : 'border-brand-gold/10'} p-8 md:p-12 h-full flex flex-col`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-forest px-6 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Most Preferred
                  </div>
                )}
                
                <div className="mb-10 text-center">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">{plan.purity}</h3>
                  <h4 className="text-3xl font-serif font-bold text-brand-forest mb-6">{plan.name}</h4>
                  <div className="inline-block px-4 py-2 bg-brand-forest/5 text-brand-forest font-bold text-xl rounded-sm">
                    {plan.range}
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                   <div className="flex items-center gap-3 text-brand-forest/80 font-sans text-sm">
                      <Calendar className="w-4 h-4 text-brand-gold" />
                      <span>Standard Cycle: <b>{plan.cycle}</b></span>
                   </div>
                   <div className="flex items-center gap-3 text-brand-forest/80 font-sans text-sm">
                      <TrendingUp className="w-4 h-4 text-brand-gold" />
                      <span>Target ROI Scope: <b>~ 43.68% Year 1</b></span>
                   </div>
                </div>

                <div className="space-y-4 flex-grow mb-12">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/40 mb-2">Key Privileges</p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-sm font-sans text-brand-forest/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 text-center font-bold tracking-widest text-xs uppercase transition-all rounded-md ${
                    plan.recommended 
                      ? 'bg-brand-forest text-brand-gold hover:bg-brand-sage' 
                      : 'border border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-cream'
                  }`}
                >
                  Request Prospectus
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-brand-cream border border-brand-gold/20 p-8 flex gap-6 items-start">
          <Info className="w-8 h-8 text-brand-gold shrink-0" />
          <div className="space-y-4">
            <h5 className="font-serif font-bold text-xl text-brand-forest">Important Risk Disclosure</h5>
            <p className="text-sm font-sans text-brand-forest/80 leading-relaxed">
              Historical results are not indicative of future performance. As with any Shariah-compliant real asset investment, your capital is subject to market risks, including animal mortality and price fluctuations at meat markets. 
              Al Raa Farms strictly isolates risk via <b>Mitigation: Health</b> (mandatory comprehensive vaccination loops) and <b>Mitigation: Protection</b> (inclusive buffer stock and Takaful insurance). However, as per Islamic Finance, we do not provide fixed return guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Scenario */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-8">
            <Target className="w-16 h-16 text-brand-gold" />
            <h2 className="text-4xl font-serif font-bold text-brand-forest">Target Economics Scenarios</h2>
            <p className="text-brand-forest/70 font-sans text-lg leading-relaxed">
              Based on compiling back-to-back 90-day core fattening cycles under strict nutritional governance.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3] border border-brand-gold/20">
               <img 
                 src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80" 
                 alt="Livestock Investment" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-xl shadow-xl border border-brand-gold/10">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-brand-gold/30">
                    <th className="py-6 px-4 text-left font-serif text-lg text-brand-forest">Metric</th>
                    <th className="py-6 px-4 text-center font-sans text-sm font-bold uppercase tracking-widest text-brand-forest/60">Conservative</th>
                    <th className="py-6 px-4 text-center font-serif text-xl font-bold text-brand-gold">Moderate (Target)</th>
                    <th className="py-6 px-4 text-center font-sans text-sm font-bold uppercase tracking-widest text-brand-forest/60">Optimistic</th>
                  </tr>
                </thead>
                <tbody className="text-brand-forest">
                  <tr className="border-b border-brand-gold/10 hover:bg-brand-gold/5 transition-colors">
                    <td className="py-6 px-4 text-left font-bold font-sans text-sm uppercase tracking-wider text-brand-forest/70">Weight Gain (90-Day Cycle)</td>
                    <td className="py-6 px-4 text-center font-sans">15 kg</td>
                    <td className="py-6 px-4 text-center font-sans font-bold text-lg text-brand-forest">20 kg - 25 kg</td>
                    <td className="py-6 px-4 text-center font-sans">30 kg+</td>
                  </tr>
                  <tr className="border-b border-brand-gold/10 hover:bg-brand-gold/5 transition-colors">
                    <td className="py-6 px-4 text-left font-bold font-sans text-sm uppercase tracking-wider text-brand-forest/70">Annualized Capital ROI</td>
                    <td className="py-6 px-4 text-center font-sans">25.0%</td>
                    <td className="py-6 px-4 text-center font-sans font-bold text-xl text-brand-gold block-pulse pt-7">43.68%</td>
                    <td className="py-6 px-4 text-center font-sans">50.0%+</td>
                  </tr>
                  <tr className="border-b border-brand-gold/10 hover:bg-brand-gold/5 transition-colors">
                    <td className="py-6 px-4 text-left font-bold font-sans text-sm uppercase tracking-wider text-brand-forest/70">Payback Horizon</td>
                    <td className="py-6 px-4 text-center font-sans">24 Months</td>
                    <td className="py-6 px-4 text-center font-sans font-bold text-lg text-brand-forest">12 - 18 Months</td>
                    <td className="py-6 px-4 text-center font-sans">12 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-brand-forest/40 uppercase tracking-widest font-sans mt-8 text-center">
              *Returns calculated after operational expenses and Mudarabah profit formulation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
