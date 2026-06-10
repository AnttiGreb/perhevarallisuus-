-- ============================================================
-- SUPABASE: Tietokannan asennus
-- Suorita tämä Supabase-projektin SQL Editorissa
-- ============================================================

-- 1. Käyttäjien datasäilö (yksi rivi per käyttäjä)
create table if not exists public.user_states (
  user_id   uuid primary key references auth.users(id) on delete cascade,
  data      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2. Perhejäsenten kutsut (jakaminen)
create table if not exists public.family_access (
  id           uuid primary key default gen_random_uuid(),
  owner_id     uuid not null references auth.users(id) on delete cascade,
  member_email text not null,
  role         text not null default 'viewer' check (role in ('admin', 'viewer')),
  created_at   timestamptz not null default now(),
  unique (owner_id, member_email)
);

-- ============================================================
-- Row Level Security (RLS) — jokainen näkee vain omat tiedot
-- ============================================================

alter table public.user_states enable row level security;
alter table public.family_access enable row level security;

-- user_states: käyttäjä lukee ja kirjoittaa vain omansa
create policy "Own data only"
  on public.user_states
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- user_states: perhejäsen voi lukea omistajan datan jos hänellä on pääsy
create policy "Family read access"
  on public.user_states
  for select
  using (
    exists (
      select 1 from public.family_access fa
      where fa.owner_id = user_states.user_id
        and fa.member_email = (select email from auth.users where id = auth.uid())
    )
  );

-- user_states: admin-roolinen perhejäsen voi myös kirjoittaa
create policy "Family admin write"
  on public.user_states
  for update
  using (
    exists (
      select 1 from public.family_access fa
      where fa.owner_id = user_states.user_id
        and fa.member_email = (select email from auth.users where id = auth.uid())
        and fa.role = 'admin'
    )
  );

-- family_access: omistaja hallinnoi omia kutsurivejä
create policy "Owner manages family"
  on public.family_access
  for all
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

-- family_access: kutsuttu näkee omat rivinsä
create policy "Member sees own invites"
  on public.family_access
  for select
  using (
    member_email = (select email from auth.users where id = auth.uid())
  );

-- ============================================================
-- Indeksit suorituskykyä varten
-- ============================================================

create index if not exists family_access_member_email_idx
  on public.family_access (member_email);

create index if not exists family_access_owner_id_idx
  on public.family_access (owner_id);
