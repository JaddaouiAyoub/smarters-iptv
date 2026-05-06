import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroDevices from "@/assets/hero-devices.jpg";

const counters = [
  { label: "Live Channels", target: 28000, suffix: "+" },
  { label: "Movies ", target: 90000, suffix: "+" },
  { label: "Series & Shows", target: 20000, suffix: "+" },
  { label: "Active Users", target: 6500, suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-display font-bold text-2xl md:text-3xl text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial" />
    <div className="absolute inset-0 bg-grid opacity-20" />

    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            #1 IPTV Provider in Canada
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            smarters iptv canada, THE FUTURE OF LIVE TV,{" "}
            <span className="text-gradient">One Subscription</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            With IPTV Canada, experience our iptv smarters pro subscription and don’t miss any of the amazing moments. more than +140,000 channels, movies, series, for all age groups.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan"
            >
              Start Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-semibold hover:border-primary/50 transition-colors"
            >
              <Play className="w-4 h-4 text-primary" /> Free Trial
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
            {counters.map((c) => (
              <div key={c.label} className="text-center lg:text-left">
                <Counter target={c.target} suffix={c.suffix} />
                <p className="text-xs text-muted-foreground mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="animate-float">
            <img
              src={heroDevices}
              alt="IPTV streaming on multiple devices"
              width={1024}
              height={768}
              className="w-full rounded-2xl"
            />
          </div>
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;