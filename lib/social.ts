export const SOCIAL_LINKS = {
  linkedin: {
    href: "https://www.linkedin.com/company/mentorlee",
    label: "LinkedIn",
  },
  instagram: {
    href: "https://www.instagram.com/mentorle_official/",
    label: "Instagram",
  },
  discord: {
    href: "https://discord.com/invite/Cm2zFMGEYq",
    label: "Discord",
  },
  whatsapp: {
    href: "https://chat.whatsapp.com/DaP0RTmYUkKGLZvaZuDnWH",
    label: "WhatsApp",
  },
} as const;

export const SOCIAL_SAME_AS = [
  SOCIAL_LINKS.linkedin.href,
  SOCIAL_LINKS.instagram.href,
  SOCIAL_LINKS.discord.href,
  SOCIAL_LINKS.whatsapp.href,
] as const;
