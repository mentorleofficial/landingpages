import Link from "next/link";
import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    q: "What is Mentorle?",
    a: "Mentorle is providing one-on-one mentoring and guidance from our experienced mentors in the field of IT And Electronic or Developing a platform that would enable graduates and students to network with organizations and entrepreneurs while providing them with access to all the support they might require, including assistance in coding problems or contests.",
  },
  {
    q: "Who are the mentors on Mentorle?",
    a: "Our mentors are experienced professionals from various IT And Electronic fields, including software development, data science, cybersecurity, and more. They are passionate about helping others and committed to sharing their knowledge and expertise.",
  },
  {
    q: "What kind of support can I expect from my mentor?",
    a: "You can expect career guidance, technical problem-solving help, interview preparation, project feedback, and practical advice tailored to your goals — including support with coding challenges, contests, and navigating opportunities in IT and electronics.",
  },
  {
    q: "Is Mentorle secure?",
    a: "Yes, Mentorle takes data security very seriously. We use industry-standard security measures to protect your personal information.",
  },
  {
    q: "How much does it cost to use Mentorle?",
    a: "It is cost-effective, so you don't have to worry about authenticity or legitimacy— we offer you reliable services.",
  },
] as const;

export default function BecomeMentorFAQ() {
  return (
    <FaqSection
      id="faq"
      headingId="become-faq-heading"
      title="Frequently Asked Questions"
      description="Explore answers to common questions about mentorship on Mentorle. If you can't find what you're looking for, reach out through our community channels."
      items={faqs}
      footer={
        <p>
          Still have questions?{" "}
          <a
            href="https://t.me/mentorle"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Join our Discussion Forum
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Contact us
          </Link>
          .
        </p>
      }
    />
  );
}
