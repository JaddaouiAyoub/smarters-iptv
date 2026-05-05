import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => (
  <section className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-radial" />
    <div className="container mx-auto px-4 relative z-10">
      <AnimatedSection>
        <div className="glass-strong rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Start Streaming <span className="text-gradient">Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join 50,000+ satisfied customers. Get instant access to 18,000+ channels, 85,000+ movies & series. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan-strong"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-semibold hover:border-primary/50 transition-colors"
              >
                <Play className="w-4 h-4 text-primary" /> Try Free Trial
              </motion.a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;