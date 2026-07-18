import { useState } from "react";
import Lightbox from "../shared/Lightbox";
import CaseStudyModal from "../CaseStudyModal";

import natiHome from "../../assets/portfolio/nati-home.png";
import natiProducts from "../../assets/portfolio/nati-products.png";
import natiCart from "../../assets/portfolio/nati-cart.png";

import starlightHero from "../../assets/portfolio/starlight-hero.JPG";
import starlightAbout from "../../assets/portfolio/starlight-about.JPG";
import starlightValues from "../../assets/portfolio/starlight-values.JPG";
import starlightJourney from "../../assets/portfolio/starlight-journey.JPG";

import proposalCover from "../../assets/portfolio/Proposal-cover.png";
import marketingFlyer from "../../assets/portfolio/marketing-flyer.png";

export default function Portfolio() {

  const natiGallery = [
    natiHome,
    natiProducts,
    natiCart,
  ];

  const starlightGallery = [
    starlightHero,
    starlightAbout,
    starlightValues,
    starlightJourney,
  ];

  const projects = [

    {
      image: starlightHero,
      gallery: starlightGallery,
      featured: true,

      title: "Starlight Ndovoini Academy",

      category: "Educational Website",

      industry: "Education",

      challenge:
        "The academy required a modern digital presence that would inspire confidence in parents while showcasing its CBC learning journey and school values.",

      solution:
        "Designed and developed a responsive school website featuring admissions information, learning journey, about section, core values and engaging visual branding.",

      outcome:
        "The institution now has a professional online presence capable of attracting prospective parents and strengthening its brand identity.",

      description:
        "A modern school website designed to improve visibility, communicate the school's mission and simplify access to information for parents.",
    },

    {
      image: natiProducts,
      gallery: natiGallery,

      title: "Nati Stores",

      category: "E-Commerce Website Development",

      industry: "Sports E-Commerce",

      challenge:
        "Needed a professional online platform to showcase and sell football products online.",

      solution:
        "Developed a responsive React-based e-commerce website with shopping cart functionality, product catalog and WhatsApp ordering.",

      outcome:
        "Created a scalable online storefront that improves product visibility and customer engagement.",

      description:
        "A football-focused e-commerce platform featuring product browsing, shopping cart functionality, WhatsApp ordering and responsive mobile design.",
    },

    {
      image: proposalCover,

      title: "SEO Growth Proposal",

      category: "Business Visibility Planning",

      industry: "Business Consulting",

      challenge:
        "Businesses often struggle with online visibility and lead generation.",

      solution:
        "Created a structured SEO and digital marketing roadmap tailored to business growth.",

      outcome:
        "Clear implementation plan for increasing visibility, engagement and conversions.",

      description:
        "A structured growth roadmap focused on increasing visibility, engagement and customer conversion.",
    },

    {
      image: marketingFlyer,

      title: "Marketing Campaign Assets",

      category: "Brand Promotion & Advertising",

      industry: "Marketing & Branding",

      challenge:
        "Businesses needed professional promotional materials that attract attention.",

      solution:
        "Designed visually engaging marketing assets optimized for digital and print use.",

      outcome:
        "Improved brand awareness and lead generation opportunities.",

      description:
        "Professional promotional materials designed to increase awareness and generate leads.",
    },

  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>

      <section id="portfolio" className="section">

        <div className="container">

          <div className="featured-project">

            <div className="featured-content">

              <span className="featured-badge">

                FEATURED CASE STUDY

              </span>

              <h2>Starlight Ndovoini Academy</h2>

              <p>

                A modern educational website built to strengthen the school's
                digital presence, improve parent engagement and showcase the
                CBC learning journey.

              </p>

              <ul>

                <li>✓ Responsive Design</li>

                <li>✓ CBC Learning Journey</li>

                <li>✓ School Branding</li>

                <li>✓ Admissions Ready</li>

                <li>✓ SEO Optimized</li>

              </ul>

              <button
                className="btn-primary"
                onClick={() => setSelectedProject(projects[0])}
              >
                View Case Study
              </button>

            </div>

            <div className="featured-image">

              <img
                src={starlightHero}
                alt="Starlight Academy"
                style={{ cursor: "pointer" }}
                onClick={() => {

                  setGalleryImages(starlightGallery);

                  setCurrentIndex(0);

                  setSelectedImage(starlightGallery[0]);

                }}
              />

            </div>

          </div>

          <h2 className="portfolio-heading">

            Recent Projects

          </h2>

          <div className="portfolio-grid">

            {projects.map((project, index) => (

              <div
                key={index}
                className="portfolio-card"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedProject(project)}
              >

                <div className="portfolio-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {

                      e.stopPropagation();

                      if (project.gallery) {

                        setGalleryImages(project.gallery);

                        setCurrentIndex(0);

                        setSelectedImage(project.gallery[0]);

                      } else {

                        setGalleryImages([project.image]);

                        setCurrentIndex(0);

                        setSelectedImage(project.image);

                      }

                    }}
                  />

                </div>

                <div className="portfolio-content">

                  {project.featured && (

                    <span className="featured-project-badge">

                      Featured

                    </span>

                  )}

                  <h3>{project.title}</h3>

                  <p className="green">

                    {project.category}

                  </p>

                  <p className="portfolio-description">

                    {project.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Lightbox
        image={selectedImage}
        images={galleryImages}
        currentIndex={currentIndex}
        onClose={() => {

          setSelectedImage(null);

          setGalleryImages([]);

        }}
        onNext={() => {

          const next = (currentIndex + 1) % galleryImages.length;

          setCurrentIndex(next);

          setSelectedImage(galleryImages[next]);

        }}
        onPrev={() => {

          const prev =
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length;

          setCurrentIndex(prev);

          setSelectedImage(galleryImages[prev]);

        }}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </>
  );

}

