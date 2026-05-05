import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import Devices from "@/components/Devices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Features />
    <Showcase />
    <Pricing />
    <Devices />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
