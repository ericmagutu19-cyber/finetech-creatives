import {
  lazy,
  Suspense,
} from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";


/* ==========================================================
   LAZY-LOADED PAGE SECTIONS

   Navbar and Hero remain eager because they are visible
   immediately when the page opens.
========================================================== */

const Services = lazy(() =>
  import("../components/Services/Services")
);

const WhyChooseUs = lazy(() =>
  import(
    "../components/WhyChooseUs/WhyChooseUs"
  )
);

const Stats = lazy(() =>
  import("../components/Results/Stats")
);

const Process = lazy(() =>
  import("../components/Process/Process")
);

const FeaturedCaseStudy = lazy(() =>
  import(
    "../components/FeaturedCaseStudy/FeaturedCaseStudy"
  )
);

const Portfolio = lazy(() =>
  import("../components/Portfolio/Portfolio")
);

const Results = lazy(() =>
  import("../components/Results/Results")
);

const Packages = lazy(() =>
  import("../components/Packages/Packages")
);

const Testimonials = lazy(() =>
  import(
    "../components/Testimonials/Testimonials"
  )
);

const AuditForm = lazy(() =>
  import("../components/Audit/AuditForm")
);

const CTA = lazy(() =>
  import("../components/CTA/CTA")
);

const Footer = lazy(() =>
  import("../components/Footer/Footer")
);

const WhatsAppButton = lazy(() =>
  import(
    "../components/shared/WhatsAppButton"
  )
);


/* ==========================================================
   SECTION FALLBACK

   This reserves a little space while the lower section
   bundle is loading and avoids a blank-page appearance.
========================================================== */

function SectionFallback() {
  return (
    <div
      className="section-loading"
      aria-hidden="true"
    />
  );
}


/* ==========================================================
   HOME PAGE
========================================================== */

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <Services />

          <WhyChooseUs />

          <Stats />

          <Process />

          <FeaturedCaseStudy />

          <Portfolio />

          <Results />

          <Packages />

          <Testimonials />

          <AuditForm />

          <CTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />

        <WhatsAppButton />
      </Suspense>
    </>
  );
}