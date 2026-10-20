import Image from "next/image";
import type { Project } from "@/content/projects";

/**
 * Screenshot-only panel. Used on the portfolio page where the project name,
 * category, technologies and links are rendered in an adjacent details column,
 * so repeating them inside the card would duplicate the content.
 */
export function ProjectShot({ project, priority = false }: { project: Project; priority?: boolean }) {
  const screenshot = project.screenshots[0];
  if (!screenshot) return null;

  return (
    <div className="group overflow-hidden rounded-lg border border-slate-border bg-slate-light">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          priority={priority}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const screenshot = project.screenshots[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-slate-border bg-white">
      {screenshot ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-border bg-slate-light">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            priority={priority}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-navy">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-slate-border bg-slate-light px-3 py-1 text-xs text-slate-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.liveUrl || project.repoUrl ? (
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue link-underline"
              >
                View live site
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue link-underline"
              >
                Source code
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
