import {
  HiOutlineWrenchScrewdriver,
  HiOutlineCodeBracket,
  HiOutlineServer,
} from "react-icons/hi2";
import {
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiDocker,
  SiNginx,
  SiLinux,
  SiRedis,
  SiGithubactions,
  SiOpenai,
  SiClaude,
} from "react-icons/si";

import { initialLetterLogo, maisonEmber } from "../assets";

const initialLetterIcon = initialLetterLogo;
const remainingLetters = "TuanNg.";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Rescue & Performance",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    title: "Custom Laravel Applications",
    icon: HiOutlineCodeBracket,
  },
  {
    title: "Deployment & Server Setup",
    icon: HiOutlineServer,
  },
];

const technologies = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
  { name: "OpenAI API", icon: SiOpenai, color: "#10A37F" },
  { name: "Claude API", icon: SiClaude, color: "#D97757" },
];

const projects = [
  {
    name: "Maison Ember",
    description:
      "A premium, responsive website created for a fictional luxury fine-dining restaurant, featuring an elegant dark visual style, cinematic presentation and refined user experience.",
    features: [
      "Elegant dark visual style with cinematic presentation.",
      "Fully responsive layout across devices.",
      "Refined, considered user experience end to end.",
    ],
    tags: [],
    image: maisonEmber,
    source_code_link: null,
    live_link: "https://project1.tuanweb.site/",
  },
];

const experiences = [
  {
    title: "Your Job Title",
    company_name: "Company Name",
    icon: null,
    iconBg: "#383E56",
    date: "Month Year - Month Year",
    points: [
      "Replace this placeholder with a real responsibility or achievement.",
      "Add another bullet point describing your work here.",
      "Swap this whole entry for your actual work experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The website came in faster and more stable than what we had before, and the handover docs made it painless to maintain.",
    name: "Minh Pham",
    designation: "Founder",
    company: "Kestrel Studio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Clear communication throughout the project and a backend that hasn't needed a single emergency fix since launch.",
    name: "Julia Renner",
    designation: "Operations Lead",
    company: "Northbridge Goods",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Took a slow, aging site and turned it around quickly without breaking anything our customers relied on.",
    name: "Carlos Duarte",
    designation: "Owner",
    company: "Duarte & Co.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  initialLetterIcon,
  remainingLetters,
};
