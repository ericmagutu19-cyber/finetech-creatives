import natiHome from "../assets/portfolio/nati-home.png?w=1200&format=webp&quality=82&imagetools";
import natiProducts from "../assets/portfolio/nati-products.png?w=1200&format=webp&quality=82&imagetools";
import natiCart from "../assets/portfolio/nati-cart.png?w=1200&format=webp&quality=82&imagetools";

import starlightHero from "../assets/portfolio/starlight-hero.JPG?imagetools&format=webp&w=1200&quality=82";

import starlightAbout from "../assets/portfolio/starlight-about.JPG?imagetools&format=webp&w=1200&quality=82";

import starlightValues from "../assets/portfolio/starlight-values.JPG?imagetools&format=webp&w=1200&quality=82";

import starlightJourney from "../assets/portfolio/starlight-journey.JPG?imagetools&format=webp&w=1200&quality=82";
import proposalCover from "../assets/portfolio/Proposal-cover.png?w=1200&format=webp&quality=82&imagetools";
import marketingFlyer from "../assets/portfolio/marketing-flyer.png?w=1200&format=webp&quality=82&imagetools";


export const natiGallery = [
  natiHome,
  natiProducts,
  natiCart,
];


export const starlightGallery = [
  starlightHero,
  starlightAbout,
  starlightValues,
  starlightJourney,
];


export const portfolioProjects = [
  {
    id: 1,

    image: starlightHero,

    gallery: starlightGallery,

    featured: true,

    title: "Starlight Ndovoini Academy",

    category: "Educational Website",

    industry: "Education",

    challenge:
      "The academy required a modern digital presence that would inspire confidence in parents while showcasing its CBE learning journey and school values.",

    solution:
      "Designed and developed a responsive school website featuring admissions information, the learning journey, school information, core values and engaging visual branding.",

    outcome:
      "The institution now has a professional online presence capable of attracting prospective parents and strengthening its brand identity.",

    description:
      "A modern school website designed to improve visibility, communicate the school's mission and simplify access to information for parents.",

    highlights: [
      "Responsive Design",
      "CBE Learning Journey",
      "School Branding",
      "Admissions Ready",
      "SEO Optimized",
    ],

    website:
      "https://starlight-ndovoini-academy.vercel.app",
  },

  {
    id: 2,

    image: natiProducts,

    gallery: natiGallery,

    title: "Nati Stores",

    category: "E-Commerce Website Development",

    industry: "Sports E-Commerce",

    challenge:
      "The business needed a professional online platform to showcase and sell football products online.",

    solution:
      "Developed a responsive React-based e-commerce website with shopping-cart functionality, a product catalogue and WhatsApp ordering.",

    outcome:
      "Created a scalable online storefront that improves product visibility and customer engagement.",

    description:
      "A football-focused e-commerce platform featuring product browsing, shopping-cart functionality, WhatsApp ordering and responsive mobile design.",

    website:
      "https://natistores.vercel.app",
  },

  {
    id: 3,

    image: proposalCover,

    gallery: [proposalCover],

    title: "SEO Growth Proposal",

    category: "Business Visibility Planning",

    industry: "Business Consulting",

    challenge:
      "Businesses often struggle with online visibility and consistent lead generation.",

    solution:
      "Created a structured SEO and digital-marketing roadmap tailored to business growth.",

    outcome:
      "Produced a clear implementation plan for increasing visibility, engagement and conversions.",

    description:
      "A structured growth roadmap focused on increasing visibility, engagement and customer conversion.",
  },

  {
    id: 4,

    image: marketingFlyer,

    gallery: [marketingFlyer],

    title: "Marketing Campaign Assets",

    category: "Brand Promotion and Advertising",

    industry: "Marketing and Branding",

    challenge:
      "Businesses needed professional promotional materials capable of attracting attention.",

    solution:
      "Designed visually engaging marketing assets optimized for digital and print use.",

    outcome:
      "Improved opportunities for brand awareness, promotion and lead generation.",

    description:
      "Professional promotional materials designed to increase awareness and generate leads.",
  },
];


export const featuredProject =
  portfolioProjects.find(
    (project) => project.featured
  ) || portfolioProjects[0];