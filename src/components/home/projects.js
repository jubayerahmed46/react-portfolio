const projects = [
  {
    id: 1,
    name: "Crowdcube",
    route: "crowdcube",
    image: "https://i.ibb.co/LWhg24x/Captsdfasdure.png",
    stack: [
      { name: "React", color: "#4B9ABF" },
      { name: "Tailwind CSS", color: "#0598A6" },
      { name: "Firebase", color: "#FFB74D" },
      { name: "Express.js", color: "#333333" },
      { name: "MongoDB", color: "#3A9B2E" },
    ],
    description:
      "Crowdcube is a crowdfunding platform that allows users to create fundraising campaigns for various causes and projects. It ensures secure transactions, real-time campaign tracking, and a seamless user experience.",
    liveLink: "https://crowdcude-fb127.web.app/",
    github: "https://github.com/jubayerahmed46/Crowdbube_frontend",
    features: [
      "🔐 Secure authentication with Firebase",
      "🎯 Create and manage fundraising campaigns with real-time progress tracking",
      "📊 Dashboard with insights on donation trends and campaign performance (almost done)",
      "📣 Social media sharing features to boost campaign reach (working on)",
    ],
    challenges: [
      "🛡 Ensuring secure transactions and preventing fraudulent donations",
      "⚡ Optimizing performance for real-time campaign updates",
      "📱 Making the UI mobile-friendly and responsive",
    ],
    goals: [
      "📌 Expand globally to allow international fundraising",
      "🤖 Introduce AI-based donation suggestions based on user interests",
      "📱 Build a mobile app version with offline campaign tracking",
    ],
  },
  {
    id: 2,
    name: "Where Is It?",
    route: "where-is-it",
    image: "https://i.ibb.co/WWDhL2SS/wherisit-PNG.png",
    stack: [
      { name: "React", color: "#4B9ABF" },
      { name: "Tailwind CSS", color: "#0598A6" },
      { name: "Firebase", color: "#FFB74D" },
    ],
    description:
      "Where Is It? is a lost and found platform where users can report lost items, browse found items, and connect with others to recover their belongings. The platform uses real-time location tracking and filtering for efficient item discovery.",
    liveLink: "https://whereisit-84e04.web.app/",
    github:
      "https://github.com/jubayerahmed46/WhereIsIt-frontend-mern-project-",
    features: [
      "📌 User-friendly lost and found submission form",
      "🔍 Search and filter functionality to find lost items quickly",
      "📅 Time-based notifications for nearby found items",
      "👥 User-based accessibility.",
      "📌 Save information for future problem and confusion",
    ],
    challenges: [
      "🔍 Implementing an optimized search and filtering system",
      "📲 Ensuring a responsive design for a smooth mobile experience",
    ],
    goals: [
      "📍 Real-time location tracking for lost items using Google Maps API",
      "🔮 Implement AI-powered item matching system",
      "🔮 Expand database to cover nationwide lost & found reports",
      "🔮 Introduce a chatbot assistant for instant lost item support",
    ],
  },
  {
    id: 3,
    name: "Nexus",
    route: "nexus",
    image: "https://i.ibb.co/fY0KCBZR/crowdcub1e.png",
    stack: [
      { name: "React", color: "#4B9ABF" },
      { name: "MongoDB", color: "#3A9B2E" },
      { name: "Tailwind CSS", color: "#0598A6" },
      { name: "Node.js", color: "#68A063" },
    ],
    description:
      "Nexus is a modern news platform that allows users to read, write, and share articles on various topics. It offers dynamic content, user reviews, and premium features for subscribers.",
    liveLink: "https://nexus-3e632.web.app/",
    github: "https://github.com/jubayerahmed46/Nexus_Frontend",
    features: [
      "📝 Clean form for writing and publishing articles",
      "🔍 Search and filter functionality for finding relevant news",
      "📊 User rating and commenting system for discussions",
      "💰 Premium subscription model for exclusive content",
      "🔔 Personalized notifications based on reading history",
    ],
    challenges: [
      "📝 Implementing a seamless and user-friendly form.",
      "⚙ Managing role-based authentication",
      "📈 Optimizing article recommendation algorithm for user engagement",
    ],
    goals: [
      "🛠 Introduce a monetization model for content creators",
      "📱 Build a mobile-friendly version with offline article reading",
      "🤖 Implement AI-powered content recommendations for users",
    ],
  },
];

export default projects;
