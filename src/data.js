import smartBinImg1 from "./assets/smart-bin-app-img.jpg";
import amazonCloneImg1 from "./assets/amazon-clone-1-ss.png";
import amazonCloneImg2 from "./assets/amazon-clone-2-ss.png";
import ecommerce1 from "./assets/ecommerce-1-ss.png";
import ecommerce2 from "./assets/ecommerce-2-ss.png";
import ecommerce3 from "./assets/ecommerce-3-ss.png";
import weather1 from "./assets/weather-1-ss.png";
import weather2 from "./assets/weather-2-ss.png";
import travelappimg from "./assets/travel-web-app.jpg";
import blogImg from "./assets/blogImg.webp";

export default [
  {
    id: 1,
    projectName: "Smart Bin: Monitoring and Tracking System",
    description:
      "Developed a smart waste bin integrated with sensors and a camera using Raspberry Pi. Built an Android app that displays real-time data using a Flask backend and PostgreSQL database.",
    projectImg: [smartBinImg1],
  },
  {
    id: 2,
    projectName: "Weather Forecast Website",
    description:
      "Responsive web app built with React, integrated with a weather API for real-time updates.",
    projectImg: [weather1, weather2],
  },
  {
    id: 3,
    projectName: "E-Commerce Website",
    description:
      " Full-stack application using React and Django, featuring user authentication, product listing, and cart functionality.",
    projectImg: [ecommerce1, ecommerce2, ecommerce3],
  },
  {
    id: 4,
    projectName: "Amazon Clone",
    description:
      "Static e-commerce frontend developed with React, featuring a responsive layout inspired by Amazon.",
    projectImg: [amazonCloneImg1, amazonCloneImg2],
  },
  {
    id: 5,
    projectName: "Travel Website",
    description:
      "Interactive web app built with React.js, showcasing countries and travel destinations.",
    projectImg: [travelappimg],
  },
  {
    id: 6,
    projectName: "Blog Website ",
    description:
      "Blogging platform built with Flask, HTML, and CSS, supporting user content management and database integration.",
    projectImg: [blogImg],
  },
];
