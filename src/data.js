import eshoe from "./assets/eshoe-app.png";
import eshoe1 from "./assets/eshoe-app1.png";
import eshoe2 from "./assets/eshoe-app2.png";
import aiApp from "./assets/ai-app.png";
import aiApp2 from "./assets/ai-app2.png";
import weather1 from "./assets/weather-app.png";
import weather2 from "./assets/weather-app1.png";
import smartBinImg1 from "./assets/smart-bin-app-img.jpg";
import FinDashImg1 from "./assets/FinDash.png";
import FinDashImg2 from "./assets/FinDash1.png";
import FinDashImg3 from "./assets/FinDash2.png";
const projectsData = [
  {
    id: 1,
    projectName: "E-Shoe Website",
    description: `• Built a full-stack e-commerce platform with product catalog, shopping cart, order management, and secure user authentication
      • Integrated Django REST API and Supabase for real-time database operations and persistent user sessions
      • Deployed on Vercel/Render; configured CORS and resolved routing issues using rewrite rules`,
    projectImg: [eshoe, eshoe1, eshoe2],
    techStack: [
      "React",
      "Context API",
      "Django",
      "Supabase",
      "PostgreSQL",
      "CSS3",
      "Vercel",
      "Render",
    ],
    link: "https://www.maajidali.me",
  },
  {
    id: 2,
    projectName: "Ai Carrer Copilot",
    description: `• Built an AI-powered tool that analyzes resumes against job descriptions to identify missing skills and generate personalized
    learning recommendations
    • Implemented a hybrid skill extraction system using rule-based matching and LLM APIs for improved accuracy across varied
    inputs
    • Developed backend APIs with Django REST Framework to handle PDF uploads, extract text, and perform skill comparison
    efficiently`,
    projectImg: [aiApp, aiApp2],
    techStack: [
      "React",
      "Context API",
      "DRF",
      "Supabase",
      "PostgreSQL",
      "TailwindCSS",
      "Groq Api",
      "PyPDF",
      "Vercel",
      "Render",
    ],
    link: "https://ai-carrer-copilot-nu.vercel.app",
  },
  {
    id: 3,
    projectName: "Weather Forecast Website",
    description:
      "Responsive web app built with React, integrated with a weather API for real-time updates.",
    projectImg: [weather1, weather2],
    techStack: [
      "React",
      "JavaScript",
      "Context API",
      "Open meteo",
      "CSS3",
      "Vercel",
      "API",
    ],
    link: "https://weather-app-mu-khaki-33.vercel.app",
  },
  {
    id: 4,
    projectName: "FinDash",
    description:
      "About I have build a financial dashboard where user can see their income, expensive, etc with a beautiful ui which shows analytics plus detailed view to user and help them to not only see but imagine with the help of visualized data. I made it with react for frontend and used tailwind css to style a clean and amazing ui.",
    projectImg: [FinDashImg1, FinDashImg2, FinDashImg3],
    techStack: ["React", "JavaScript", "HTML", "CSS3"],
    link: "https://fin-dash-one-ochre.vercel.app",
  },
  {
    id: 5,
    projectName: "Smart Bin: Monitoring and Tracking System",
    description:
      "Developed a smart waste bin integrated with sensors and a camera using Raspberry Pi. Built an Android app that displays real-time data using a Flask backend and PostgreSQL database.",
    projectImg: [smartBinImg1],
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "Android",
      "IoT",
      "Raspberry Pi",
    ],
    link:
      "https://github.com/Maajid3/Smart-Bin-Intelligent-Waste-Monitoring-System",
  },
];

export default projectsData;
