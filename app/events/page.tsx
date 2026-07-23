import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Events",
  "Explore Mentorle community events, workshops, meetups, and expert sessions.",
  "/events",
);

export default function EventsPage() {
  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col px-5 py-16 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          Events
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Meetups, workshops, AMAs, and live expert sessions from the Mentorle
          community across Punjab and beyond.
        </p>
      </main>
      <Footer />
    </div>
  );
}
