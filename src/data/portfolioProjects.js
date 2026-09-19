import natiHome from "../assets/portfolio/nati-home.png?w=800&format=webp&quality=75&imagetools";
import natiProducts from "../assets/portfolio/nati-products.png?w=800&format=webp&quality=75&imagetools";
import natiCart from "../assets/portfolio/nati-cart.png?w=800&format=webp&quality=75&imagetools";

import natiHomeGallery from "../assets/portfolio/nati-home.png?w=1200&format=webp&quality=82&imagetools";
import natiProductsGallery from "../assets/portfolio/nati-products.png?w=1200&format=webp&quality=82&imagetools";
import natiCartGallery from "../assets/portfolio/nati-cart.png?w=1200&format=webp&quality=82&imagetools";

import starlightHero from "../assets/portfolio/starlight-hero.JPG?w=800&format=webp&quality=75&imagetools";
import starlightAbout from "../assets/portfolio/starlight-about.JPG?w=800&format=webp&quality=75&imagetools";
import starlightValues from "../assets/portfolio/starlight-values.JPG?w=800&format=webp&quality=75&imagetools";
import starlightJourney from "../assets/portfolio/starlight-journey.JPG?w=800&format=webp&quality=75&imagetools";

import starlightHeroGallery from "../assets/portfolio/starlight-hero.JPG?w=1200&format=webp&quality=82&imagetools";
import starlightAboutGallery from "../assets/portfolio/starlight-about.JPG?w=1200&format=webp&quality=82&imagetools";
import starlightValuesGallery from "../assets/portfolio/starlight-values.JPG?w=1200&format=webp&quality=82&imagetools";
import starlightJourneyGallery from "../assets/portfolio/starlight-journey.JPG?w=1200&format=webp&quality=82&imagetools";

import proposalCover from "../assets/portfolio/Proposal-cover.png?w=800&format=webp&quality=75&imagetools";
import proposalCoverGallery from "../assets/portfolio/Proposal-cover.png?w=1200&format=webp&quality=82&imagetools";

import marketingFlyer from "../assets/portfolio/marketing-flyer.png?w=800&format=webp&quality=75&imagetools";
import marketingFlyerGallery from "../assets/portfolio/marketing-flyer.png?w=1200&format=webp&quality=82&imagetools";

export const natiGallery = [
  natiHomeGallery,
  natiProductsGallery,
  natiCartGallery,
];

export const starlightGallery = [
  starlightHeroGallery,
  starlightAboutGallery,
  starlightValuesGallery,
  starlightJourneyGallery,
];

export const portfolioProjects = [
  {
  id: "starlight-ndovoini-academy",
  title: "Starlight Ndovoini Academy",
  category: "School Website Design",
  industry: "Education",
  image: starlightHero,
  gallery: starlightGallery,
  website: "https://starlight-ndovoini-academy.vercel.app",

  description: "...",
  challenge: "...",
  solution: "...",
  outcome: "...",

  highlights: [
    "Responsive school website",
    "Clear learning journey presentation",
    "Mobile-friendly parent experience",
    "Professional school identity",
  ],
},

  {
    id: "nati-stores",
    title: "Nati Stores",
    category: "E-Commerce Website Design",
    industry: "Sports E-Commerce",
    image: natiProducts,
    gallery: natiGallery,
    website: "https://nati-stores.vercel.app",
    description:
      "A football-focused e-commerce website featuring product browsing, shopping-cart functionality, WhatsApp ordering and responsive mobile design for online customers.",
    challenge:
      "The business needed a professional online platform to showcase football products, make product discovery easier and support customers placing orders online.",
    solution:
      "Developed a responsive React-based e-commerce website with a product catalogue, shopping-cart functionality and WhatsApp ordering to create a convenient online shopping experience.",
    outcome:
      "A professional online storefront that makes products easier to discover and gives customers a convenient way to browse and place orders.",
  },

  {
    id: "seo-growth-proposal",
    title: "SEO Growth Proposal",
    category: "SEO Strategy & Planning",
    industry: "Digital Marketing",
    image: proposalCover,
    gallery: [proposalCoverGallery],
    description:
      "A structured SEO and digital marketing growth roadmap designed to improve online visibility, engagement and customer conversions.",
    challenge:
      "Businesses often struggle to build consistent online visibility and turn digital attention into qualified customer enquiries.",
    solution:
      "Created a structured SEO and digital marketing roadmap tailored to business growth, covering visibility, engagement and conversion opportunities.",
    outcome:
      "A practical strategic roadmap that gives businesses a clearer framework for improving search visibility and digital growth.",
  },

  {
    id: "marketing-campaign-assets",
    title: "Marketing Campaign Assets",
    category: "Marketing Design & Branding",
    industry: "Marketing & Branding",
    image: marketingFlyer,
    gallery: [marketingFlyerGallery],
    description:
      "Professional marketing and promotional assets designed to strengthen brand visibility, attract attention and support lead generation across digital and print channels.",
    challenge:
      "Businesses needed professional promotional materials capable of attracting attention while communicating their offers clearly across digital and print channels.",
    solution:
      "Designed visually engaging marketing assets optimized for digital and print use, with a focus on clear messaging, brand presentation and audience attention.",
    outcome:
      "Professional promotional materials that provide businesses with stronger visual communication for marketing and lead-generation activities.",
  },
];
export const featuredProject = portfolioProjects[0];