import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a UBC Computer Science student and Software Engineering Fellow at Headstarter, I’m driven by a passion for AI and tech innovation. My tech journey started unexpectedly at a bank, where I witnessed firsthand how innovative solutions can streamline operations and enhance customer experiences. This experience ignited my curiosity and set me on a path to develop robust problem-solving and teamwork skills. I am dedicated to creating AI-driven solutions that tackle complex problems and elevate user experiences.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Software Engineering Fellow",
    company: "Headstarter",
    description: `Actively participating in a rigorous 7-week software engineering fellowship, where I am honing my technical skills through hands-on projects and intensive learning. Engaging in weekly AI projects, hackathons, and collaborative final projects aimed at real-world impact. This experience is sharpening my abilities in software development, problem-solving, and teamwork, while also providing valuable feedback from industry professionals to accelerate my career trajectory.`,
    technologies: ["HTML", "CSS", "Javascript", "GitHub"],
  },
  {
    year: "2023 - 2024",
    role: "Design Team Member",
    company: "QMIND",
    description: `As a member of QMind at Queen's University, I actively contributed to the club's initiatives by supporting project efforts and providing valuable input to advance our goals. My involvement played a role in enhancing the club’s activities and impact.`,
    technologies: ["Team Collaboration", "Research", "Problem Solving"],
  },
  {
    year: "2022 - 2023",
    role: "Member Service Representative",
    company: "Coast Capital Savings",
    description: `As a Member Service Representative at Coast Capital Savings, I excelled in delivering exceptional customer service by offering personalized financial advice and resolving complex inquiries with precision. My proactive approach in identifying and addressing member needs led to increased satisfaction and strengthened client relationships, driving the branch's performance and growth.`,
    technologies: [
      "Team Collaboration",
      "Communitcation",
      "Professionalism",
      "Problem Solving",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Sales Associate",
    company: "Pandora",
    description: `As a Sales Associate at Pandora Jewelry, I delivered exceptional customer service by understanding clients' needs and recommending tailored jewelry solutions. I managed inventory efficiently and contributed to achieving sales targets, all while maintaining a high standard of store presentation and creating a memorable shopping experience for each customer.`,
    technologies: [
      "Team Collaboration",
      "Communication",
      "Customer Service",
      "Problem Solving",
    ],
  },
  {
    year: "2020 - 2022",
    role: "Crew Member",
    company: "McDonald's Canada",
    description: `Delivered exceptional customer service and maintained operational efficiency in a fast-paced environment at McDonald's.`,
    technologies: ["Team Collaboration", "Communication", "Customer Service"],
  },
];

export const PROJECTS = [
  {
    title: "Landing Page",
    image: project1,
    description:
      "A personal website created using React and styled with Tailwind CSS. This responsive site showcases my portfolio, skills, and projects. It features an intuitive layout, smooth navigation, and modern design elements, providing a professional online presence.",
    technologies: ["Tailwind CSS", "React", "Framer Motion"],
    link: "https://jazakhan.com/",
  },
  {
    title: "WealthHealth",
    image: project2,
    description:
      "Under Developement - Developing an engaging financial management app in Java to help users track expenses, manage income, and create actionable financial plans. Incorporating user stories for features like expense tracking, income management, and data persistence to support consistent and effective financial tracking. Access to project repository will be made available at the end of CPSC 210 Fall 2024 session.",
    technologies: ["Java", "...TBD"],
    link: "",
  },
  {
    title: "AI Flashcards & Stripe",
    image: project3,
    description:
      "Under Developement - A flashcard app that uses AI to create personalized learning content and integrates Stripe for seamless payments. The app is built with Next.js, React, Tailwind CSS, and Prisma, providing a modern and efficient learning experience. It aims to provide users with a tailored study approach that adapts to their individual learning styles and enhances retention.",
    technologies: ["Next.js", "React", "Tailwind", "Prisma", "Stripe"],
    link: "https://github.com/JazaKhan/FlashMasterAI",
  },
  {
    title: "HackCamp UBC - Project",
    image: project4,
    description:
      "It will take place on november 9, 2024.",
    technologies: ["..TBD"],
    link: "https://hackcamp.nwplus.io/",
  },
];
