import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import {
  isApprovedMentor,
  mapMergedMentor,
  mapMentorRow,
  type Mentor,
  type MentorDataRow,
  type MentorProfileRow,
  type UserMentorRow,
} from "@/lib/mentors";

const MENTOR_SELECT =
  "user_id, name, email, bio, experience_years, status, role, current_role, profile_url, Industry, expertise_area, location, badge, languages_spoken, past_experience";

const PROFILE_SELECT =
  "user_id, bio, expertise, years_experience, is_active, headline, current_organization, current_role, professional_status";

/** Featured mentors — shown first, in this order. */
const TOP_MENTOR_MATCHERS: Array<(name: string) => boolean> = [
  (n) => /sourabh\s+goyal/i.test(n),
  (n) => /^sameer\b/i.test(n),
  (n) => /^shweta\b/i.test(n),
  (n) => /^(shashir|shishir)\b/i.test(n),
  (n) => /saurabh\s+singh/i.test(n),
  (n) => /anurag\s+mishra/i.test(n),
];

function hasHttpImage(url: string | null | undefined) {
  const value = url?.trim();
  return Boolean(value && /^https?:\/\//i.test(value));
}

function topMentorRank(name: string | null | undefined) {
  const normalized = name?.trim() ?? "";
  if (!normalized) return Number.POSITIVE_INFINITY;
  const index = TOP_MENTOR_MATCHERS.findIndex((match) => match(normalized));
  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

function sortMentors(mentors: Mentor[]) {
  return [...mentors].sort((a, b) => {
    const rankDiff = topMentorRank(a.name) - topMentorRank(b.name);
    if (rankDiff !== 0) return rankDiff;
    return Number(hasHttpImage(b.image)) - Number(hasHttpImage(a.image));
  });
}

function shouldShowMentor(
  profile: MentorProfileRow | undefined,
  data: MentorDataRow | undefined,
) {
  if (profile) return profile.is_active;
  if (data) return isApprovedMentor(data.status);
  // User marked as mentor but missing profile/data rows — still show.
  return true;
}

export async function fetchMentors(): Promise<Mentor[]> {
  const supabase = getSupabaseAdmin() ?? getSupabase();
  if (!supabase) {
    console.warn(
      "[mentors] Missing Supabase env. Set NEXT_PUBLIC_SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY (recommended) or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
    return [];
  }

  const usingAdmin = Boolean(getSupabaseAdmin());

  const [usersResult, mentorResult, profilesResult] = await Promise.all([
    supabase
      .from("users")
      .select("id, full_name, avatar_url, is_disabled, role")
      .eq("role", "mentor")
      .eq("is_disabled", false),
    supabase
      .from("mentor_data")
      .select(MENTOR_SELECT)
      .order("created_at", { ascending: false }),
    supabase.from("mentor_profiles").select(PROFILE_SELECT),
  ]);

  if (usersResult.error) {
    console.error(
      "[mentors] Failed to fetch users mentors:",
      usersResult.error.message,
    );
  }
  if (mentorResult.error) {
    console.error(
      "[mentors] Failed to fetch mentor_data:",
      mentorResult.error.message,
    );
    if (!usingAdmin) {
      console.error(
        "[mentors] Tip: add SUPABASE_SERVICE_ROLE_KEY to .env.local (server-only).",
      );
    }
  }
  if (profilesResult.error) {
    console.error(
      "[mentors] Failed to fetch mentor_profiles:",
      profilesResult.error.message,
    );
  }

  const users = (usersResult.data ?? []) as UserMentorRow[];
  const dataRows = (mentorResult.data ?? []) as MentorDataRow[];
  const profiles = (profilesResult.data ?? []) as MentorProfileRow[];

  const dataByUserId = new Map(dataRows.map((row) => [row.user_id, row]));
  const profileByUserId = new Map(
    profiles.map((profile) => [profile.user_id, profile]),
  );
  const usersById = new Map(users.map((user) => [user.id, user]));

  const fromUsers = users
    .filter((user) => Boolean(user.full_name?.trim()))
    .filter((user) =>
      shouldShowMentor(
        profileByUserId.get(user.id),
        dataByUserId.get(user.id),
      ),
    )
    .map((user) =>
      mapMergedMentor({
        user,
        profile: profileByUserId.get(user.id) ?? null,
        data: dataByUserId.get(user.id) ?? null,
      }),
    );

  const coveredIds = new Set(fromUsers.map((mentor) => mentor.id));

  // Approved mentor_data rows without a matching users(role=mentor) record.
  const fromDataOnly = dataRows
    .filter((row) => !coveredIds.has(row.user_id))
    .filter((row) => isApprovedMentor(row.status))
    .filter((row) => Boolean(row.name?.trim() || row.email))
    .filter((row) => !usersById.get(row.user_id)?.is_disabled)
    .map((row) => {
      const profile = profileByUserId.get(row.user_id);
      if (profile && !profile.is_active) return null;
      // Prefer avatar from users if somehow present under another role.
      const user = usersById.get(row.user_id);
      if (user) {
        return mapMergedMentor({ user, profile, data: row });
      }
      return mapMentorRow({
        ...row,
        // Keep profile_url as-is when no avatar available.
        profile_url: row.profile_url,
      });
    })
    .filter((mentor): mentor is Mentor => mentor != null);

  return sortMentors([...fromUsers, ...fromDataOnly]);
}

export async function fetchSpotlightMentors(limit = 6): Promise<Mentor[]> {
  const mentors = await fetchMentors();
  return mentors.slice(0, limit);
}
