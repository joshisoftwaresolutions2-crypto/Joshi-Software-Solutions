import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "slate" | "dark" | "white";
  id?: string;
  as?: "section" | "div";
  bordered?: boolean;
};

const tones = {
  white: "bg-white text-navy",
  light: "bg-white text-navy",
  slate: "bg-slate-light text-navy",
  dark: "bg-navy text-white",
};

export function Section({
  children,
  className,
  tone = "white",
  id,
  as: Tag = "section",
  bordered = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={[
        "py-16 sm:py-20 lg:py-24",
        tones[tone],
        bordered ? "border-t border-slate-border" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container-content">{children}</div>
    </Tag>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "mb-3 text-xs font-semibold uppercase tracking-[0.14em]",
            isDark ? "text-blue-300" : "text-blue",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "text-3xl sm:text-4xl font-semibold",
          isDark ? "text-white" : "text-navy",
        ].join(" ")}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={[
            "mt-4 text-lg leading-relaxed",
            isDark ? "text-white/75" : "text-slate-muted",
          ].join(" ")}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
