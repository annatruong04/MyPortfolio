import { meta } from "../assets/images";
import {
    flutter,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    vue,
    C
} from "../assets/icons";
import CTA from '../components/CTA';

export const skills = [
    {
        imageUrl: C,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: vue,
        name: "Vue,js",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];
export const experiences = [
    {
      title: "Data Storytelling with Three.js (WIP)",
      company_name: "N/A",
      icon: null, // Add your custom icon if available
      iconBg: "#d3d3d3",
      date: "Apr 2025 – Present",
      points: [
        "Transforming historical communication data into an interactive 3D experience using Three.js.",
        "Blending frontend storytelling with statistical insights based on summer research.",
        "Focusing on immersive design, scroll-triggered animations, and smooth user interaction.",
      ],
    },
    {
      title: "Frontend Developer — Student Social App",
      company_name: "Unihack 2025",
      icon: flutter, // Replace with your Flutter or custom app icon
      iconBg: "#dbf3ff",
      date: "Mar 2025",
      points: [
        "Built with Flutter & Firebase in a 24hr hackathon.",
        "Led UI design in Figma.",
      ],
    },
    {
      title: "Full Stack Developer — Volunteer Web App",
      company_name: "Student Community Platform",
      icon: vue, // Replace with your Vue.js icon
      iconBg: "#e2f0cb",
      date: "Aug 2024 – Nov 2024",
      points: [
        "Vue.js frontend & Node.js backend.",
        "30+ APIs & MySQL integration.",
      ],
    },
    {
      title: "C++ Game Developer — Maze Runner",
      company_name: "University OOP Project",
      icon: C, // Replace with SFML or C++ icon
      iconBg: "#dbf3ff",
      date: "Jul 2023 – Nov 2023",
      points: [
        "C++ & SFML, with OOP-based game logic.",
        "Team project scored 97%.",
      ],
    },
  ];
  

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/annatruong04',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/thaotruong964/',
    }
];

export const projects = [
    {
      iconUrl: null, // Replace with your custom icon
      theme: 'btn-back-purple',
      name: '3D Data Storytelling (WIP)',
      description: 'A creative frontend experiment using Three.js to transform historical communication data into an interactive 3D narrative. This project visualizes findings from my summer research using scroll-based animations, immersive scenes, and smooth UI transitions to make statistics engaging and accessible.',
      link: '/projects#data-viz',
    },
    {
      iconUrl: flutter, // Replace with your Flutter/social app icon
      theme: 'btn-back-lightblue',
      name: 'Student Social App',
      description: 'Built during the Unihack 2025 competition, this Flutter app lets users share photos in real-time, featuring Firebase integration for authentication, media storage, and data sync. I led the UI/UX design using Figma and developed a custom home screen widget to enhance user engagement through personalization and speed.',
      link: 'https://github.com/annatruong04/locket_unihack',
    },
    {
      iconUrl: vue, // Replace with your Vue/web app icon
      theme: 'btn-back-green',
      name: 'Volunteer Web Platform',
      description: 'A full-stack web application developed for a student volunteer organization. I designed the frontend in Figma and implemented it with Vue.js, creating 20+ dynamic components. The backend was built with Node.js and Express, featuring 30+ RESTful APIs and a MySQL database optimized for performance and scalability.',
      link: 'https://github.com/annatruong04/24S1_WDC_UG_Project',
    },
    {
      iconUrl: C, // Replace with your C++ or SFML icon
      theme: 'btn-back-blue',
      name: 'Maze Runner Game',
      description: 'A team-developed game built in C++ using SFML, designed as part of a university OOP project. We implemented procedural maze generation, real-time movement with collision detection, and modular OOP architecture. The project earned a 97% grade for both technical depth and code quality.',
      link: 'https://github.com/annatruong04/MazeRunner',
    },
  ];
  