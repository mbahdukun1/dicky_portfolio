import {
  mamApa,
  mobile,
  backend,
  creator,
  web,
  javascript,
  Travelaku,
  healtyTech,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  sagara,
  rds,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vue,
  pinia,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "pinia",
    icon: pinia,
  },
];

const experiences = [
  {
    title: "Back End Engineer",
    company_name: "Sagara Technology",
    icon: sagara,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: ["Develop the HRIS project that was previously created by adding several HRIS project features", "Present the features developed to the user and connect the server and client"],
  },
  {
    title: "RPA Developer",
    company_name: "PT Reycom Document Solusi",
    icon: rds,
    iconBg: "#E6DEDD",
    date: "Des 2021 - June 2022",
    points: ["Develop a BOT using an automation language anywhere according to the needs of the company", "Perform maintenance and perform trouble fixing to keep the BOT running"],
  },
  {
    title: "Data Entry",
    company_name: "PT Reycom Document Solusi",
    icon: rds,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Des 2022",
    points: ["Retrieving and importing data to be entered into the company's database server", "Work according to the target to input daily data"],
  },
  {
    title: "Brand Ambassador",
    company_name: "Kiki Tech PTE. LTD",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - August 2021",
    points: ["Promote the company to many people and do branding on the products sold at the company"],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travelaku-App",
    description: "Travel ticket website that was created during the final project phase 1 when participating in a hacktiv website that can be included in ordering tickets to holiday destinations ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Midtrans",
        color: "pink-text-gradient",
      },
    ],
    image: Travelaku,
    source_code_link: "https://mbahdukun1.github.io/Travelaku-app/index.html",
  },
  {
    name: "Healty Tech",
    description: "The admin website which was created as the final project in phase 1 when participating in hacktiv is used for consulting health problems and arranging appointment schedules with doctors and patient disease reports .",
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
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: healtyTech,
    source_code_link: "https://github.com/",
  },
  {
    name: "MamAPA",
    description: "Mamapa is a mobile app for recipe inspiration and sharing culinary creations. It uses AI to provide personalized recipe suggestions for users products displayed.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "ApolloServer",
        color: "pink-text-gradient",
      },
      {
        name: "ChatGPT API",
        color: "red-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TalkJS",
        color: "white-text-gradient",
      },
      {
        name: "3rd party API for server-side ",
        color: "blue-text-gradient",
      },
    ],
    image: mamApa,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
