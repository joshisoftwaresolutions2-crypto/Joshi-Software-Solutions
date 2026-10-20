/**
 * Portfolio data model.
 *
 * Projects are stored separately from page markup so they can be added,
 * removed, or reordered without editing components.
 *
 * IMPORTANT: Do not invent projects. Add real entries with genuine assets,
 * technologies, and verified URLs only. Entries marked `published: false`
 * are treated as development placeholders and are never rendered publicly.
 */

export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Short summary used in cards and previews. */
  summary: string;
  /** The problem or objective the project addressed. */
  objective: string;
  /** The contribution made by Joshi Software Solutions. */
  contribution: string;
  technologies: string[];
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
  repoUrl?: string;
  /** Only `true` projects are shown publicly. */
  published: boolean;
};

/**
 * Placeholder template. `published` is false, so this never appears on the
 * public site. Use it as a reference when adding a real project.
 */
export const projectTemplate: Project = {
  slug: "example-project-slug",
  name: "Example Project Name",
  category: "Business Website",
  summary: "One or two sentences describing the project and its result.",
  objective: "What the client needed and why it mattered.",
  contribution: "What Joshi Software Solutions designed and built.",
  technologies: ["Next.js", "TypeScript"],
  screenshots: [
    {
      src: "/portfolio/example-screenshot.png",
      alt: "Screenshot of the example project",
      width: 1600,
      height: 1000,
    },
  ],
  liveUrl: "https://example.com",
  repoUrl: undefined,
  published: false,
};

/** The live portfolio. Add real, published projects here. */
export const projects: Project[] = [
  {
    slug: "mentixo-ai",
    name: "Mentixo AI",
    category: "Full-stack AI",
    summary:
      "A full-stack AI study assistant that turns scattered questions into structured learning. Students capture a doubt, the app reads it with OCR, answers it with the Gemini API, and turns the topic into a quiz with progress analytics.",
    objective:
      "Students collect doubts across notes, screenshots and textbooks, then wait for someone to answer them, and building practice quizzes by hand is slow and repetitive, which makes revision inconsistent.",
    contribution:
      "Designed and built the full-stack architecture: a React interface backed by a Node.js and Express REST API with MongoDB for persistence, Gemini API integration for OCR-based doubt solving and automated quiz generation, and an analytics dashboard so learners can review accuracy and progress over time.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Gemini API",
      "Tailwind CSS",
    ],
    screenshots: [
      {
        src: "/portfolio/mentixo.png",
        alt: "Mentixo AI dashboard showing OCR doubt solving, quiz generation and learning analytics",
        width: 2762,
        height: 1538,
      },
    ],
    liveUrl: "https://mentixo.netlify.app/",
    repoUrl: undefined,
    published: true,
  },
  {
    slug: "devflow",
    name: "DevFlow",
    category: "Full-stack",
    summary:
      "A productivity platform that keeps tasks, projects and progress in one place. Developers organize work on Kanban boards, track projects, and watch delivery metrics update in real time.",
    objective:
      "Task tracking gets split across notes, chat and issue trackers, so priorities are easy to lose, and developers want a single, fast board with analytics instead of jumping between tools.",
    contribution:
      "Built drag-and-drop Kanban boards in React with a clean, responsive layout, created a Node.js REST API over a PostgreSQL database for boards, columns and tasks, and added an analytics view for throughput and workload visibility.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
    ],
    screenshots: [
      {
        src: "/portfolio/devflow.png",
        alt: "DevFlow Kanban board with project tracking, task management and analytics dashboard",
        width: 2880,
        height: 1704,
      },
    ],
    liveUrl: "https://dev-flow-manager.netlify.app/",
    repoUrl: undefined,
    published: true,
  },
  {
    slug: "periodic-table-game",
    name: "Periodic Table Game",
    category: "Games / Front-end",
    summary:
      "Turns memorising elements into a quick, playable challenge. Multiple game modes test symbols, names and groups, and a local leaderboard tracks high scores.",
    objective:
      "Learning the periodic table is repetitive and hard to make stick, and most study tools are passive and give no feedback or progress tracking.",
    contribution:
      "Built the game loop in vanilla JavaScript with a responsive HTML and CSS layout, added multiple modes and scoring rules to keep practice varied, and stored high scores locally so progress survives a refresh.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    screenshots: [
      {
        src: "/portfolio/periodic-game.png",
        alt: "Periodic Table Game interface with game modes, element questions and a high-score leaderboard",
        width: 2756,
        height: 1520,
      },
    ],
    liveUrl: "https://periodicgame.netlify.app/",
    repoUrl: undefined,
    published: true,
  },
  {
    slug: "spyderman-shooting-game",
    name: "Spyderman Shooting Game",
    category: "Games",
    summary:
      "A 2D browser shooter rendered on HTML5 Canvas, using a game loop with enemy waves, collision detection and real-time scoring to demonstrate animation and gameplay programming.",
    objective:
      "A hands-on way to practise animation loops, collisions and performance in the browser, where Canvas games need smooth frame timing to feel responsive.",
    contribution:
      "Rendered the scene on HTML5 Canvas with a requestAnimationFrame loop, implemented enemy waves, collision detection and scoring in JavaScript, and tuned the loop for smooth play on desktop and mobile.",
    technologies: ["JavaScript", "HTML5", "Canvas"],
    screenshots: [
      {
        src: "/portfolio/spyderman-game.png",
        alt: "Spyderman Shooting Game built with HTML5 Canvas, featuring enemy waves, power-ups and real-time score",
        width: 2752,
        height: 1528,
      },
    ],
    liveUrl: "https://spydygame.netlify.app/",
    repoUrl: undefined,
    published: true,
  },
];

/** Only published projects are ever rendered. */
export function getPublishedProjects(): Project[] {
  return projects.filter((project) => project.published);
}

export function hasPublishedProjects(): boolean {
  return getPublishedProjects().length > 0;
}
