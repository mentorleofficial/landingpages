import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export type FaqItem = {
  q: string;
  a: string;
};

type FaqSectionProps = {
  id?: string;
  headingId: string;
  title: string;
  eyebrow?: string;
  description?: string;
  items: readonly FaqItem[];
  /** Defaults to white to match Plus */
  tone?: "white" | "background";
  footer?: ReactNode;
};

export default function FaqSection({
  id,
  headingId,
  title,
  eyebrow = "Questions",
  description,
  items,
  tone = "white",
  footer,
}: FaqSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-border/60 ${
        tone === "white" ? "bg-white" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <Reveal>
          <p className="text-center text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-center font-display text-[1.875rem] tracking-tight text-foreground sm:text-[2.25rem]"
          >
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-[36rem] text-center text-[1rem] leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </Reveal>

        <ul className="mt-10 divide-y divide-border/70 border-y border-border/70">
          {items.map((item, index) => (
            <Reveal key={item.q} delay={index * 70} as="li">
              <div className="py-6 sm:py-7">
                <h3 className="text-[1rem] font-semibold text-foreground">
                  {item.q}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {footer ? (
          <Reveal delay={200}>
            <div className="mt-8 text-center text-sm text-muted">{footer}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function FaqContactFooter({
  fullFaqHref,
}: {
  fullFaqHref?: string;
}) {
  return (
    <p>
      Still deciding?{" "}
      <Link
        href="/contact"
        className="font-medium text-foreground underline-offset-4 hover:underline"
      >
        Contact us
      </Link>
      {fullFaqHref ? (
        <>
          {" "}
          or{" "}
          <Link
            href={fullFaqHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            read the full FAQ
          </Link>
        </>
      ) : null}
      .
    </p>
  );
}
