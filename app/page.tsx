import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhyMentorleExists from "@/components/WhyMentorleExists";
import WhoMentorleIsFor from "@/components/WhoMentorleIsFor";
import WhatYouCanDoHere from "@/components/WhatYouCanDoHere";
import MentorSpotlight from "@/components/MentorSpotlight";
import Membership from "@/components/Membership";
import CommunityEvents from "@/components/CommunityEvents";
import WallOfMomentum from "@/components/WallOfMomentum";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { fetchMentors } from "@/lib/fetch-mentors";
import { summarizeMentors } from "@/lib/mentors";

export default async function Home() {
  const allMentors = await fetchMentors();
  const summary = summarizeMentors(allMentors);
  const spotlightMentors = allMentors.slice(0, 12);

  return (
    <div className="bg-grid flex min-h-full flex-1 flex-col">
      <Header />
      <main className="page-enter flex flex-1 flex-col">
        <Hero mentors={allMentors} summary={summary} />
        <TrustedBy />
        <WhyMentorleExists />
        <WhoMentorleIsFor />
        <WhatYouCanDoHere />
        <MentorSpotlight
          mentors={spotlightMentors}
          mentorCount={allMentors.length}
        />
        <Membership />
        <CommunityEvents mentors={allMentors} summary={summary} />
        <WallOfMomentum mentors={allMentors} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
