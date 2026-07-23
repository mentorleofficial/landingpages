import type { Metadata } from "next";
import StubPage, { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Mentorle Plus",
  "Explore Mentorle Plus for deeper mentorship, priority sessions, and structured growth support.",
  "/plus",
);

export default function PlusPage() {
  return (
    <StubPage
      title="Mentorle Plus"
      description="Go deeper with priority mentor access, expert-led sessions, and structured support designed for serious learners and founders."
    />
  );
}
