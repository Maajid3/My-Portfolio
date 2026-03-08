<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:000428,50:004e92,100:000428&height=200&section=header&text=Maajid%20Ali%20%E2%80%94%20Portfolio&fontSize=42&fontColor=ffffff&fontAlignY=35&animation=fadeIn" />

<div align="center">

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" width="10%">

A modern, responsive developer portfolio built with React 19, featuring animated gradients, glassmorphism UI, scroll-driven animations, and a Supabase-powered contact system.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio3-topaz.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Maajid3/My-Portfolio)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=4E92F7&center=true&vCenter=true&width=500&lines=Frontend+Developer;React.js+%7C+UI+Developer;Built+with+%E2%9D%A4%EF%B8%8F+and+JavaScript" alt="Typing SVG" />

</div>

<br/>

## Overview

A single-page portfolio application that showcases my projects, skills, and provides a direct way to get in touch. The site is designed to leave a strong first impression with a living, animated hero background and smooth interactions throughout.

### Key Highlights

- **Animated Aurora Hero** — A full-viewport hero section with 10+ layered radial gradients animated via CSS `@property`, creating an organic, morphing aurora effect.
- **Glassmorphism Navbar** — A floating, translucent navigation bar with backdrop blur that auto-hides on scroll down and reappears on scroll up.
- **Scroll-Driven Animations** — Project cards and contact sections fade and scale in as they enter the viewport using native CSS scroll-driven animations.
- **Infinite Image Carousel** — Projects with multiple screenshots display a seamless, auto-scrolling marquee built with pure CSS.
- **Contact Form with Supabase** — A fully validated contact form that stores submissions directly in a Supabase database, with real-time feedback via React Query mutations.
- **Fully Responsive** — Optimized layouts for mobile, tablet, and desktop with four CSS breakpoints.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakraui&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

| Layer             | Technology                           |
| :---------------- | :----------------------------------- |
| **Framework**     | React 19 (Create React App)          |
| **UI Components** | Chakra UI v3                         |
| **Styling**       | CSS3 with Custom Properties, Emotion |
| **State & Data**  | TanStack React Query v5              |
| **Backend**       | Supabase (PostgreSQL)                |
| **Routing**       | React Router DOM v7                  |
| **HTTP**          | Axios, Supabase JS Client            |
| **Deployment**    | Vercel                               |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## Project Structure

```
src/
├── App.js                  # Root layout — assembles all sections
├── App.css                 # Animated hero gradient (CSS @property)
├── index.js                # Entry point — React 19, Router, QueryClient
├── data.js                 # Portfolio project data
├── api/
│   └── Submit.js           # Supabase insert for contact form
├── assets/                 # Project screenshots & profile images
├── client/
│   └── supabase_Client.js  # Supabase client initialization
└── components/
    ├── Header.js           # Scroll-aware floating navbar
    ├── LandingPage.jsx     # Hero section with avatar
    ├── ChakraSection.jsx   # Chakra UI provider wrapper
    ├── Projects.js         # Project cards grid + image carousel
    ├── Contact.jsx         # Validated contact form
    ├── Footer.jsx          # Links, socials, copyright
    └── components.css      # All component styles & responsive breakpoints
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## Featured Projects

|  #  | Project                              | Description                                                   |
| :-: | :----------------------------------- | :------------------------------------------------------------ |
|  1  | **Smart Bin: Monitoring & Tracking** | IoT system using Raspberry Pi, Flask, PostgreSQL, and Android |
|  2  | **Weather Forecast Website**         | React app consuming a weather API with dynamic UI             |
|  3  | **E-Commerce Website**               | Full-stack React + Django with auth, cart, and checkout       |
|  4  | **Amazon Clone**                     | Static React frontend replicating the Amazon UI               |
|  5  | **Travel Website**                   | React.js travel destinations application                      |
|  6  | **Blog Website**                     | Flask + HTML/CSS blogging platform                            |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## Responsive Breakpoints

| Device           | Width          | Layout                              |
| :--------------- | :------------- | :---------------------------------- |
| Mobile Portrait  | 320px — 480px  | Single-column grid, centered navbar |
| Mobile Landscape | 451px — 767px  | Single-column grid                  |
| Tablet           | 768px — 1024px | Two-column grid                     |
| Desktop          | > 1024px       | Three-column grid                   |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## Connect

<div align="center">

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maajidali00003@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/maajidali03)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Maajid3)

</div>

<br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:000428,50:004e92,100:000428&height=120&section=footer" />
