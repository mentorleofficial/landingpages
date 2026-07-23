import type { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";

type StubPageProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function createStubMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Mentorle`,
      description,
      url: path,
    },
  };
}

export default function StubPage({
  title,
  description,
  children,
}: StubPageProps) {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col px-5 py-16 sm:px-8 lg:px-10">
        <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        {children}
        <p className="mt-10">
          <Link
            href="/"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
