import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiZig,
  SiVite,
  SiMysql,
  SiPython,
  SiOpenai,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "StudentCopilot",
    description:
      "An all-in-one platform AI copilot for students to manage their academic life.",
    technologies: [SiTypescript, SiReact, SiTailwindcss, SiVite, SiOpenai],
    techNames: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Convex",
      "OpenAI",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://vitejs.dev/",
      "https://convex.app/",
      "https://openai.com/",
    ],
    github: "https://github.com/Egham-7/StudentCopilot",
    demo: "https://www.studentcopilot.app/",
    image: "/projects/StudentCopilot.png",
    available: true,
  },
  {
    id: 1,
    name: "TruthLens",
    description:
      "Devlop a google chrome extension that uses LLMs to fact check multi modal information.",
    technologies: [DiJava, SiMysql, SiReact, SiTypescript, SiOpenai],
    techNames: ["Java", "MySQL", "Typescript", "React", "OpenAI"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.mysql.com/",
      "https://openai.com/",
    ],
    github: "https://github.com/botirk38/fact-checker",
    demo: "https://fact-checker-production.up.railway.app/",
    image: "/projects/TruthLens.png",
    available: true,
  },

  {
    id: 2,
    name: "StartupPlanner",
    description:
      "A all in one platform for young entrepreneurs to build their dream business. ",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiPython, SiOpenai],
    techNames: ["TypeScript", "React", "Next.js", "Python", "OpenAI"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://www.python.org/",
      "https://openai.com/",
    ],
    github: "https://github.com/botirk38/startup-planner",
    demo: "https://startup-planner.vercel.app/",
    image: "/projects/StartupPlanner.png",
    available: true,
  },
];
