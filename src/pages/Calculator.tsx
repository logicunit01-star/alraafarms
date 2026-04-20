import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalculatorIcon, Calendar, TrendingUp, DollarSign, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const durations = [
  { months: 6, rate: 0.2184, label: '6 Months' },
  { months: 12, rate: 0.4368, label: '1 Year' },
  { months: 18, rate: 0.7212, label: '18 Months' },
  { months: 24, rate: 1.0644, label: '2 Years' },
  { months: 36, rate: 1.965, label: '3 Years' },
];

export default function Calculator() {
  const [amount, setAmount] = useState<number>(10000);
  const [selectedDuration, setSelectedDuration] = useState(durations[1]);

  const results = useMemo(() => {
    const roiAmount = amount * selectedDuration.rate;
    const totalReturn = amount + roiAmount;
    const monthlyReturn = roiAmount / selectedDuration.months;

    return {
      roiAmount,
      totalReturn,
      monthlyReturn,
      roiPercentage: Number((selectedDuration.rate * 100).toFixed(2))
    };
  }, [amount, selectedDuration]);

  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-brand-forest text-brand-cream py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-brand-forest-light/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-brand-gold/20"
          >
            <TrendingUp className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium tracking-wide text-brand-gold">Project Your Growth</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
          >
            Livestock Investment <span className="text-brand-gold">ROI Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-cream/80 max-w-2xl mx-auto font-light"
          >
            Estimate your potential returns based on Shariah-compliant high-yield livestock farming. Calculate exactly what your capital could generate.
          </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 border border-brand-gold/10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Column */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-brand-forest font-semibold text-lg flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-brand-gold" />
                    Investment Amount
                  </label>
                  <span className="text-2xl font-bold text-brand-forest">
                    ${amount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-cream rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-sm text-brand-forest/60 mt-2">
                  <span>$25,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              <div>
                <label className="text-brand-forest font-semibold text-lg flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  Investment Duration
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {durations.map((duration) => (
                    <button
                      key={duration.months}
                      onClick={() => setSelectedDuration(duration)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 border ${
                        selectedDuration.months === duration.months
                          ? 'bg-brand-forest text-brand-gold border-brand-forest shadow-md'
                          : 'bg-brand-cream/50 text-brand-forest hover:bg-brand-cream border-transparent'
                      }`}
                    >
                      {duration.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-brand-cream/50 p-6 rounded-lg border border-brand-gold/10 text-sm text-brand-forest/80 space-y-3">
                <p className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>These compounding projections are based on our historic 90-day cycle performance scaling model and 43.68% Year 1 target.</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>All investments are 100% Shariah-compliant under the Mudarabah model.</span>
                </p>
              </div>
            </div>

            {/* Output Column */}
            <div className="bg-brand-forest text-white rounded-xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-brand-gold text-lg font-medium mb-1">Estimated Net ROI</h3>
                  <div className="text-4xl lg:text-5xl font-serif font-bold mb-2">
                    ${results.roiAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="inline-block bg-brand-gold/20 text-brand-gold px-3 py-1 rounded text-sm font-semibold">
                    +{results.roiPercentage}% Return
                  </div>
                </div>

                <div className="w-full h-px bg-white/10"></div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Total Expected Value</p>
                    <p className="text-2xl font-bold text-white">
                      ${results.totalReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Est. Monthly Growth</p>
                    <p className="text-2xl font-bold text-white">
                      ${results.monthlyReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <Link
                  to="/contact"
                  className="w-full bg-brand-gold text-brand-forest hover:bg-white px-8 py-4 rounded-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 group"
                >
                  Start Investing Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-center text-xs text-white/50 mt-4">
                  Terms and conditions apply. Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
