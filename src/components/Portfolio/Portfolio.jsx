import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaExpand,
  FaLayerGroup,
} from "react-icons/fa";

import Lightbox from "../shared/Lightbox";
import CaseStudyModal from "../shared/CaseStudyModal";

import {
  portfolioProjects,
} from "../../data/portfolioProjects";

import "./Portfolio.css";


/* ==========================================================
   MOTION VARIANTS
========================================================== */

const gridVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* ==========================================================
   PORTFOLIO
========================================================== */

export default function Portfolio() {

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [galleryImages, setGalleryImages] =
    useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedProject, setSelectedProject] =
    useState(null);


  /* ======================================================
     OPEN PROJECT GALLERY
  ====================================================== */

  const openGallery = (
    project,
    imageIndex = 0
  ) => {

    const images =
      project.gallery?.length
        ? project.gallery
        : [project.image];

    setGalleryImages(images);

    setCurrentIndex(imageIndex);

    setSelectedImage(
      images[imageIndex]
    );

  };


  /* ======================================================
     CLOSE PROJECT GALLERY
  ====================================================== */

  const closeGallery = () => {

    setSelectedImage(null);

    setGalleryImages([]);

    setCurrentIndex(0);

  };


  /* ======================================================
     NEXT IMAGE
  ====================================================== */

  const showNextImage = () => {

    if (!galleryImages.length) {
      return;
    }

    const nextIndex =
      (currentIndex + 1) %
      galleryImages.length;

    setCurrentIndex(nextIndex);

    setSelectedImage(
      galleryImages[nextIndex]
    );

  };


  /* ======================================================
     PREVIOUS IMAGE
  ====================================================== */

  const showPreviousImage = () => {

    if (!galleryImages.length) {
      return;
    }

    const previousIndex =
      (
        currentIndex -
        1 +
        galleryImages.length
      ) %
      galleryImages.length;

    setCurrentIndex(previousIndex);

    setSelectedImage(
      galleryImages[previousIndex]
    );

  };


  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section"
      >
        {/* Background effects */}

        <div className="portfolio-background-grid" />

        <div className="portfolio-glow portfolio-glow-left" />

        <div className="portfolio-glow portfolio-glow-right" />


        <div className="portfolio-container">

          {/* ==================================================
              SECTION HEADER
          ================================================== */}

          <motion.div
            className="portfolio-header"
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <span className="portfolio-eyebrow">
              OUR PROJECTS
            </span>

            <h2>
  Websites, Branding & Digital Marketing
  <span>
    Built for Real Business Growth.
  </span>
</h2>

<p>
  Explore selected projects across website design, e-commerce,
  branding, SEO and digital marketing, created to help businesses
  build credibility, reach more customers and grow online.
</p>
          </motion.div>


          {/* ==================================================
              PROJECT GRID
          ================================================== */}

          <motion.div
            className="portfolio-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
          >
            {portfolioProjects.map(
              (project, index) => (

                <motion.article
                  key={project.id}
                  className={`
                    portfolio-card
                    ${
                      project.featured
                        ? "portfolio-card-featured"
                        : ""
                    }
                  `}
                  variants={cardVariants}
                  whileHover={{
                    y: -9,
                  }}
                >
                  {/* ==========================================
                      PROJECT IMAGE
                  ========================================== */}

                  <div className="portfolio-image">

                    <button
                      type="button"
                      className="portfolio-image-button"
                      onClick={() =>
                        openGallery(project)
                      }
                      aria-label={`Open ${project.title} gallery`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        width="1200"
                        height="750"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />

                      <span className="portfolio-image-overlay">

                        <span className="portfolio-view-icon">
                          <FaExpand />
                        </span>

                        View Gallery

                      </span>

                    </button>


                    <div className="portfolio-image-top">

                      <span className="portfolio-project-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>


                      {project.featured && (

                        <span className="portfolio-featured-badge">
                          Featured
                        </span>

                      )}

                    </div>


                    <div className="portfolio-gallery-count">

                      <FaLayerGroup />

                      <span>

                        {project.gallery?.length || 1}

                        {" "}

                        {project.gallery?.length === 1
                          ? "Image"
                          : "Images"}

                      </span>

                    </div>

                  </div>


                  {/* ==========================================
                      PROJECT CONTENT
                  ========================================== */}

                  <div className="portfolio-content">

                    <div className="portfolio-meta">

                      <span className="portfolio-category">
                        {project.category}
                      </span>

                      <span className="portfolio-industry">
                        {project.industry}
                      </span>

                    </div>


                    <h3>
                      {project.title}
                    </h3>


                    <p className="portfolio-description">
                      {project.description}
                    </p>


                    {/* Project actions */}

<div className="portfolio-actions">

  <motion.button
    type="button"
    className="portfolio-case-button"
    onClick={() =>
      setSelectedProject(project)
    }
    whileHover={{
      x: 4,
    }}
    whileTap={{
      scale: 0.97,
    }}
  >
    <span>
      View Case Study
    </span>

    <FaArrowRight />
  </motion.button>

  {project.website && (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-website-button"
      aria-label={`Visit ${project.title} website`}
    >
      Visit Website
      <FaArrowRight />
    </a>
  )}

  <button
    type="button"
    className="portfolio-gallery-button"
    onClick={() =>
      openGallery(project)
    }
    aria-label={`View ${project.title} gallery`}
  >
    <FaExpand />
  </button>

</div>

                  </div>


                  {/* Bottom light */}

                  <div className="portfolio-card-light" />

                </motion.article>

              )
            )}
          </motion.div>


          {/* ==================================================
              SECTION FOOTER
          ================================================== */}

          <motion.div
            className="portfolio-footer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="portfolio-footer-dot" />

            <p>
              Every project is developed around the client’s goals,
              audience and practical business requirements.
            </p>

          </motion.div>

        </div>
      </section>


      {/* ==================================================
          IMAGE LIGHTBOX
      ================================================== */}

      <Lightbox
        image={selectedImage}
        images={galleryImages}
        currentIndex={currentIndex}
        onClose={closeGallery}
        onNext={showNextImage}
        onPrev={showPreviousImage}
      />


      {/* ==================================================
          CASE STUDY MODAL
      ================================================== */}

      <CaseStudyModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );

}