import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";

import Lightbox from "../shared/Lightbox";
import CaseStudyModal from "../shared/CaseStudyModal";

import {
  featuredProject,
} from "../../data/portfolioProjects";

import "./FeaturedCaseStudy.css";


export default function FeaturedCaseStudy() {

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [showCaseStudy, setShowCaseStudy] =
    useState(false);


  const gallery =
    featuredProject.gallery || [
      featuredProject.image,
    ];


  const openGallery = (index = 0) => {

    setCurrentIndex(index);

    setSelectedImage(
      gallery[index]
    );

  };


  const closeGallery = () => {

    setSelectedImage(null);

    setCurrentIndex(0);

  };


  const showNextImage = () => {

    const nextIndex =
      (currentIndex + 1) %
      gallery.length;

    setCurrentIndex(nextIndex);

    setSelectedImage(
      gallery[nextIndex]
    );

  };


  const showPreviousImage = () => {

    const previousIndex =
      (
        currentIndex -
        1 +
        gallery.length
      ) %
      gallery.length;

    setCurrentIndex(previousIndex);

    setSelectedImage(
      gallery[previousIndex]
    );

  };


  return (
    <>
      <section
        id="featured-case-study"
        className="featured-case-section"
      >
        <div className="featured-case-grid-bg" />

        <div className="featured-case-glow" />


        <div className="featured-case-container">

          <motion.div
            className="featured-case-layout"
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
          >
            {/* ==========================================
                CONTENT
            ========================================== */}

            <div className="featured-case-content">

              <span className="featured-case-eyebrow">
                FEATURED CASE STUDY
              </span>


              <div className="featured-case-industry">

                <FaGraduationCap />

                <span>
                  {featuredProject.industry}
                </span>

              </div>


              <h2>
                {featuredProject.title}
              </h2>


              <p className="featured-case-description">
                {featuredProject.description}
              </p>


              <div className="featured-case-highlights">

                {featuredProject.highlights.map(
                  (highlight) => (

                    <div
                      key={highlight}
                      className="featured-case-highlight"
                    >
                      <span>
                        <FaCheck />
                      </span>

                      <p>
                        {highlight}
                      </p>
                    </div>

                  )
                )}

              </div>


              <div className="featured-case-actions">

                <motion.button
                  type="button"
                  className="featured-case-primary"
                  onClick={() =>
                    setShowCaseStudy(true)
                  }
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  View Case Study

                  <FaArrowRight />
                </motion.button>


                {featuredProject.website && (

                  <motion.a
                    href={
                      featuredProject.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-case-secondary"
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    Visit Website

                    <FaExternalLinkAlt />
                  </motion.a>

                )}

              </div>

            </div>


            {/* ==========================================
                PROJECT PREVIEW
            ========================================== */}

            <div className="featured-case-preview">

              <div className="featured-browser">

                <div className="featured-browser-bar">

                  <div className="featured-browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="featured-browser-address">
                    starlightndovoiniacademy.com
                  </div>

                </div>


                <button
                  type="button"
                  className="featured-browser-image"
                  onClick={() =>
                    openGallery(0)
                  }
                  aria-label="Open project gallery"
                >
                  <img
                    src={
                      featuredProject.image
                    }
                    alt={
                      featuredProject.title
                    }
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />

                  <span className="featured-image-overlay">
                    View Project Gallery
                  </span>
                </button>

              </div>


              <div className="featured-case-floating-card">

                <small>
                  PROJECT TYPE
                </small>

                <strong>
                  {
                    featuredProject.category
                  }
                </strong>

              </div>


              <div className="featured-case-status">

                <span />

                Live Project

              </div>

            </div>

          </motion.div>


          {/* ==========================================
              CHALLENGE / SOLUTION / OUTCOME
          ========================================== */}

          <motion.div
            className="featured-case-summary"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
          >
            <article>

              <span>
                01
              </span>

              <h3>
                The Challenge
              </h3>

              <p>
                {
                  featuredProject.challenge
                }
              </p>

            </article>


            <article>

              <span>
                02
              </span>

              <h3>
                Our Solution
              </h3>

              <p>
                {
                  featuredProject.solution
                }
              </p>

            </article>


            <article>

              <span>
                03
              </span>

              <h3>
                The Outcome
              </h3>

              <p>
                {
                  featuredProject.outcome
                }
              </p>

            </article>

          </motion.div>

        </div>
      </section>


      <Lightbox
        image={selectedImage}
        images={gallery}
        currentIndex={currentIndex}
        onClose={closeGallery}
        onNext={showNextImage}
        onPrev={showPreviousImage}
      />


      <CaseStudyModal
        project={
          showCaseStudy
            ? featuredProject
            : null
        }
        onClose={() =>
          setShowCaseStudy(false)
        }
      />
    </>
  );
}