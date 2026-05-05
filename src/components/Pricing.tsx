import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const connections = [1, 2, 3, 4];

const plans = [
  { duration: "1 Month", prices: [14.99, 19.99, 24.99, 29.99], oldPrices: [24.99, 34.99, 44.99, 54.99], popular: false },
  { duration: "3 Months", prices: [29.99, 39.99, 49.99, 59.99], oldPrices: [59.99, 79.99, 99.99, 119.99], popular: false },
  { duration: "6 Months", prices: [44.99, 59.99, 74.99, 89.99], oldPrices: [89.99, 119.99, 149.99, 179.99], popular: true },
  { duration: "12 Months", prices: [59.99, 79.99, 99.99, 119.99], oldPrices: [149.99, 199.99, 249.99, 299.99], popular: false },
];

const features = [
  "18,000+ Live Channels",
  "85,000+ Movies & Series",
  "Ultra HD / 4K Quality",
  "Anti-Freeze Technology",
  "All Devices Supported",
  "24/7 Premium Support",
  "EPG (TV Guide)",
  "Free Updates",
];

const Pricing = () => {
  const [connIdx, setConnIdx] = useState(0);

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Select the number of connections and the plan that suits you best. All plans include our full channel lineup.
          </p>

          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl glass">
            {connections.map((c, i) => (
              <button
                key={c}
                onClick={() => setConnIdx(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  connIdx === i
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c} {c === 1 ? "Connection" : "Connections"}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.duration} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-2xl p-6 h-full flex flex-col relative ${
                  plan.popular
                    ? "glass border-primary/60 glow-cyan"
                    : "glass hover:border-primary/30 transition-colors"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Star className="w-3 h-3" /> BEST VALUE
                  </div>
                )}

                <h3 className="font-display font-bold text-lg text-foreground mb-1">{plan.duration}</h3>
                <p className="text-xs text-muted-foreground mb-4">{connections[connIdx]} connection{connections[connIdx] > 1 ? "s" : ""}</p>

                <div className="mb-6">
                  <span className="text-sm text-muted-foreground line-through">${plan.oldPrices[connIdx]}</span>
                  <div className="flex items-end gap-1">
                    <span className="font-display font-bold text-4xl text-foreground">${plan.prices[connIdx]}</span>
                    <span className="text-sm text-muted-foreground mb-1">CAD</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`w-full py-3 rounded-lg font-semibold text-sm text-center transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90 glow-cyan"
                      : "glass text-foreground hover:border-primary/50"
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