import Image from "next/image";

const logos = [
  {
    name: "GNDU",
    fullName: "Guru Nanak Dev University",
    src: "/partners/gndu.png",
  },
  {
    name: "EduBridge",
    fullName: "EduBridge",
    src: "/partners/edubridge.png",
  },
  {
    name: "CGC",
    fullName: "CGC University",
    src: "/partners/cgc.png",
  },
  {
    name: "CT University",
    fullName: "CT University",
    src: "/partners/ct.png",
  },
] as const;

export default function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="border-y border-border/70 bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-6">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <p className="text-[2.5rem] leading-none font-semibold tracking-tight text-foreground sm:text-[2.875rem]">
                3+
              </p>
              <span
                className="h-10 w-px shrink-0 bg-border sm:h-11"
                aria-hidden="true"
              />
              <div className="leading-tight">
                <p className="text-[0.875rem] font-semibold text-foreground sm:text-[0.9375rem]">
                  Years
                </p>
                <p className="mt-0.5 text-[0.75rem] text-muted sm:text-[0.8125rem]">
                  Built with intention
                </p>
              </div>
            </div>

            <span
              className="hidden h-10 w-px shrink-0 bg-border sm:block sm:h-11"
              aria-hidden="true"
            />

            <h2
              id="trusted-by-heading"
              className="font-mono text-[0.875rem] tracking-tight text-foreground sm:text-[0.975rem]"
            >
              Trusted and worked with.
            </h2>
          </div>

          <ul
            className="grid grid-cols-2 gap-x-6 gap-y-5 min-[480px]:grid-cols-4 sm:gap-x-8 lg:gap-x-10"
            aria-label="Partner institutions"
          >
            {logos.map((logo) => (
              <li
                key={logo.fullName}
                className="flex flex-col items-center gap-2.5 text-center"
              >
                <span className="relative block size-16 overflow-hidden rounded-full border border-border bg-white sm:size-[4.5rem]">
                  <Image
                    src={logo.src}
                    alt={logo.fullName}
                    fill
                    sizes="72px"
                    className="object-contain p-1"
                  />
                </span>
                <span className="max-w-[6.5rem] text-[0.75rem] leading-snug font-medium text-foreground sm:text-[0.8125rem]">
                  {logo.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
