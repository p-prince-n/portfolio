import { GraduationCap, Home, Mail, MapPin, Phone, Sparkles, User } from "lucide-react";
import { FaGithub, FaLaptopCode, FaLinkedinIn, FaRocket } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    href: "#hero",
    icon: Home,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Sparkles,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Technology",
    href: "#tech-skills",
    icon: FaLaptopCode,
  },
  {
    name: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: FaRocket,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];
const typewriterRoles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "AI & LLM Developer",
  "React.js Developer",
  "Node.js Developer",
  "Multi-Agent System Builder",
  "API Developer",
  "UI/UX Focused Engineer"
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];


const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "pp2358296@gmail.com",
    href: "mailto:pp2358296@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96533 51765",
    href: "tel:+919653351765",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@p-prince-n",
    href: "https://github.com/p-prince-n",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "@prince-prajapati-362806394",
    href: "https://www.linkedin.com/in/prince-prajapati-362806394",
  },
];
















const showProjectOverView = [
  {
    id: 1,
    imagePath: "/images/projectimages/shopnova.png",
    title: "ShopNova",
    shortDesc:
      "A futurstic e-commerce website, with AI facility and Spin a well to get a discount Coupon.",
    desc: "An app built with MERN & TailwindCSS for a fast, user-friendly experience",
  },
  {
    id: 2,
    imagePath: "/images/projectimages/talkspace.png",
    title: "TalkSpace",
    shortDesc: "A Realtime Chat App with MERN Stack, one to one communication with mobile responsive.",
    desc: "A Chat website build with MERN Stack with TailwindCSS, user friendly ",
  },
  {
    id: 3,
    imagePath: "/images/projectimages/chattrix.png",
    title: "Chattrix",
    shortDesc: "A Realtime Chat web app build with MERN Stack and TailwindCSS. One-to-One also One-to-Many communication .",
    desc: "Modern UI with React + Socket + TailwindCSS ad user-friendly",
  },
  {
    id: 4,
    imagePath: "/images/projectimages/codecraftsblog.png",
    title: "CodeCraft's Blog",
    shortDesc: "A Blog web app, build with modern technology user-friendly and easy to use ",
    desc: "Modern UI build with flow-bite react with CRUD operation done by Admin",
  },
  {
    id: 5,
    imagePath: "/images/projectimages/amazonclone.jpg",
    title: "Amazon Clone",
    shortDesc: "An E-commerce application build with flutter and expressjs and mongoDB with Admin panel.",
    desc: "Clone Application of 'Amazon' build with flutter which is platform independent with proper Authentication also uses a Provider easy to manage state",
  },
  {
    id: 6,
    imagePath: "/images/projectimages/voiceassistant.jpg",
    title: "Voice Assistant",
    shortDesc: "A voice assistant build with flutter and Gemini",
    desc: "A flutter application to understand how gemini api work using flutter_gemini package.",
  },
  {
    id: 7,
    imagePath: "/images/projectimages/weatherapp.jpg",
    title: "Weather App",
    shortDesc: "A Weather application build with flutter to Understand how Futurebuilder widget works ",
    desc: "A flutter application to understand how Futurebuilder widget works also uses openweathermap's free api to get current weather details.",
  },
  {
    id: 7,
    imagePath: "/images/projectimages/singlist.png",
    title: "Singlist",
    shortDesc: "A NextJs Application, AI-powered modern stock market app.",
    desc: "Track real-time prices, set personalized alerts, explore company insights, and manage watchlists. The admin dashboard allows managing stocks, publishing news, and monitoring user activity, while event-driven workflows power automated alerts/",
  },
];

export {
  words,
  typewriterRoles,
  navItems,
  contactItems
};