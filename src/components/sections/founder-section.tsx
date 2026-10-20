import Image from "next/image";
import Link from "next/link";
import { founder, routes } from "@/config/site";

const philosophy = [
  "Understand the problem before proposing a solution.",
  "Communicate clearly and keep you informed as work progresses.",
  "Pay attention to the details that make software feel considered.",
];

/**
 * Full founder section for the About page.
 */
export function FounderSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div className="max-w-xs">
        <div className="overflow-hidden rounded-xl border border-slate-border bg-slate-light">
          <Image
            src={founder.photo}
            alt={founder.photoAlt}
            width={800}
            height={800}
            sizes="(min-width: 1024px) 20rem, 60vw"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          Meet the founder
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
          Hi, I&apos;m {founder.name} — {founder.role} at Joshi Software Solutions.
        </h2>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-muted">
          <p>
            I started Joshi Software Solutions to help businesses build a
            stronger digital presence through modern websites, custom web
            applications, and practical software solutions.
          </p>
          <p>
            With hands-on experience in frontend development, backend systems,
            databases, and UI design, I focus on building digital experiences
            that are functional, easy to use, and tailored to each project&apos;s
            needs.
          </p>
          <p>
            I believe good software starts with understanding the problem,
            communicating clearly, and paying attention to the details that
            matter.
          </p>
        </div>

        <ul className="mt-8 border-t border-slate-border">
          {philosophy.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-slate-border py-4 text-base leading-relaxed text-slate-muted"
            >
              <span aria-hidden="true" className="mt-0.5 text-blue">
                &rarr;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg font-medium text-navy">
          Let&apos;s build something useful for your business.
        </p>
        <div className="mt-4">
          <Link
            href={routes.contact}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue link-underline"
          >
            Have a project in mind? Let&apos;s talk.
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Compact founder block for the homepage, with a link to the About page.
 */
export function FounderIntro() {
  return (
    <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
      <div className="w-24 shrink-0 sm:w-28">
        <Image
          src={founder.photo}
          alt={founder.photoAlt}
          width={800}
          height={800}
          sizes="7rem"
          className="h-auto w-full rounded-xl border border-slate-border"
        />
      </div>
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          Meet the founder
        </p>
        <p className="mt-3 text-lg leading-relaxed text-navy">
          Hi, I&apos;m {founder.name}, {founder.role} at Joshi Software
          Solutions. When you work with us, you deal directly with the person
          building your project.
        </p>
        <p className="mt-3 text-base leading-relaxed text-slate-muted">
          I care about understanding the problem first, communicating clearly,
          and delivering work that is functional, easy to use, and built to last.
        </p>
        <Link
          href={routes.about}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue link-underline"
        >
          More about me
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
