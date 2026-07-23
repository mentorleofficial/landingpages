import type { Metadata } from "next";
import StubPage, { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Case studies",
  "See how learners and founders grow through Mentorle mentorship, sessions, and community support.",
  "/case-studies",
);

export default function CaseStudiesPage() {
  return (
    <StubPage
      title="Case studies"
      description="Stories from students, founders, and mentors who used Mentorle to get practical guidance and move faster."
    />
  );
}
