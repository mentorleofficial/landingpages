export type Mentor = {
  id: string;
  name: string;
  role: string;
  stat: string;
  image: string;
  bio: string;
  categories: string[];
  expertise: string[];
  location: string | null;
  badge: string | null;
  languages: string[];
  searchText: string;
};

export type SpotlightMentor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  tags: string[];
};

/** Raw row shape from public.mentor_data */
export type MentorDataRow = {
  user_id: string;
  name: string | null;
  email: string;
  bio: string | null;
  experience_years: number | null;
  status: string | null;
  role: string | null;
  current_role: string | null;
  profile_url: string | null;
  Industry: string | null;
  expertise_area: string[] | null;
  location: string | null;
  badge: string | null;
  languages_spoken: string[] | null;
  past_experience: unknown;
};

export const FALLBACK_AVATAR = "/icon.svg";

const APPROVED_STATUSES = ["approved", "active", "verified", "accepted"];

export function isApprovedMentor(status: string | null | undefined) {
  if (!status) return false;
  return APPROVED_STATUSES.includes(status.toLowerCase());
}

function stringifyPastExperience(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

export function mapMentorRow(row: MentorDataRow): Mentor {
  const expertise = row.expertise_area?.filter(Boolean) ?? [];
  const languages = row.languages_spoken?.filter(Boolean) ?? [];
  const industry = row.Industry?.trim();
  const categories = [
    ...(industry ? [industry] : []),
    ...expertise,
  ].filter(Boolean);

  const years = row.experience_years;
  const stat =
    years && years > 0
      ? `${years}+ years experience`
      : row.badge?.trim() || row.location?.trim() || "Verified mentor";

  const name = row.name?.trim() || row.email.split("@")[0] || "Mentor";
  const role = row.current_role?.trim() || row.role?.trim() || "Mentor";
  const bio = row.bio?.trim() || "Experienced mentor on Mentorle.";
  const location = row.location?.trim() || null;
  const badge = row.badge?.trim() || null;
  const pastExperience = stringifyPastExperience(row.past_experience);

  const searchText = [
    name,
    role,
    row.role,
    row.current_role,
    stat,
    bio,
    location,
    badge,
    industry,
    row.email,
    pastExperience,
    ...categories,
    ...expertise,
    ...languages,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return {
    id: row.user_id,
    name,
    role,
    stat,
    image: row.profile_url?.trim() || FALLBACK_AVATAR,
    bio,
    categories: Array.from(new Set(categories)),
    expertise,
    location,
    badge,
    languages,
    searchText,
  };
}

export function toSpotlightMentor(mentor: Mentor): SpotlightMentor {
  return {
    id: mentor.id,
    name: mentor.name,
    role: mentor.role,
    bio: mentor.bio,
    image: mentor.image,
    tags: mentor.categories.slice(0, 3),
  };
}

export function filterMentors(
  query: string,
  activeTag: string | null,
  source: Mentor[],
): Mentor[] {
  const tokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return source.filter((mentor) => {
    const matchesTag = activeTag
      ? mentor.categories.some(
          (category) => category.toLowerCase() === activeTag.toLowerCase(),
        ) ||
        mentor.expertise.some(
          (item) => item.toLowerCase() === activeTag.toLowerCase(),
        )
      : true;

    if (!matchesTag) return false;
    if (tokens.length === 0) return true;

    // Every token must appear somewhere in the mentor's searchable fields.
    return tokens.every((token) => mentor.searchText.includes(token));
  });
}

export function buildMentorTags(mentors: Mentor[]): string[] {
  const counts = new Map<string, number>();

  for (const mentor of mentors) {
    for (const tag of [...mentor.categories, ...mentor.expertise]) {
      const key = tag.trim();
      if (!key) continue;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  const fromData = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
    .slice(0, 8);

  return fromData;
}

export type MentorSummary = {
  count: number;
  industryCount: number;
  locationCount: number;
  topIndustry: string | null;
  topLocation: string | null;
  topTags: string[];
};

function topKey(counts: Map<string, number>): string | null {
  let best: string | null = null;
  let bestCount = 0;
  for (const [key, count] of counts) {
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return best;
}

/** Aggregate live stats for trust / community sections (no invented numbers). */
export function summarizeMentors(mentors: Mentor[]): MentorSummary {
  const industries = new Map<string, number>();
  const locations = new Map<string, number>();

  for (const mentor of mentors) {
    const industry = mentor.categories[0]?.trim();
    if (industry) {
      industries.set(industry, (industries.get(industry) ?? 0) + 1);
    }
    const location = mentor.location?.trim();
    if (location) {
      locations.set(location, (locations.get(location) ?? 0) + 1);
    }
  }

  return {
    count: mentors.length,
    industryCount: industries.size,
    locationCount: locations.size,
    topIndustry: topKey(industries),
    topLocation: topKey(locations),
    topTags: buildMentorTags(mentors).slice(0, 6),
  };
}

export type MentorTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};

const DEFAULT_BIO = "Experienced mentor on Mentorle.";

/** Prefer mentors with real bios for social-proof cards. */
export function buildMentorTestimonials(
  mentors: Mentor[],
  limit = 6,
): MentorTestimonial[] {
  const withBio = mentors.filter((mentor) => {
    const bio = mentor.bio.trim();
    return bio.length >= 40 && bio !== DEFAULT_BIO;
  });

  const pool = withBio.length >= 3 ? withBio : mentors;

  return pool.slice(0, limit).map((mentor) => {
    const bio = mentor.bio.trim();
    const quote =
      bio.length > 200 ? `${bio.slice(0, 197).trimEnd()}…` : bio || DEFAULT_BIO;

    return {
      id: mentor.id,
      quote,
      name: mentor.name,
      role: [mentor.role, mentor.location].filter(Boolean).join(" · "),
      image: mentor.image,
    };
  });
}
