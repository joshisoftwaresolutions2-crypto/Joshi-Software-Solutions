import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-slate-border bg-slate-light/60 px-6 py-12 text-center sm:px-10">
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-muted">
        {description}
      </p>
      {children ? <div className="mt-6 flex justify-center">{children}</div> : null}
    </div>
  );
}
