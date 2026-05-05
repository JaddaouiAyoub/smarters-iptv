import { motion } from "framer-motion";
import { Tv, Trophy, Film, Clapperboard, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import contentGrid from "@/assets/content-grid.jpg";
import sportsLive from "@/assets/sports-live.jpg";

const categories = [
  { icon: Tv, label: "Live TV", count: "18,000+" },
  { icon: Trophy, label: "Sports", count: "2,500+" },
  { icon: Film, label: "Movies", count: "55,000+" },
  { icon: Clapperboard, label: "Series", count: "12,000+" },
  { icon: BookOpen, label: "Documentaries", count: "5,000+" },
];

const Showcase = () => (
  <section id="showcase" className="py-20 relative">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Massive <span className="text-gradient">Content Library</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore an ever-growing collection of live TV, sports, movies, series, and documentaries from around the world.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {categories.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 text-center group hover:border-primary/40 transition-colors"
            >
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground">{c.count}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedSection>
          <div className="rounded-xl overflow-hidden border border-border/50">
            <img src={contentGrid} alt="Movies and series library" loading="lazy" width={1200} height={800} className="w-full h-auto" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="rounded-xl overflow-hidden border border-border/50">
            <img src={sportsLive} alt="Live sports streaming" loading="lazy" width={800} height={512} className="w-full h-auto" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Showcase;