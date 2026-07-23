import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import {
  isApprovedMentor,
  mapMentorRow,
  type Mentor,
  type MentorDataRow,
} from "@/lib/mentors";

const MENTOR_SELECT =
  "user_id, name, email, bio, experience_years, status, role, current_role, profile_url, Industry, expertise_area, location, badge, languages_spoken, past_experience";

export async function fetchMentors(): Promise<Mentor[]> {
  const supabase = getSupabaseAdmin() ?? getSupabase();
  if (!supabase) {
    console.warn(
      "[mentors] Missing Supabase env. Set NEXT_PUBLIC_SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY (recommended) or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
    return [];
  }

  const usingAdmin = Boolean(getSupabaseAdmin());

  const { data, error } = await supabase
    .from("mentor_data")
    .select(MENTOR_SELECT)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[mentors] Failed to fetch mentor_data:", error.message);
    if (!usingAdmin) {
      console.error(
        "[mentors] Tip: add SUPABASE_SERVICE_ROLE_KEY to .env.local (server-only), or run supabase/mentor_data_public_read.sql in the Supabase SQL Editor.",
      );
    }
    return [];
  }

  const rows = (data ?? []) as MentorDataRow[];
  const approved = rows.filter((row) => isApprovedMentor(row.status));
  // Prefer approved mentors; if none are tagged yet, show all non-empty profiles.
  const source =
    approved.length > 0
      ? approved
      : rows.filter((row) => row.status?.toLowerCase() !== "rejected");

  return source
    .filter((row) => Boolean(row.name?.trim() || row.email))
    .map(mapMentorRow);
}

export async function fetchSpotlightMentors(limit = 6): Promise<Mentor[]> {
  const mentors = await fetchMentors();
  return mentors.slice(0, limit);
}
