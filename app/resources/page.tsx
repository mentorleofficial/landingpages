import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Resources",
  "Practical roadmaps, cheatsheets, AI workflows, and mentorship resources from Mentorle.",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col px-5 py-16 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          Resources
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Curated roadmaps, cheatsheets, and AI workflows built by mentors who
          use them in the real world.
        </p>
      </main>
      <Footer />
    </div>
  );
}
