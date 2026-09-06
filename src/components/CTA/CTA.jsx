import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaWhatsapp,
} from "react-icons/fa";

import "./CTA.css";


export default function CTA() {
  const whatsappMessage = encodeURIComponent(
    `Hello Fine Tech Creatives,

I would like to discuss how you can help grow my business.`
  );

  return (
    <section
      id="final-cta"
      className="final-cta-section"
    >
      {/* Background */}

      <div className="final-cta-grid" />

      <div className="final-cta-glow final-cta-glow-left" />

      <div className="final-cta-glow final-cta-glow-right" />


      <div className="final-cta-container">

        <motion.div
          className="final-cta-box"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* Decorative lights */}

          <div className="final-cta-top-light" />

          <div className="final-cta-orbit final-cta-orbit-one" />

          <div className="final-cta-orbit final-cta-orbit-two" />


          {/* Content */}

          <div className="final-cta-content">

            <span className="final-cta-eyebrow">
              YOUR NEXT STEP
            </span>

            <h2>
              Ready To Grow
              <span>
                Your Business?
              </span>
            </h2>

            <p>
              Let’s discuss your goals and build a practical digital
              strategy that helps your business get found, get chosen
              and grow.
            </p>


            {/* Trust points */}

            <div className="final-cta-trust">

              <div>

                <span>
                  <FaCheck />
                </span>

                Free initial consultation

              </div>


              <div>

                <span>
                  <FaCheck />
                </span>

                Clear recommendations

              </div>


              <div>

                <span>
                  <FaCheck />
                </span>

                No obligation to proceed

              </div>

            </div>


            {/* Actions */}

            <div className="final-cta-actions">

              <motion.a
                href="#audit"
                className="final-cta-primary"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>
                  Get Your Free Audit
                </span>

                <FaArrowRight />
              </motion.a>


              <motion.a
                href={`https://wa.me/254101709129?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="final-cta-secondary"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <FaWhatsapp />

                <span>
                  Chat on WhatsApp
                </span>
              </motion.a>

            </div>


            <p className="final-cta-response">
              We usually respond within 30 minutes during business hours.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}