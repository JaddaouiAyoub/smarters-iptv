import { motion } from "framer-motion";
import { Zap, ArrowLeft, ShieldCheck, Cookie, FileSearch, Baby, UserCheck, Database, Globe } from "lucide-react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const sections = [
  { title: "Consent", text: "By using our website, you hereby consent to our Privacy Policy and agree to its terms." },
  { title: "Information We Collect", text: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide." },
  { title: "How We Use Your Information", list: [
    "Provide, operate, and maintain our website",
    "Improve, personalize, and expand our website",
    "Understand and analyze how you use our website",
    "Develop new products, services, features, and functionality",
    "Communicate with you, including for customer service, updates and marketing",
    "Send you emails",
    "Find and prevent fraud",
  ]},
  { title: "Log Files", text: "smartersiptv.ca follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable." },
  { title: "Cookies and Web Beacons", text: "Like any other website, smartersiptv.ca uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.", icon: Cookie },
  { title: "Third Party Privacy Policies", text: "smartersiptv.ca's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. You can choose to disable cookies through your individual browser options." },
  { title: "CCPA Privacy Rights", text: "Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data collected. Request that a business delete any personal data collected. Request that a business that sells a consumer's personal data, not sell the consumer's personal data. If you make a request, we have one month to respond to you.", icon: Globe },
  { title: "GDPR Data Protection Rights", list: [
    "The right to access – You have the right to request copies of your personal data.",
    "The right to rectification – You have the right to request that we correct any inaccurate information.",
    "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
    "The right to restrict processing – You have the right to request that we restrict the processing of your personal data.",
    "The right to object to processing – You have the right to object to our processing of your personal data.",
    "The right to data portability – You have the right to request that we transfer the data we have collected to another organization, or directly to you.",
  ], icon: Database },
  { title: "Children's Information", text: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. smartersiptv.ca does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately.", icon: Baby },
];

const defaultIcons = [UserCheck, FileSearch, ShieldCheck, FileSearch, Cookie, Globe, Globe, Database, Baby];

const PrivacyPolicy = () => (
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
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Your Data Matters</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          Privacy <span className="text-gradient">Policy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This Privacy Policy document contains types of information that is collected and recorded by smartersiptv.ca and how we use it.
        </motion.p>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        {sections.map((s, i) => {
          const Icon = s.icon || defaultIcons[i];
          return (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
              className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10"><Icon className="w-5 h-5 text-primary" /></div>
                <h2 className="text-lg md:text-xl font-display font-semibold text-foreground">{s.title}</h2>
              </div>
              {s.text && <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.text}</p>}
              {s.list && (
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  {s.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPolicy;
