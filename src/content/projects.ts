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
export const projects: Project[] = [];

/** Only published projects are ever rendered. */
export function getPublishedProjects(): Project[] {
  return projects.filter((project) => project.published);
}

export function hasPublishedProjects(): boolean {
  return getPublishedProjects().length > 0;
}
