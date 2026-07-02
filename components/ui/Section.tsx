import { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-14">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            )}

            {subtitle && (
              <p className="text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
