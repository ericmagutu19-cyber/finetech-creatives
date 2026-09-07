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

    category: "School Website Design",

    industry: "Education",

    challenge:
      "The academy required a modern digital presence that would inspire confidence in parents while showcasing its CBE learning journey and school values.",

solution:
  "Designed and developed a responsive school website featuring admissions information, the CBE learning journey, school information, core values and engaging visual branding.",
    outcome:
      "The institution now has a professional online presence capable of attracting prospective parents and strengthening its brand identity.",

description:
  "A modern school website designed to strengthen the academy's online presence, communicate its CBE learning journey and make important information easier for parents to access.",
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

    category: "E-Commerce Website Design",

    industry: "Sports E-Commerce",

challenge:
  "The business needed a professional online platform to showcase football products, make product discovery easier and support customers placing orders online.",
solution:
  "Developed a responsive React-based e-commerce website with a product catalogue, shopping-cart functionality and WhatsApp ordering to create a convenient online shopping experience.",
    outcome:
      "Created a scalable online storefront that improves product visibility and customer engagement.",

description:
  "A football-focused e-commerce website featuring product browsing, shopping-cart functionality, WhatsApp ordering and responsive mobile design for online customers.",
    website:
      "https://nati-stores.vercel.app",
  },

  {
    id: 3,

    image: proposalCover,

    gallery: [proposalCover],

    title: "SEO Growth Proposal",

    category: "SEO Strategy & Planning",

    industry: "Business Consulting",

challenge:
  "Businesses often struggle to build consistent online visibility and turn digital attention into qualified customer enquiries.",
solution:
  "Created a structured SEO and digital marketing roadmap tailored to business growth, covering visibility, engagement and conversion opportunities.",
    outcome:
      "Produced a clear implementation plan for increasing visibility, engagement and conversions.",

   description:
  "A structured SEO and digital marketing growth roadmap designed to improve online visibility, engagement and customer conversions.",
  },

  {
    id: 4,

    image: marketingFlyer,

    gallery: [marketingFlyer],

    title: "Marketing Campaign Assets",

    category: "Marketing Design & Branding",

    industry: "Marketing and Branding",

challenge:
  "Businesses needed professional promotional materials capable of attracting attention while communicating their offers clearly across digital and print channels.",
solution:
  "Designed visually engaging marketing assets optimized for digital and print use, with a focus on clear messaging, brand presentation and audience attention.",
    outcome:
      "Improved opportunities for brand awareness, promotion and lead generation.",

    description:
  "Professional marketing and promotional assets designed to strengthen brand visibility, attract attention and support lead generation across digital and print channels.",
  },
];


export const featuredProject =
  portfolioProjects.find(
    (project) => project.featured
  ) || portfolioProjects[0];