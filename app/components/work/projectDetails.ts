import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHono,
  SiPython,
  SiTypescript,
  SiFastapi,
} from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
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

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "StudentCopilot",
    description: "Think Cursor and Notion had a baby.",
    technologies: [SiHono, SiReact, SiTailwindcss, SiVite, RiVercelFill],
    techNames: ["Hono", "React", "Tailwind CSS", "Vite", "Vercel"],
    techLinks: [
      "https://hono.dev/",
      "https://reactjs.org/",
      "https://tailwindcss.com/",
      "https://vitejs.dev/",
      "https://vercel.com/",
    ],
    github: "https://github.com/Egham-7/student-copilot",
    demo: "https://www.studentcopilot.app/",
    image: "/projects/StudentCopilot.png",
    available: true,
  },

  {
    id: 1,
    name: "ReadYou",
    description: "AI Readme Generator for your repos.",
    technologies: [SiPython, SiReact, SiTypescript, SiFastapi],
    techNames: ["Python", "React", "TypeScript", "FastAPI"],
    techLinks: [
      "https://www.python.org/", // Python
      "https://reactjs.org/", // React
      "https://www.typescriptlang.org/", // TypeScript
      "https://fastapi.tiangolo.com/", // FastAPI
    ],
    github: "https://github.com/Egham-7/readme-ai",
    demo: "https://readyou.uk",
    image: "/projects/ReadYou.jpeg",
    available: true,
  },
];
