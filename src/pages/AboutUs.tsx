import { motion } from "framer-motion";
import { Zap, ArrowLeft, Info, Tv, Headphones, CreditCard, Smartphone, LayoutDashboard, ListChecks } from "lucide-react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: ListChecks, title: "Subscription Plans", desc: "Various subscription plans with different pricing and channel options for customers to choose from." },
  { icon: Tv, title: "Channel List", desc: "A comprehensive list of channels available with each subscription plan, including local, regional, and international channels." },
  { icon: Smartphone, title: "Device Compatibility", desc: "Information on compatible devices including smart TVs, streaming boxes, and mobile devices." },
  { icon: Headphones, title: "Technical Support", desc: "Technical support for customers who experience issues, including troubleshooting guides and customer service assistance." },
  { icon: CreditCard, title: "Payment Options", desc: "Various payment options including credit card, PayPal, and other secure methods." },
  { icon: LayoutDashboard, title: "User Interface", desc: "A user-friendly interface that makes it easy to navigate and select the best subscription plan for your needs." },
];

const AboutUs = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="glass-strong shadow-lg shadow-background/50 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Zap className="w-7 h-7 text-primary" />
          <span className="font-display font-bold text-xl text-foreground">smarters-iptv<span className="text-primary">.ca</span></span>
        </a>
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>
      </div>
    </motion.header>

    {/* Hero Section */}
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
          <Info className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">#1 USA Guaranteed IPTV Store</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          About <span className="text-gradient">Us</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
          smartersiptv.ca is a website that specializes in selling Internet Protocol television (IPTV) services, a technology that allows television programming to be delivered over the internet.
        </motion.p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass rounded-xl p-8 md:p-10 text-center hover:border-primary/30 transition-all duration-300">
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            smartersiptv.ca is your premier destination for high-quality IPTV services. We specialize in delivering an unparalleled television experience over the internet, offering thousands of channels and on-demand content to viewers worldwide. Here are some key elements of our services:
          </p>
        </motion.div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
