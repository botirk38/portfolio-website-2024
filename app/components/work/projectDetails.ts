import {
  SiC,
  SiZig,
  SiGo,
  SiTypescript,
  SiPostgresql,
  SiPrometheus,
  SiRedis,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
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
    name: "OS-1000-lines-zig",
    description:
      "A minimal operating system written in Zig with 1000 lines of code. Features kernel development, memory management, and low-level system programming.",
    technologies: [SiZig],
    techNames: ["Zig"],
    techLinks: ["https://ziglang.org/"],
    github: "https://github.com/botirk38/OS-1000-lines-zig",
    demo: "https://github.com/botirk38/OS-1000-lines-zig",
    image: "/projects/os-zig.png",
    available: true,
  },
  {
    id: 1,
    name: "Adaptive",
    description:
      "Intelligent LLM inference infrastructure: Supercharge your LLM workloads with intelligent model selection and cost optimization.",
    technologies: [SiTypescript, SiDocker, SiKubernetes],
    techNames: ["TypeScript", "Docker", "Kubernetes"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://www.docker.com/",
      "https://kubernetes.io/",
    ],
    github: "https://github.com/Egham-7/adaptive",
    demo: "https://llmadaptive.uk",
    image: "/projects/adaptive.png",
    available: true,
  },
  {
    id: 2,
    name: "pgexporter",
    description:
      "Prometheus exporter for PostgreSQL - High-performance monitoring and metrics collection for PostgreSQL databases.",
    technologies: [SiC, SiPostgresql, SiPrometheus],
    techNames: ["C", "PostgreSQL", "Prometheus"],
    techLinks: [
      "https://www.gnu.org/software/gnu-c-manual/",
      "https://www.postgresql.org/",
      "https://prometheus.io/",
    ],
    github: "https://github.com/pgexporter/pgexporter",
    demo: "https://pgexporter.github.io",
    image: "/projects/pgexporter.png",
    available: true,
  },
  {
    id: 3,
    name: "FastKey",
    description:
      "A high-performance key-value store built with C, utilizing a thread pool for concurrency and the RESP protocol for communication.",
    technologies: [SiC, SiRedis, TbDatabase],
    techNames: ["C", "Redis Protocol", "Database"],
    techLinks: [
      "https://www.gnu.org/software/gnu-c-manual/",
      "https://redis.io/",
      "https://en.wikipedia.org/wiki/Database",
    ],
    github: "https://github.com/botirk38/fastkey",
    demo: "https://github.com/botirk38/fastkey",
    image: "/projects/fastkey.png",
    available: true,
  },
  {
    id: 4,
    name: "SemanticCache",
    description:
      "A Go library for semantic caching with LRU eviction, supporting vector-based similarity search with pluggable embedding backends.",
    technologies: [SiGo, TbDatabase],
    techNames: ["Go", "Vector Database"],
    techLinks: [
      "https://golang.org/",
      "https://en.wikipedia.org/wiki/Vector_database",
    ],
    github: "https://github.com/botirk38/semanticcache",
    demo: "https://github.com/botirk38/semanticcache",
    image: "/projects/semanticcache.png",
    available: true,
  },
  {
    id: 5,
    name: "pgagroal",
    description:
      "High-performance connection pool for PostgreSQL - Efficient database connection management and pooling solution.",
    technologies: [SiC, SiPostgresql],
    techNames: ["C", "PostgreSQL"],
    techLinks: [
      "https://www.gnu.org/software/gnu-c-manual/",
      "https://www.postgresql.org/",
    ],
    github: "https://github.com/botirk38/pgagroal",
    demo: "https://agroal.github.io/pgagroal/",
    image: "/projects/pgagroal.png",
    available: true,
  },
];
