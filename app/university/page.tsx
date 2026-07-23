import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "For University",
  "Partner with Mentorle to bring mentorship infrastructure to your campus and learners.",
  "/university",
);

export default function UniversityPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col px-5 py-16 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          For University
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Bring Mentorle&apos;s mentorship layer to your institution — curated
          mentor matching, sessions, and community for your learners.
        </p>
      </main>
      <Footer />
    </div>
  );
}
