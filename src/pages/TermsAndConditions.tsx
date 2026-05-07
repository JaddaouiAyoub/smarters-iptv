import { motion } from "framer-motion";
import { Zap, ArrowLeft, FileText } from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  { title: "1. Terms And Conditions", text: "By using smartersiptv.ca, you agree to be bound by all terms, conditions and notices contained or referenced herein (the \"Terms of Service\") and the Privacy Policy Statement (\"Privacy Policy\"). We reserve the right to change or discontinue any feature of the Site, including but not limited to the Terms of Service, at any time, by posting revisions onto the Site. You agree to be deemed apprised and bound by any changes to these Terms and Conditions and your continued use of the Site indicates your agreement to the revised terms. You also agree to review this information from time to time as may be required to keep informed of any revisions to the Terms and Conditions. If you do not agree to the terms of this or any revised policy, please do not register as a user or deregister as a user and exit the Site immediately." },
  { title: "2. Links to Third Party Sites & Services", text: "smartersiptv.ca contains links to and from sites operated by third parties. smartersiptv.ca makes no representations whatsoever about any third party content that you may access from the Site or about any web site from which you may access the Site and/or which may be linked to this Site. We provide third party content and links only as a courtesy to our users, and such links / content do not imply our endorsement of any linked site / content. The linked sites / content are not under our influence or control, and we are not responsible for any third party content or the contents of any linked site or subsequent links from that site. Our Privacy Policy is only applicable when you are on this Site. Please review the provider's and the linked site's use agreements and privacy policies, and if you do not agree to be bound by the terms, we recommend that you terminate your use of that service or your visit to the site." },
  { title: "3. Intellectual Property", text: "You acknowledge that all content and materials available on this Site, including the selection, coordination, arrangement and enhancement of such content as well as content original to it are protected by national and international copyrights, trademarks, service marks, patents, patent registration rights, trade secrets, know-how or other proprietary rights and laws and are owned by smartersiptv.ca or our licensors. Unless otherwise indicated, all logos, names, package designs and marks on the Site are trademarks or service marks of, or used under license by, smartersiptv.ca. The use or misuse of any of these materials is strictly prohibited." },
  { title: "4. Lawful Use", text: "You agree to use the Site or its contents for lawful purposes and only as expressly permitted in this Terms of Service and for no other purpose. Except where otherwise noted, you may download, print or view individual pages for noncommercial use only, provided you do not delete or change any of the information, including copyright or trademark notices. You agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from the content or materials on the Site. Systematic retrieval of data or other content from the Site without our written permission is strictly prohibited." },
  { title: "5. User's Grant of License", text: "By posting or submitting content to the Site, you grant smartersiptv.ca and its worldwide licensees the right to use, reproduce, display, perform, adapt, modify, distribute and promote the content in any form, anywhere and for any purpose. You also warrant and represent that you own or otherwise control all of the rights to the content you post or submit to the Site and that our public posting and use of your content will not infringe or violate the rights of any third party. smartersiptv.ca retains the right to monitor, edit or otherwise change your posting or other content submitted to the Site without your permission." },
  { title: "Disclaimer of Warranties", text: "YOU EXPRESSLY AGREE THAT ALL MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE (THE \"CONTENT\") ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" FOR YOUR USE AND THAT YOU USE THIS SITE AND ANY CONTENT YOU CHOOSE TO DOWNLOAD AT YOUR SOLE RISK. smartersiptv.ca DOES NOT IN ANY WAY WARRANT, EITHER EXPRESSLY OR BY IMPLICATION, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE, NON-INFRINGEMENT OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR OTHERWISE. NEITHER smartersiptv.ca NOR ITS PARTNERS MAKE ANY WARRANTY THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SITE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE CONTENT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.", warn: true },
  { title: "6. Limitation of Liability", text: "UNDER NO CIRCUMSTANCES SHALL smartersiptv.ca, NOR ITS PARTNERS, AND THEIR RESPECTIVE EMPLOYEES, OFFICERS, DIRECTORS, SHAREHOLDERS, AGENTS, CONSULTANTS, CONTRACTORS OR LICENSORS, BE LIABLE FOR ANY DAMAGES IN LAW OR IN EQUITY, INCLUDING WITHOUT LIMITATION DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SITE. THIS LIMITATION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER BASIS. OUR LIABILITY IN SUCH JURISDICTIONS SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.", warn: true },
  { title: "7. Indemnification", text: "You agree to defend, indemnify, and hold smartersiptv.ca and its partners and their respective employees, officers, directors, shareholders, agents, consultants and licensees harmless from and against any and all liabilities, claims and expenses, including attorney's fees, that arise from your use or misuse of the Site or the Content therein, including without limitation your violation of the Terms of Service herein." },
  { title: "8. Monitoring Content", text: "smartersiptv.ca shall have the right, but not the obligation, to monitor the content of the Site to determine compliance with this Agreement. smartersiptv.ca shall have the right in its sole discretion to edit, refuse to post or remove any material submitted to or posted on the Site without your permission." },
  { title: "9. Local Laws", text: "By choosing to access the Site from any location other than Panama, you accept full responsibility for compliance with all local laws that are applicable. smartersiptv.ca makes no representation that materials on the Site are appropriate or available for use in locations outside Panama, and accessing them from territories where their contents are illegal is prohibited." },
  { title: "10. Security Precautions", text: "The services and information provided are protected using industry standard security precautions. It is up to you to fully understand the risks and threats of using the public Internet, and to be sufficiently aware of those risks to adequately protect your confidential information." },
  { title: "11. Choice of Law", text: "This Agreement shall be construed in accordance with the laws of Panama, and the Federal laws of Panama applicable therein, without regard to its conflict of laws rules. You expressly agree that any claim or action arising out of or relating to these Terms of Service or your use of the Site shall be filed only in the courts of Panama or the Federal Court of Panama." },
  { title: "12. Integration and Severability", text: "This Terms of Service and our Privacy Policy constitute the entire agreement between smartersiptv.ca and you with respect to the Site. If any provision of this Terms of Service agreement is determined to be invalid or unenforceable, all other provisions shall remain in full force and effect." },
  { title: "13. Unauthorized Use and Termination", text: "You agree to use the Site only for authorized and legal activities. smartersiptv.ca reserves the right, in our sole discretion, to terminate your access to all or part of the Site, with or without notice and for any reason whatsoever." },
  { title: "14. Privacy and Disclosure", text: "You have read and accept the terms of our Privacy Policy." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: "easeOut" as const },
  }),
};

const TermsAndConditions = () => (
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
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Legal Documentation</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          Terms <span className="text-gradient">&</span> Conditions
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our services.
        </motion.p>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        {sections.map((s, i) => (
          <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className={`glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 ${s.warn ? "border-yellow-500/20 hover:border-yellow-500/40" : ""}`}>
            <h2 className={`text-lg md:text-xl font-display font-semibold mb-3 ${s.warn ? "text-yellow-400" : "text-foreground"}`}>{s.title}</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default TermsAndConditions;
