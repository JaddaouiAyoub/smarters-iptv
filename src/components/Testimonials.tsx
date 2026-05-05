import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Marc D.",
    review: "Best IPTV service I've ever used. Crystal clear quality and zero buffering during live sports. Highly recommend!",
    stars: 5,
    initials: "MD",
  },
  {
    name: "Sarah L.",
    review: "The channel selection is incredible. I cancelled my cable and saved over $150/month. Setup was super easy!",
    stars: 5,
    initials: "SL",
  },
  {
    name: "James T.",
    review: "Customer support is outstanding. Had an issue at 2 AM and they resolved it within minutes. Great service!",
    stars: 5,
    initials: "JT",
  },
  {
    name: "Émilie R.",
    review: "I've tried many IPTV providers and this is by far the most reliable. 4K quality on my Smart TV is amazing.",
    stars: 5,
    initials: "ER",
  },
];

const Testimonials = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          What Our <span className="text-gradient">Customers Say</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust smarters-iptv.ca for their entertainment.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-6 h-full"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  {t.initials}
                </div>
                <span className="font-semibold text-foreground text-sm">{t.name}</span>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;