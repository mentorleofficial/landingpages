import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/become-mentor", label: "Mentors" },
  { href: "/community", label: "Community" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/pricing", label: "Pricing" },
] as const;

export default function Header() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-80"
          aria-label="Mentorle home"
        >
          <Image
            src="/logo.svg"
            alt="Mentorle"
            width={148}
            height={38}
            priority
            unoptimized
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="https://platform.mentorle.in/login"
            className="hidden text-[0.9375rem] text-muted transition-colors hover:text-foreground sm:inline"
          >
            Login
          </a>
          <a
            href="https://platform.mentorle.in/signup"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-[0.875rem] font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Join Free
          </a>
        </div>
      </div>

      <nav
        aria-label="Mobile"
        className="flex gap-4 overflow-x-auto border-t border-border/60 px-5 py-2.5 md:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 text-sm text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://platform.mentorle.in/login"
          className="shrink-0 text-sm text-muted transition-colors hover:text-foreground sm:hidden"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
