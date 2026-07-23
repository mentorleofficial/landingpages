import type { Metadata } from "next";
import StubPage, { createStubMetadata } from "@/components/StubPage";

export const metadata: Metadata = createStubMetadata(
  "Community",
  "Join the Mentorle community for peer learning, expert-led sessions, and practical support across Punjab and beyond.",
  "/community",
);

export default function CommunityPage() {
  return (
    <StubPage
      title="Community"
      description="A community-led space for students, founders, and learners to grow together through sessions, peer support, and real mentorship."
    />
  );
}
