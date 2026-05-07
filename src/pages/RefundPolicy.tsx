import { motion } from "framer-motion";
import { Zap, ArrowLeft, RotateCcw, Clock, CreditCard, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const RefundPolicy = () => (
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

    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
          <RotateCcw className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Customer Protection</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          Refund <span className="text-gradient">Policy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We believe in our products 100%. If you are not happy with your purchase, we are more than happy to help.
        </motion.p>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        {/* How to request */}
        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><RotateCcw className="w-5 h-5 text-primary" /></div>
            <h2 className="text-lg md:text-xl font-display font-semibold text-foreground">How to Request a Refund</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Please make a note of your transaction order ID with subject: "Request and refund" and describe in your e-mail the issues you are facing and the reason for this request. In some cases you may need to send us proofs and we will send you proofs as well of our work to explain our point of view and our decision in more detail and transparency.
          </p>
        </motion.div>

        {/* Conditions */}
        <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-primary/10"><AlertCircle className="w-5 h-5 text-primary" /></div>
            <h2 className="text-lg md:text-xl font-display font-semibold text-foreground">Conditions</h2>
          </div>
          <ul className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>We can't provide refunds due to technical issues unless you allow us to adequately try to solve them. If we are unable to resolve your issue within <strong className="text-foreground">48 hours</strong>, we will provide a refund.</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Refunds may only be issued within <strong className="text-foreground">72 hours</strong> of the purchase date. After 72 hours no refunds can be processed.</span>
            </li>
            <li className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>If you paid using credit cards, refunds are generally processed within <strong className="text-foreground">20 to 31 working days</strong>. In some cases it may take up to 90 days.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Purchases made less than 72 hours ago will be refunded completely. All other refund requests will be returned partially according to the used period of the subscription.</span>
            </li>
          </ul>
        </motion.div>

        {/* Will NOT refund */}
        <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass rounded-xl p-6 md:p-8 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-yellow-500/10"><XCircle className="w-5 h-5 text-yellow-400" /></div>
            <h2 className="text-lg md:text-xl font-display font-semibold text-yellow-400">We Will Not Refund If</h2>
          </div>
          <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">The User is unable to setup their own box and system</h3>
              <p>We will provide our best support to setup their boxes, devices, apps and system in all cases of assistance request. Our support is limited to pre-defined steps for configurations of devices.</p>
            </div>
            <div className="border-t border-border/30 pt-5">
              <h3 className="font-semibold text-foreground mb-2">Some Channels Are Freezing, Buffering Or Not Working Rarely</h3>
              <p className="mb-3">Though almost all of our servers are stable, sometimes some channels do freeze or don't work due to various reasons but it's not permanent. These issues are usually temporary and caused by:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Customer internet fluctuations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Issue with the box/apps/customer setup</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Your ISP has an issue</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Channel is down from server end</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span> Customer changed their mind or wanted to switch servers</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass rounded-xl p-6 md:p-8 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-emerald-500/10"><CheckCircle className="w-5 h-5 text-emerald-400" /></div>
            <h2 className="text-lg md:text-xl font-display font-semibold text-emerald-400">Our Guarantee</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            In case you can't watch your IPTV subscription for 48 hours+ because of server issues or any other problems caused by us, we will completely refund the package price or add all lost time on top of your subscription for free + some extra bonus we can negotiate together.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center glass rounded-xl p-6 md:p-8">
          <p className="text-muted-foreground mb-2">If you have any questions about our Refunds Policy please contact us:</p>
          <a href="mailto:contact@smartersiptv.ca" className="text-primary hover:underline font-semibold">contact@smartersiptv.ca</a>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default RefundPolicy;
