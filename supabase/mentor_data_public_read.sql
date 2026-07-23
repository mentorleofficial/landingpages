-- Option A (recommended for marketing site): keep table private, use SERVICE ROLE in Next.js server.
-- Add SUPABASE_SERVICE_ROLE_KEY to .env.local (Project Settings → API → service_role).
-- Do NOT expose service_role in NEXT_PUBLIC_* vars.

-- Option B: public read via a safe view (no email/phone), then anon can SELECT the view only.

create or replace view public.mentor_public as
select
  user_id,
  name,
  bio,
  experience_years,
  status,
  role,
  current_role,
  profile_url,
  "Industry",
  expertise_area,
  location,
  badge,
  created_at,
  updated_at
from public.mentor_data
where lower(coalesce(status, '')) in ('approved', 'active', 'verified', 'accepted')
   or status is null;

grant select on public.mentor_public to anon, authenticated;

-- If you still want direct table access for anon (not recommended — exposes email/phone):
-- grant select on public.mentor_data to anon, authenticated;
-- alter table public.mentor_data enable row level security;
-- create policy "Public can read approved mentors"
-- on public.mentor_data for select to anon, authenticated
-- using (lower(coalesce(status, '')) in ('approved', 'active', 'verified', 'accepted'));
