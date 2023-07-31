import {
  support,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mysql,
  flask,
  python,
  mongodb,
  git,
  docker,
  easysend,
  imhuston,
  liram,
  caspit,
  mediatv
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Technical Supporter",
    icon: support,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "EasySend",
    icon: easysend,
    iconBg: "#fff",
    date: "Jan 2022 — Aug 2023",
    points: [
      "Worked as a Full Stack Web Developer in the R&D Delivery team.",
      "Developing new features in response to client requests and maintaining web applications using Ember.js, Python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer (Voluntary work)",
    company_name: "ImHuston",
    icon: imhuston,
    iconBg: "#fff",
    date: "May 2021 — Jul 2021",
    points: [
      "Build the user interface and new components using Angular as framework and Figma as UI design tool.",
    ],
  },
  {
    title: "Support Engineer TIER2 ",
    company_name: "Liram Financial Software",
    icon: liram,
    iconBg: "#fff",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Support, install, maintain, and troubleshoot SQL issues and errors using MSSQL.",
      "Troubleshoot and support, windows and software issues and errors handling",
    ],
  },
  {
    title: "Technical Supporter",
    company_name: "Caspit Payments Technologies",
    icon: caspit,
    iconBg: "#fff",
    date: "Oct 2017 - Jan 2020",
    points: [
      "Troubleshoot and support network, windows, and web application issues, errors, and handling.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Eran Shirazi",
    designation: "CTO",
    company: "EasySend",
  },
];

const projects = [
  {
    name: "Media-TV",
    description:
      "Web-based platform that allows users to search for movies/tv-series. The app uses code splitting and React-lazy, lazy-load-image libraries to improve performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: mediatv,
    source_code_link: "https://github.com/eranlev01/cinema-app-react",
    live_demo_link: "https://master.d23yg1punpn4x8.amplifyapp.com/"
  },
];

export { services, technologies, experiences, testimonials, projects };
