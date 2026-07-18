import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio/Portfolio";
import Results from "../components/Results";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials/Testimonials";
import AuditForm from "../components/AuditForm";
import WhatsAppButton from "../components/WhatsAppButton";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import { companyData } from "../config/companyData";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <Process />
      <Portfolio />
      <Results />
      <Packages />
      <Testimonials />
      <AuditForm />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}