import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/social";

const exploreLinks = [
  { href: "/become-mentor", label: "Mentors" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/#faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

const socialLinks = [
  {
    ...SOCIAL_LINKS.discord,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.27 5.33A16.6 16.6 0 0 0 14.93 4l-.25.45c1.72.47 2.68 1.15 2.68 1.15A11.8 11.8 0 0 0 12 5.2a11.8 11.8 0 0 0-5.36.4s1 .72 2.6 1.18L9.07 4A16.4 16.4 0 0 0 4.73 5.33S1.9 10.05 1.5 17.54A16.5 16.5 0 0 0 6.5 20l1.1-1.45a8.1 8.1 0 0 1-1.7-.9l.38-.3c2.9 1.32 6.1 1.32 9.44 0l.38.3c-.55.35-1.13.66-1.74.92L17.5 20a16.3 16.3 0 0 0 5-2.46c-.4-7.49-3.23-12.21-3.23-12.21ZM9.1 14.9c-.9 0-1.62-.8-1.62-1.8s.72-1.8 1.62-1.8 1.64.8 1.62 1.8-.72 1.8-1.62 1.8Zm5.8 0c-.9 0-1.62-.8-1.62-1.8s.72-1.8 1.62-1.8 1.64.8 1.62 1.8-.72 1.8-1.62 1.8Z" />
      </svg>
    ),
  },
  {
    ...SOCIAL_LINKS.instagram,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    ...SOCIAL_LINKS.linkedin,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4A1.65 1.65 0 1 0 5.12 7.3 1.65 1.65 0 0 0 5.1 4ZM20.3 20h-2.8v-5.5c0-1.55-.55-2.4-1.75-2.4-1.28 0-1.9.87-1.9 2.4V20h-2.8V9.5h2.7v1.4c.55-.95 1.55-1.7 3.2-1.7 2.2 0 3.35 1.35 3.35 4.15V20Z" />
      </svg>
    ),
  },
  {
    ...SOCIAL_LINKS.whatsapp,
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3.2A8.7 8.7 0 0 0 4.2 15.4L3 20.8l5.5-1.4A8.7 8.7 0 1 0 12 3.2Zm4.9 12.4c-.2.6-1.2 1.05-1.95 1.2-.52.1-1.2.18-3.5-.75-2.95-1.18-4.85-4.15-5-4.35-.15-.2-1.2-1.6-1.2-3.05s.75-2.15 1.02-2.45c.25-.28.55-.35.74-.35h.53c.17 0 .4-.06.62.47.24.58.8 2 .87 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.07 1.3 2.37 1.45.3.15.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.12.08.72-.12 1.32Z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex" aria-label="Mentorle home">
              <Image
                src="/logo.svg"
                alt="Mentorle"
                width={140}
                height={36}
                unoptimized
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
              Real mentorship for students, founders, and learners. Built over
              3+ years, rooted in Punjab, growing with ambition.
            </p>
            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-colors hover:border-neutral-400 hover:text-foreground"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-foreground uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-foreground uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6">
          <p className="text-[0.8125rem] leading-relaxed text-muted">
            © 2026 AltioraEdtech Learning (OPC) Pvt. Ltd. All rights reserved.
          </p>
          <p className="mt-1 text-[0.75rem] text-muted">
            CIN: U85500PB2025OPC064679
          </p>
        </div>
      </div>
    </footer>
  );
}
