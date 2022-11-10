import forkify from "../assets/projects/webp/forkify.webp";
import jobster from "../assets/projects/webp/jobster.webp";
import comfysloth from "../assets/projects/webp/comfysloth.webp";
import githubusers from "../assets/projects/webp/githubusers.webp";
import myportfolio from "../assets/projects/webp/myportfolio.webp";
import typescriptgenerics from "../assets/projects/webp/typescriptgenerics.webp";

const data = [
  {
    id: 1,
    name: "Forkify",
    url: {
      site: "https://forkify-recipe-app-euyjang.netlify.app/",
      repo: "https://github.com/strudel05/forkify-js-recipe-app",
    },
    image: forkify,
    description:
      "A single-page food recipe app built on pure JavaScript. Search for recipes based on ingredients. Save and edit recipe cards and create your own. ",
    technologies: ["JavaScript", "Parcel"],
  },
  {
    id: 2,
    name: "Jobster",
    url: {
      site: "https://redux-toolkit-jobster-app.netlify.app/",
      repo: "https://github.com/strudel05/redux-toolkit-jobster",
    },
    image: jobster,
    description:
      "A web app for tracking job hunting progress. Create and edit cards with job details and track its status. State management done with Redux.",
    technologies: [
      "React",
      "Redux",
      "Styled Components",
      "React Router",
      "Recharts",
    ],
  },
  {
    id: 3,
    name: "Comfy Sloth",
    url: {
      site: "https://react-ecommerce-comfy-app.netlify.app/",
      repo: "https://github.com/strudel05/react-ecommerce-furniture-store",
    },
    image: comfysloth,
    description:
      "A mock e-commerce site for furniture sales. Made with useContext and useReducer hooks in React for state management. Checkout and transaction supported with Stripe, Node.js and Netlify Functions.",
    technologies: [
      "React",
      "Auth0",
      "Stripe",
      "Node.js",
      "Serverless Functions",
      "Styled Components",
    ],
  },
  {
    id: 4,
    name: "Github Users",
    url: {
      site: "https://react-githubusers-search-euyjang.netlify.app/",
      repo: "https://github.com/strudel05/react-github-users-search",
    },
    image: githubusers,
    description:
      "A website where you can look up Github users by their handles and view their followers and statistics. Uses the Github API for data and Auth0 for authentication.",
    technologies: ["React", "Axios", "Github API", "Auth0", "FusionCharts"],
  },
  {
    id: 5,
    name: "TypeScript & Generics",
    url: {
      site: "https://generics-typescript-functions.netlify.app/",
      repo: "https://github.com/strudel05/typescript-generics-fun",
    },
    image: typescriptgenerics,
    description:
      "Showcasing three functions (search, sort and filter) made with TypeScript's generics in React. Currently it only displays fake articles and people's info, but the code can be easily modified to accept any data object!",
    technologies: ["React", "TypeScript", "Generics"],
  },
  {
    id: 6,
    name: "Portfolio Project",
    url: {
      site: "https://react-githubusers-search-euyjang.netlify.app/",
      repo: "https://github.com/strudel05/react-github-users-search",
    },
    image: myportfolio,

    description:
      "My own portfolio website. Made with React, Next.js and Tailwind CSS!",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default data;
