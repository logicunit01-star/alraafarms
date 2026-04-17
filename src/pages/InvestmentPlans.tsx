import { motion } from 'motion/react';
import { Check, Info, TrendingUp, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Growth Tier",
    range: "$5,000 - $25,000",
    cycle: "6-9 Months",
    purity: "Entry Level",
    features: [
      "Direct livestock allocation",
      "Quarterly status reports",
      "Shared profit model",
      "Exit at end of cycle",
      "Standard risk exposure"
    ],
    recommended: false
  },
  {
    name: "Portfolio Tier",
    range: "$25,001 - $100,000",
    cycle: "9 Months",
    purity: "Mid-Level Professional",
    features: [
      "Priority herd allocation",
      "Monthly operation reports",
      "CCTV access for herd",
      "Dedicated account manager",
      "Rolling cycle options"
    ],
    recommended: true
  },
  {
    name: "Institutional Tier",
    range: "$100k - $500k+",
    cycle: "Flexible / Long-term",
    purity: "High Net Worth / Fund",
    features: [
      "Wholesale pricing benefits",
      "Custom fattening schedules",
      "Field visit privileges",
      "Audit seat availability",
      "Export priority participation"
    ],
    recommended: false
  }
];

export default function InvestmentPlans() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 bg-brand-forest text-brand-cream text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <img src="https://picsum.photos/seed/money-bg/1920/1080?grayscale" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Investment Tiers</h1>
          <p className="text-brand-cream/70 text-lg md:text-xl">
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
                   <div className="flex items-center gap-3 text-brand-sage text-sm">
                      <Calendar className="w-4 h-4 text-brand-gold" />
                      <span>Standard Cycle: <b>{plan.cycle}</b></span>
                   </div>
                   <div className="flex items-center gap-3 text-brand-sage text-sm">
                      <TrendingUp className="w-4 h-4 text-brand-gold" />
                      <span>Target ROI Scope: <b>18% - 22%</b></span>
                   </div>
                </div>

                <div className="space-y-4 flex-grow mb-12">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/40 mb-2">Key Privileges</p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-sage">{feature}</span>
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
            <p className="text-sm text-brand-sage leading-relaxed">
              Historical results are not indicative of future performance. As with any Shariah-compliant real asset investment, your capital is subject to market risks, including animal mortality and price fluctuations at meat markets. Al Raa Farms mitigates these through scientific management and insurance, but does not provide fixed return guarantees as per Islamic Finance principles.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Scenario */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <Target className="w-12 h-12 text-brand-gold mx-auto" />
            <h2 className="text-4xl font-serif font-bold text-brand-forest">Target Economics Scenarios</h2>
            <p className="text-brand-sage">Based on industry-standard fattening cycles (6 months).</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-brand-gold/30">
                  <th className="py-6 px-4 text-left font-serif text-lg">Metric</th>
                  <th className="py-6 px-4 text-center font-serif text-lg text-brand-sage italic">Conservative</th>
                  <th className="py-6 px-4 text-center font-serif text-lg text-brand-gold">Moderate (Target)</th>
                  <th className="py-6 px-4 text-center font-serif text-lg text-brand-sage italic">Optimistic</th>
                </tr>
              </thead>
              <tbody className="text-brand-text">
                <tr className="border-b border-brand-gold/10">
                  <td className="py-6 px-4 text-left font-bold text-sm uppercase tracking-wider">Weight Gain (Daily)</td>
                  <td className="py-6 px-4 text-center">0.7 kg</td>
                  <td className="py-6 px-4 text-center font-bold">0.9 kg</td>
                  <td className="py-6 px-4 text-center">1.2 kg</td>
                </tr>
                <tr className="border-b border-brand-gold/10">
                  <td className="py-6 px-4 text-left font-bold text-sm uppercase tracking-wider">Feed Conversion Ratio</td>
                  <td className="py-6 px-4 text-center">7.5:1</td>
                  <td className="py-6 px-4 text-center font-bold">6.0:1</td>
                  <td className="py-6 px-4 text-center">5.0:1</td>
                </tr>
                <tr className="border-b border-brand-gold/10">
                  <td className="py-6 px-4 text-left font-bold text-sm uppercase tracking-wider">Net Cycle Return</td>
                  <td className="py-6 px-4 text-center">7% - 9%</td>
                  <td className="py-6 px-4 text-center font-bold text-brand-gold">10% - 12%</td>
                  <td className="py-6 px-4 text-center">14% - 16%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-brand-forest/40 uppercase tracking-widest italic pt-4">
            *Returns calculated after operational expenses and shared profit allocation.
          </p>
        </div>
      </section>
    </div>
  );
}
