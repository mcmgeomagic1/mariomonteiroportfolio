// -------------------- THUMBNAILS --------------------
import thumb1 from "../Assets/projects/project1/thumbnail.svg";
import thumb2 from "../Assets/projects/project2/thumbnail.png";
import thumb3 from "../Assets/projects/project3/thumbnail.png";
import thumb4 from "../Assets/projects/project4/thumbnail.png";
import thumb5 from "../Assets/projects/project5/thumbnail.png";
import thumb6 from "../Assets/projects/project6/thumbnail.png";

// -------------------- COVERS --------------------
import cover1 from "../Assets/projects/project1/cover.svg";
import cover2 from "../Assets/projects/project2/cover.png";
import cover3 from "../Assets/projects/project3/cover.png";
import cover4 from "../Assets/projects/project4/cover.png";
import cover5 from "../Assets/projects/project5/cover.png";
import cover6 from "../Assets/projects/project6/cover.png";

// -------------------- GALLERY IMAGES --------------------
import p1img1 from "../Assets/projects/project1/image1.svg";

import p2img1 from "../Assets/projects/project2/image1.png";
import p2img2 from "../Assets/projects/project2/image2.png";
import p2img3 from "../Assets/projects/project2/image3.png";

import p3img1 from "../Assets/projects/project3/image1.png";
import p3img2 from "../Assets/projects/project3/image2.png";
import p3img3 from "../Assets/projects/project3/image3.png";

import p4img1 from "../Assets/projects/project4/image1.svg";

import p5img1 from "../Assets/projects/project5/image1.png";
import p5img2 from "../Assets/projects/project5/image2.png";
import p5img3 from "../Assets/projects/project5/image3.png";
import p5img4 from "../Assets/projects/project5/image4.png";

import p6img1 from "../Assets/projects/project6/image1.png";

// -------------------- PROJECT DATA --------------------
export const projects = [
  {
    id: 1,
    title: "Easepaycar App",
    description: "An app that helps users buy cars using bank financing",
    type: "UI/UX Design",
    about:
      "EASEPAYCAR is a mobile application I designed to help users in Angola purchase cars through bank financing. During this project, I led the full UX design process, conducting user research, creating personas, defining user flows and task maps, and developing low- and high-fidelity prototypes to produce a testable and intuitive user experience.",
    thumbnail: thumb1,
    cover: cover1,
    technologies: [
      "Figma",
      "User Research",
      "Prototyping",
      "User Flows/Map",
      "Wireframing",
      "UI Design",
      "Information Architecture",
      "Design Systems",
    ],
    images: [p1img1],
    palette: {
      background: "#00243D",
      primary: "#3382B8",
      footer: "#153F5C",
    },
  },
  {
    id: 2,
    title: "Mirempt App",
    description:
      "Mirempt is a web app tool that companies can use to do HR management",
    type: "Frontend Next App",
    about:
      "With Mirenpet, companies can manage their employees, contract status, handle payslips, leave requests, track employee careers, and maintain full control of employee documentation. In this project, I focused on developing the frontend using Next.js, structuring reusable components, and building an intuitive interface that allows HR teams to manage employee data efficiently.",
    thumbnail: thumb5,
    cover: cover5,
    technologies: [
      "Next.js",
      "Styled-Components",
      "TypeScript",
      "React",
      "Context API",
      "Chart.js",
      "Hooks",
    ],
    images: [p5img1, p5img2, p5img3, p5img4],
    palette: {
      background: "#101225",
      primary: "#5E6DF1",
      footer: "#373E79",
    },
  },
  {
    id: 3,
    title: "Marvel App",
    description: "An app that lists all comic books from Marvel API",
    type: "Frontend React App",
    about:
      "Marvel App is a React application I developed that allows users to explore comic books using the Marvel API. During this project, I focused on building the frontend interface, integrating external API data, and structuring components to create a responsive and user-friendly experience for browsing Marvel comics.",
    thumbnail: thumb3,
    cover: cover3,
    technologies: [
      "React",
      "Styled-Components",
      "React-Redux",
      "Animations",
      "Responsive Design",
    ],
    images: [p3img1, p3img2, p3img3],
    palette: {
      background: "#1B0404",
      primary: "#EE2C35",
      footer: "#531A1B",
    },
  },
  {
    id: 4,
    title: "Beauty Embassade Landing Page",
    description: "A redesign of Beauty Embassade luxury landing page",
    type: "UI Design",
    about:
      "This is a UI redesign project focused on improving the visual identity and user experience of a luxury beauty brand website. During this project, I redesigned the layout, refined typography and spacing, and created a clean, elegant interface that better reflects the brand’s premium image.",
    thumbnail: thumb4,
    cover: cover4,
    technologies: ["Figma"],
    images: [p4img1],
    palette: {
      background: "#13120C",
      primary: "#E4C99E",
      footer: "#5E503A",
    },
  },
  {
    id: 5,
    title: "Monocard Platform",
    description:
      "Monocard is a virtual business card. In this platform users can manage and customize their cards",
    type: "Frontend Next App",
    about:
      "Monocard Platform is a web application where users can create, manage, and customize their virtual business cards. In this project, I participated in the frontend development using Next.js, contributing to building reusable components and implementing an intuitive interface that allows users to easily personalize and manage their digital cards.",
    thumbnail: thumb6,
    cover: cover6,
    technologies: [
      "Next.js",
      "Wordpress",
      "Chakra UI",
      "TypeScript",
      "React",
      "Context API",
      "Authentication",
      "Hooks",
    ],
    images: [p6img1],
    palette: {
      background: "#05060C",
      primary: "#07FB5A",
      footer: "#39563C",
    },
  },
  {
    id: 6,
    title: "Lucky Dube Landing Page",
    description:
      "An artist landing page where fans can find out more about Lucky Dube",
    type: "UI Design",
    about:
      "This is a landing page I designed to celebrate the music and legacy of Lucky Dube. During this project, I focused on structuring content, designing the layout, and creating a clean and engaging user interface that allows fans to easily learn more about the artist and his impact on reggae music.",
    thumbnail: thumb2,
    cover: cover2,
    technologies: ["Figma", "Dark Mode", "Typography", "Mesh Gradients"],
    images: [p2img1, p2img2, p2img3],
    palette: {
      background: "#04180B",
      primary: "#3DF789",
      footer: "#1A5331",
    },
  },
];
