import project from "../assets/projects/project.jpg";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Hi! I'm a computer science student at UBC who enjoys building thoughtful software and understanding how complex systems work behind the scenes. I’m especially interested in how technology, people, and ideas interact, and I like turning ideas from “this would be cool if it existed” into real products through full stack development and product-focused problem solving.

Outside of tech, I spend a lot of time hiking, traveling, and reading. Lately I’ve been alternating between reading Sapiens by Yuval Noah Harari and listening to “Canyon Moon” by Harry Styles. I’m always interested in things that make you think or see the world a little differently, so if you have any recommendations feel free to reach out :)`;

export const EXPERIENCES = [
  {
    year: "March 2026 - Present",
    role: "Software Developer (Riipen level up)",
    company: "UNUHR Inc.",
    description: "Through Riipen Level UP, I work on the development of a mobile and web platform for UNUHR designed to connect underrepresented job seekers with inclusive employers. I collaborate with a small development team to translate UX research and product requirements into functional features, contributing to both frontend and backend implementation as the platform progresses toward an MVP.",
    technologies: ["Full Stack Development", "Product Collaboration","Agile Development"],
  },
  {
    year: "Sept 2025 - Present",
    role: "Project Manager",
    company: "Google Developer Student Club UBC (GDSC)",
    description: "At GDSC UBC, I lead the development of ReWear, a sustainability-focused web product built by a small engineering team. I drive product direction, break high-level ideas into concrete features, and work closely with developers on technical decisions and implementation as we build toward an MVP. This role sits at the intersection of product thinking and engineering execution.",
    technologies: ["Project Planning", "Agile / Scrum", "Leadership", "Communication"],
  },
  {
    year: "Aug 2025 - Present",
    role: "Web Designer",
    company: "Youcode @ UBC (Click Here!)",
    description: "I designed the official YouCode hackathon website in Figma, translating event requirements into a polished, user-focused interface. I worked closely with a team of 7+ organizers and contributors to iterate on layout, accessibility, and content clarity, ensuring information was easy to navigate for participants. This experience strengthened my ability to collaborate across roles and design effectively within real-world constraints.",
    technologies: ["Team Collaboration", "UI/UX Design", "Accessibility", "Figma"],
    link: "https://ubcyoucode.com/"
  },
  {
    year: "May 2025 - Present",
    role: "Internal Relations Coordinator",
    company: "Women in Computer Science UBC (WiCS)",
    description: "I manage internal operations and community engagement for a 30-member executive team. I help plan and execute internal events, coordinate large-scale initiatives such as retreats and joint socials, and support on-the-day logistics for workshops and hackathons serving hundreds of students. My role focuses on strengthening team cohesion and ensuring smooth internal communication.",
    technologies: ["Team Collaboration", "Communication", "Leadership", "Event Planning"],
  },
  {
    year: "Apr 2025 - Present",
    role: "Math/Coding Tutor",
    company: "Ultimate Coders",
    description: "I tutor students in math and computer science across a range of programming languages and tools, adapting instruction to each student’s level, goals, and curriculum. I teach in both small-group and one-on-one settings, guiding students through core concepts, problem-solving strategies, and hands-on debugging. I also lead trial sessions, support student onboarding, and help learners build long-term confidence in coding and logical thinking.",
    technologies: ["Mentorship", "Technical Communication", "Problem Solving", "Adaptability"],
  },
  {
    year: "Sept 2025 - Dec 2025",
    role: "Mentee",
    company: "Dell Technologies",
    description: "Selected for a competitive mentorship program focused on early-career development in tech. I participated in structured sessions and mentor-led discussions covering AI systems, data science, cloud infrastructure, cybersecurity, and career pathways. This experience provided exposure to industry perspectives and professional growth guidance.",
    technologies: ["Professional Developement", "Technical Literacy", "Communication"],
  },
  {
    year: "July 2024 - Aug 2024",
    role: "Software Engineering Fellow",
    company: "Headstarter",
    description: "Participated in a selective software engineering fellowship focused on hands-on learning and collaborative project development. Completed one full project while engaging in technical workshops, feedback sessions, and peer collaboration, gaining early exposure to real-world development workflows.",
    technologies: ["HTML", "CSS", "Javascript", "GitHub"],
  },
  {
    year: "Oct 2023 - Apr 2024",
    role: "Design Team Member",
    company: "QMIND",
    description: `As a member of QMind at Queen's University, I actively contributed to the club's initiatives by supporting project efforts and providing valuable input to advance our goals. My involvement played a role in enhancing the club’s activities and impact.`,
    technologies: ["Team Collaboration", "Research", "Problem Solving"],
  },
  {
    year: "Sept 2022 - Aug 2023",
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
    year: "June 2022 - Jan 2023",
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
    year: "Dec 2020 - Feb 2022",
    role: "Crew Member",
    company: "McDonald's Canada",
    description: `Delivered exceptional customer service and maintained operational efficiency in a fast-paced environment at McDonald's.`,
    technologies: ["Team Collaboration", "Communication", "Customer Service"],
  },
];

export const PROJECTS = [
  {
    title: "ReWear - In Progress",
    image: project,
    description:
      "A sustainability-focused wardrobe assistant developed as part of GDSC to help users better understand, reuse, and make more informed, longer-lasting clothing choices. Currently owning end-to-end product development, including system design, user flows, and full-stack implementation, with supporting design work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Miro"],
    link: "https://github.com/JazaKhan/ReWear",
  },
  {
    title: "BookLog",
    image: project5,
    description:
      "Developing a Java-based book tracking app that helps users manage their reading lists by adding, modifying, and removing books. Features include data persistence with JSON and a GUI built with Java Swing for an interactive experience. Designed with improved coding practices for better maintainability and scalability.",
    technologies: ["Java", "Java Swing", "JSON", "JUnit"],
    link: "https://github.com/JazaKhan/bookLog",
  },
  {
    title: "Friend, Fan, or Foe - Instagram Edition",
    image: project3,
    description:
      "A small, fun side project built with R Shiny to explore data science concepts by analyzing Instagram follower and following data. The app identifies mutuals and non-mutual relationships using user-uploaded JSON data.",
    technologies: ["R", "Shiny"],
    link: "https://jkcodes.shinyapps.io/friend-fan-or-foe/",
  },
  {
    title: "WealthHealth",
    image: project2,
    description:
      "A financial management app that allows users to track income and expenses, modify entries, and save/load data to and from files. Designed to promote financial literacy and help users manage their finances effectively. Features include adding, modifying, and deleting expenses and incomes, with the option to save progress for future use.",
    technologies: ["Java", "Java Swing", "JSON"],
    link: "https://github.com/JazaKhan/WealthHealth",
  },
  {
    title: "Landing Page",
    image: project1,
    description:
      "A personal website created using React and styled with Tailwind CSS. This responsive site showcases my portfolio, skills, and projects. It features an intuitive layout, smooth navigation, and modern design elements, providing a professional online presence.",
    technologies: ["Tailwind CSS", "React", "Framer Motion"],
    link: "https://jazakhan.com/",
  },
];
