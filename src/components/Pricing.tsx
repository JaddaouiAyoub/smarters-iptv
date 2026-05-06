import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const connections = [1, 2, 3, 4];

// Mapping des features par nombre de connexions
const featuresByConnection = {
  1: [
    "Instant Activation!",
    "Free update (TVs and VODs)",
    "Fast & Stable",
    "Always Uptime Server",
    "4K, UHD, FHD, HD Channels",
    "Support All Device",
    "24/7 Live Chat Support",
  ],
  2: [
    "2 connections",
    "Instant Activation!",
    "Free update (TVs and VODs)",
    "Fast & Stable",
    "Always Uptime Server",
    "4K, UHD, FHD, HD Channels",
    "Support All Device",
    "24/7 Live Chat Support",
  ],
  3: [
    "3 connections",
    "Instant Activation!",
    "Free update (TVs and VODs)",
    "Fast & Stable",
    "Always Uptime Server",
    "4K, UHD, FHD, HD Channels",
    "Support All Device",
    "24/7 Live Chat Support",
  ],
  4: [
    "High Performance Server",
    "Instant Activation!",
    "Free update (TVs and VODs)",
    "Fast & Stable",
    "Always Uptime Server",
    "4K, UHD, FHD, HD Channels",
    "Support All Device",
    "24/7 Live Chat Support",
  ],
};

const plans = [
  { duration: "1 Month", prices: [19.00, 30.00, 39.00, 51.00], oldPrices: [29.00, 38.00, 57.00, 79.00], popular: false },
  { duration: "3 Months", prices: [29.00, 48.00, 69.00, 89.00], oldPrices: [57.00, 87.00, 117.00, 107.00], popular: false },
  { duration: "6 Months", prices: [49.00, 80.00, 119.00, 139.00], oldPrices: [114.00, 174.00, 234.00, 214.00], popular: false },
  { duration: "12 Months", prices: [79.00, 129.00, 179.00, 229.00], oldPrices: [228.00, 348.00, 468.00, 328.00], popular: true },
];

const Pricing = () => {
  const [connIdx, setConnIdx] = useState(0);

  // Récupérer les features selon le nombre de connexions actuel
  const currentFeatures = featuresByConnection[connections[connIdx]];

  return (
    <section id="pricing" className="py-20 relative bg-black text-white md:ml-15">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-white">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>

          <div className="grid grid-cols-2 md:inline-flex items-center gap-2 p-1.5 rounded-xl glass bg-white/5 mb-8 w-full max-w-[340px] md:max-w-none mx-auto md:w-auto">
            {connections.map((c, i) => (
              <button
                key={c}
                onClick={() => setConnIdx(i)}
                className={`px-3 md:px-5 py-2.5 rounded-lg text-[13px] md:text-sm font-medium transition-all ${connIdx === i
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-white"
                  }`}
              >
                {c} {c === 1 ? "Conn" : "Conns"} <span className="hidden min-[400px]:inline">ection{c === 1 ? "" : "s"}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.duration} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-8 h-full flex flex-col relative border ${plan.popular
                    ? "bg-white/10 border-primary/60"
                    : "bg-white/5 border-white/10"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider">
                    <Star className="w-3 h-3 fill-current" /> BEST VALUE
                  </div>
                )}

                <h3 className="font-display font-bold text-4xl mb-2 text-center">{plan.duration}</h3>

                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-start gap-1">
                    <span className="text-xl font-medium mt-2">$</span>
                    <span className="text-8xl font-bold tracking-tight">
                      {Math.floor(plan.prices[connIdx])}
                    </span>
                    <div className="flex flex-col items-start ml-2 mt-2">
                      <span className="text-2xl font-bold">.{(plan.prices[connIdx] % 1).toFixed(2).substring(2)}</span>
                      <span className="text-xs text-muted-foreground font-semibold">CAD</span>
                    </div>
                  </div>

                  <div className="mt-4 relative inline-block text-2xl font-bold text-white/90">
                    <span className="mr-1">$</span>
                    <span className="mr-1">CA</span>
                    <span>{plan.oldPrices[connIdx]}</span>
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform -translate-y-1/2"></div>
                  </div>

                  <p className="text-cyan-400 text-sm font-medium mt-4">
                    {connections[connIdx]} Connection{connections[connIdx] > 1 ? "s" : ""}
                  </p>
                </div>

                {/* Features List Dynamique */}
                <ul className="space-y-4 mb-8 flex-1 flex flex-col items-center">
                  <div className="inline-flex flex-col items-start">
                    {currentFeatures.map((f, index) => (
                      <li key={index} className="flex items-center gap-3 text-[14px] text-gray-300 py-1">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="whitespace-nowrap">{f}</span>
                      </li>
                    ))}
                  </div>
                </ul>

                <a
                  href="#"
                  className={`w-full py-3 rounded-lg font-semibold text-sm text-center transition-all ${plan.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  Buy Now
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;