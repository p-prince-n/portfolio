const showProjectOverView = [
  {
    id: 1,

    image: "/images/projectimages/neoai.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "neoai.ai",
    },

    category: "Multi-Agent AI Platform",

    title: "NeoAI",

    description:
      "A production-oriented Multi-Agent AI Platform built with MERN, LangGraph, LangChain, and microservices architecture. NeoAI intelligently routes user requests to specialized AI agents for conversations, web search, coding, PDF generation, PPT creation, image generation, PDF RAG, and image-based RAG, with Redis-powered persistent AI memory and Docker-based infrastructure.",

    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "LangChain",
      "LangGraph",
      "RAG",
      "Qdrant",
      "Docker",
      "Docker Compose",
      "Firebase Auth",
    ],

    stats: [
      {
        value: "8+",
        label: "AI Agents",
      },
      {
        value: "RAG",
        label: "Knowledge Retrieval",
      },
      {
        value: "Micro",
        label: "Services Architecture",
      },
      {
        value: "Redis",
        label: "AI Memory",
      },
    ],

    features: [
      "Intelligent Agent Routing",
      "Multi-Agent AI Workflows",
      "Context-Aware AI Chat",
      "Web Search Agent",
      "AI Coding Agent",
      "PDF Generation",
      "PPT Generation",
      "AI Image Generation",
      "PDF RAG",
      "Image RAG",
      "Persistent AI Memory",
      "Redis Session Memory",
      "Dockerized Microservices",
      "Google OAuth Authentication",
      "Responsive AI Interface",
    ],

    architecture: {
      title: "Microservices & Agent Architecture",

      content:
        "NeoAI follows a microservices architecture with a React frontend communicating through backend services and an API gateway. LangGraph acts as the AI orchestration layer, routing each user request to the appropriate specialized agent based on intent. LangChain provides the underlying AI tooling and retrieval pipelines, while Redis maintains conversation memory and contextual state. RAG workflows use vector-based retrieval for document and image knowledge, allowing users to interact with their own content. Docker and Docker Compose provide isolated, reproducible service environments.",
    },
  },
  {
    id:2,
    image: "/images/projectimages/shopnova.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "shopnova.app",
    },

    category: "AI-Powered E-Commerce Platform",

    title: "ShopNova",

    description:
      "A futuristic full-stack e-commerce platform built with React and Node.js, featuring AI-powered product assistance, real-time order tracking, role-based management, gamified discounts, and dedicated admin, seller, delivery, and customer workflows.",

    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zustand",
      "JWT",
      "OpenAI API",
      "Google GenAI",
    ],

    stats: [
      {
        value: "4",
        label: "User Roles",
      },
      {
        value: "AI",
        label: "Product Assistant",
      },
      {
        value: "100%",
        label: "Responsive",
      },
    ],

    features: [
      "AI Product Chatbot",
      "Role-Based Management",
      "Real-Time Order Tracking",
      "Spin-to-Win Discounts",
      "OTP Authentication",
      "Wishlist & Reviews",
      "Location-Based Products",
      "QR Product Sharing",
      "Excel Reports",
      "Email & SMS Notifications",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built using a full-stack MERN architecture with React 19 and Vite on the frontend, Express.js and Node.js on the backend, and MongoDB with Mongoose for data persistence. Zustand manages client-side state while JWT and bcryptjs provide authentication and password security. AI capabilities are integrated using OpenAI and Google GenAI, with Twilio and Nodemailer handling SMS and email notifications.",
    },
  },

  {
    id:3,
    image: "/images/projectimages/talkspace.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "talkspace.app",
    },

    category: "Realtime Communication Platform",

    title: "TalkSpace",

    description:
      "A full-stack realtime communication platform built with the MERN stack, supporting one-to-one private messaging and one-to-many group conversations through a responsive and user-friendly chat interface.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "JWT",
    ],

    stats: [
      {
        value: "2",
        label: "Chat Modes",
      },
      {
        value: "Realtime",
        label: "Messaging",
      },
      {
        value: "100%",
        label: "Responsive",
      },
    ],

    features: [
      "One-to-One Messaging",
      "One-to-Many Group Chat",
      "Real-Time Communication",
      "User Authentication",
      "Online Messaging",
      "Responsive Chat UI",
      "Conversation Management",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built with a MERN-based client-server architecture using React.js for the frontend, Node.js and Express.js for backend APIs, and MongoDB for persistent data storage. Real-time communication is handled through Socket.IO, while JWT-based authentication secures user sessions.",
    },
  },
  {
    id: 4,
    imagePath: "/images/projectimages/chattrix.png",
    title: "Chattrix",
    shortDesc:
      "A Realtime Chat web app build with MERN Stack and TailwindCSS. One-to-One also One-to-Many communication .",
    desc: "Modern UI with React + Socket + TailwindCSS ad user-friendly",
  },
  {
    id:5,
    image: "/images/projectimages/chattrix.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "chattrix.app",
    },

    category: "Realtime One-to-One Chat Application",

    title: "Chattrix",

    description:
      "A modern realtime one-to-one messaging platform built with the MERN stack, Socket.IO, and Tailwind CSS, providing secure private communication through a responsive and user-friendly interface.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "JWT",
    ],

    stats: [
      {
        value: "1:1",
        label: "Private Chat",
      },
      {
        value: "Realtime",
        label: "Messaging",
      },
      {
        value: "100%",
        label: "Responsive",
      },
    ],

    features: [
      "One-to-One Messaging",
      "Real-Time Communication",
      "Private Conversations",
      "User Authentication",
      "Responsive Chat UI",
      "Socket.IO Integration",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built using a MERN-based client-server architecture with React.js for the frontend, Node.js and Express.js for backend services, and MongoDB for data persistence. Socket.IO enables realtime bidirectional communication, while authentication secures private user conversations.",
    },
  },

  {
    id:6,
    image: "/images/projectimages/amazonclone.jpg",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "amazon-clone.app",
    },

    category: "Cross-Platform E-Commerce Application",

    title: "Amazon Clone",

    description:
      "A full-stack Amazon-inspired e-commerce application built with Flutter, Express.js, and MongoDB, featuring secure authentication, product and order management, Provider-based state management, and a dedicated admin panel.",

    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    stats: [
      {
        value: "Cross",
        label: "Platform",
      },
      {
        value: "2",
        label: "Application Panels",
      },
      {
        value: "100%",
        label: "Responsive UI",
      },
    ],

    features: [
      "User Authentication",
      "Product Browsing",
      "Shopping Cart",
      "Order Management",
      "Admin Panel",
      "Product Management",
      "Provider State Management",
      "Cross-Platform Flutter App",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built with Flutter and Dart for a cross-platform mobile experience, using Provider for efficient client-side state management. The backend is powered by Node.js and Express.js with MongoDB for persistent data storage, while JWT-based authentication secures user access and application workflows.",
    },
  },

  {
    id:7,
    image: "/images/projectimages/voiceassistant.jpg",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "voice-assistant.app",
    },

    category: "AI Voice Assistant",

    title: "Voice Assistant",

    description:
      "An AI-powered voice assistant built with Flutter and the Gemini API, designed to process voice-based queries and generate intelligent conversational responses.",

    technologies: ["Flutter", "Dart", "Gemini API", "flutter_gemini"],

    stats: [
      {
        value: "AI",
        label: "Gemini Powered",
      },
      {
        value: "Voice",
        label: "Interaction",
      },
      {
        value: "Flutter",
        label: "Cross Platform",
      },
    ],

    features: [
      "Voice-Based Interaction",
      "Gemini API Integration",
      "AI-Powered Responses",
      "Conversational Interface",
      "Flutter Cross-Platform UI",
      "API Integration",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built with Flutter and Dart as the cross-platform application layer, integrating the Gemini API to process user queries and generate AI responses. The application demonstrates API integration, asynchronous communication, and voice-driven interaction within a mobile-focused Flutter interface.",
    },
  },

  {
    id:8,
    image: "/images/projectimages/weatherapp.jpg",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "weather-app",
    },

    category: "Weather & API Integration",

    title: "Weather App",

    description:
      "A Flutter weather application that integrates the OpenWeatherMap API to fetch current weather information while demonstrating asynchronous data handling with FutureBuilder.",

    technologies: [
      "Flutter",
      "Dart",
      "OpenWeatherMap API",
      "FutureBuilder",
      "HTTP",
    ],

    stats: [
      {
        value: "API",
        label: "Weather Data",
      },
      {
        value: "Async",
        label: "Data Handling",
      },
      {
        value: "Flutter",
        label: "Cross Platform",
      },
    ],

    features: [
      "Real-Time Weather Data",
      "OpenWeatherMap API",
      "FutureBuilder",
      "Asynchronous API Calls",
      "Weather Information Display",
      "Responsive Flutter UI",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built with Flutter and Dart, using the OpenWeatherMap API as the external data source. HTTP requests retrieve current weather information asynchronously, while Flutter's FutureBuilder manages loading, success, and error states before rendering the resulting weather data.",
    },
  },

  {
    id:9,
    image: "/images/projectimages/singlist.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "singlist.app",
    },

    category: "AI-Powered Stock Market Platform",

    title: "Singlist",

    description:
      "A modern AI-powered stock market platform built with Next.js, providing real-time stock tracking, personalized alerts, watchlists, company insights, market news, and an administration dashboard.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "AI",
    ],

    stats: [
      {
        value: "Realtime",
        label: "Stock Tracking",
      },
      {
        value: "AI",
        label: "Market Insights",
      },
      {
        value: "Event",
        label: "Driven Alerts",
      },
    ],

    features: [
      "Real-Time Stock Prices",
      "AI-Powered Insights",
      "Personalized Price Alerts",
      "Stock Watchlists",
      "Company Information",
      "Market News",
      "Admin Dashboard",
      "Stock Management",
      "User Activity Monitoring",
      "Automated Notifications",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built with Next.js and React for a modern, responsive frontend with server-side capabilities. The application combines market data, persistent user and stock information, and event-driven workflows to deliver real-time tracking and automated alerts. The admin dashboard provides centralized management of stocks, news, and user activity.",
    },
  },

  {
    id:10,
    image: "/images/projectimages/blog.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "blog-platform.app",
    },

    category: "Full-Stack Blogging Platform",

    title: "Blog Platform",

    description:
      "A full-stack MERN blogging platform featuring JWT authentication, role-based admin management, Cloudinary-powered media uploads, profile management, and interactive blog comments.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],

    stats: [
      {
        value: "2",
        label: "User Roles",
      },
      {
        value: "JWT",
        label: "Authentication",
      },
      {
        value: "Cloud",
        label: "Media Storage",
      },
    ],

    features: [
      "JWT Authentication",
      "Role-Based Authorization",
      "Admin Blog Management",
      "Create & Update Blogs",
      "Blog Reading",
      "Comments & Discussions",
      "User Profile Management",
      "Profile Image Upload",
      "Cloudinary Integration",
      "Responsive UI",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built using a MERN stack architecture with React.js for the frontend, Node.js and Express.js for RESTful backend services, and MongoDB with Mongoose for data persistence. JWT handles authentication and role-based authorization, allowing administrators to manage blog content while users can read and comment on posts. Cloudinary is integrated for scalable image and media storage.",
    },
  },
  {
    id:11,
    image: "/images/projectimages/singlist.png",

    browser: {
      dots: ["#ef4444", "#f59e0b", "#22c55e"],
      text: "climato-kappa.vercel.app",
    },

    category: "Modern Weather Web Application",

    title: "Climato",

    description:
      "A modern and responsive weather web application that consumes weather API data to provide real-time weather information through a clean and intuitive user interface.",

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Weather API",
      "REST API",
    ],

    stats: [
      {
        value: "Realtime",
        label: "Weather Data",
      },
      {
        value: "API",
        label: "Integration",
      },
      {
        value: "100%",
        label: "Responsive",
      },
    ],

    features: [
      "Real-Time Weather Data",
      "Location-Based Weather",
      "Weather API Integration",
      "Responsive Interface",
      "Modern UI",
      "Dynamic Weather Information",
    ],

    architecture: {
      title: "Architecture",

      content:
        "Built as a modern client-side weather application that communicates with an external weather API to retrieve and display current weather information. The responsive frontend is designed to provide a consistent experience across desktop and mobile devices.",
    },
  },
  
];
