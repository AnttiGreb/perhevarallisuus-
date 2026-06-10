// ============================================================
// SUPABASE AUTH & DATA SYNC
// ============================================================
// Aseta omat Supabase-tunnuksesi alla oleviin muuttujiin.
// Löydät ne Supabase-projektistasi: Settings → API
// ============================================================

const SUPABASE_URL = "https://lixthiibkmlvaceyhxsh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpeHRoaWlia21sdmFjZXloeHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMTQ2ODAsImV4cCI6MjA5NjY5MDY4MH0.rPhhg3npWMM9Nodt3UUFQuly6gpcVxpEtFOxgspfKPg";

// ============================================================
// Supabase client (ladataan CDN:stä index.html:ssä)
// ============================================================
let _supabase = null;

function getSupabase() {
  if (!_supabase) {
    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _supabase;
}

// ============================================================
// Auth state
// ============================================================
let currentUser = null;

async function initSupabase() {
  const sb = getSupabase();

  // Kuuntele auth-muutoksia
  sb.auth.onAuthStateChange(async (event, session) => {
    currentUser = session?.user ?? null;
    if (event === "SIGNED_IN") {
      await loadCloudState();
      window._onSupabaseSignIn?.();
    } else if (event === "SIGNED_OUT") {
      window._onSupabaseSignOut?.();
    }
  });

  // Tarkista onko jo kirjautunut (esim. sivun lataus)
  const { data: { session } } = await sb.auth.getSession();
  currentUser = session?.user ?? null;
  return currentUser;
}

// ============================================================
// Auth: sähköposti + OTP (Magic Link / OTP)
// ============================================================
async function supabaseSendOtp(email) {
  const sb = getSupabase();
  const { error } = await sb.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: true },
  });
  if (error) throw error;
}

async function supabaseVerifyOtp(email, token) {
  const sb = getSupabase();
  const { data, error } = await sb.auth.verifyOtp({
    email,
    token,
    type: "email",
  });
  if (error) throw error;
  currentUser = data.user;
  return data.user;
}

async function supabaseSignOut() {
  const sb = getSupabase();
  await sb.auth.signOut();
  currentUser = null;
}

function getCurrentUser() {
  return currentUser;
}

function isAuthenticated() {
  return Boolean(currentUser);
}

// ============================================================
// Data: tallenna käyttäjän tila pilveen
// ============================================================
async function saveCloudState(stateObj) {
  if (!currentUser) return;
  const sb = getSupabase();
  const payload = {
    user_id: currentUser.id,
    data: stateObj,
    updated_at: new Date().toISOString(),
  };
  const { error } = await sb
    .from("user_states")
    .upsert(payload, { onConflict: "user_id" });
  if (error) console.error("Supabase save error:", error.message);
}

// ============================================================
// Data: lataa käyttäjän tila pilvestä
// ============================================================
async function loadCloudState() {
  if (!currentUser) return null;
  const sb = getSupabase();
  const { data, error } = await sb
    .from("user_states")
    .select("data")
    .eq("user_id", currentUser.id)
    .single();
  if (error && error.code !== "PGRST116") {
    console.error("Supabase load error:", error.message);
    return null;
  }
  return data?.data ?? null;
}

// ============================================================
// Familiy sharing: kutsu perhejäsen (Supabase family_access)
// ============================================================
async function inviteFamilyMember(memberEmail, role = "viewer") {
  if (!currentUser) return;
  const sb = getSupabase();
  const { error } = await sb.from("family_access").upsert(
    {
      owner_id: currentUser.id,
      member_email: memberEmail.toLowerCase().trim(),
      role, // "admin" | "viewer"
    },
    { onConflict: "owner_id,member_email" }
  );
  if (error) throw error;
}

async function removeFamilyAccess(memberEmail) {
  if (!currentUser) return;
  const sb = getSupabase();
  await sb
    .from("family_access")
    .delete()
    .eq("owner_id", currentUser.id)
    .eq("member_email", memberEmail.toLowerCase().trim());
}

async function getFamilyMembers() {
  if (!currentUser) return [];
  const sb = getSupabase();
  const { data, error } = await sb
    .from("family_access")
    .select("member_email, role")
    .eq("owner_id", currentUser.id);
  if (error) return [];
  return data || [];
}

// Tarkista, onko kirjautunut käyttäjä jonkun perheen jäsen
async function getSharedOwners() {
  if (!currentUser) return [];
  const sb = getSupabase();
  const email = currentUser.email;
  const { data, error } = await sb
    .from("family_access")
    .select("owner_id, role")
    .eq("member_email", email);
  if (error) return [];
  return data || [];
}

// Lataa jaettu tila (perhejäsenenä)
async function loadSharedState(ownerId) {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("user_states")
    .select("data")
    .eq("user_id", ownerId)
    .single();
  if (error) return null;
  return data?.data ?? null;
}

// ============================================================
// Vientiä window-scopeen (app.js käyttää näitä)
// ============================================================
window.SupabaseAuth = {
  init: initSupabase,
  sendOtp: supabaseSendOtp,
  verifyOtp: supabaseVerifyOtp,
  signOut: supabaseSignOut,
  getUser: getCurrentUser,
  isAuthenticated,
  saveState: saveCloudState,
  loadState: loadCloudState,
  family: {
    invite: inviteFamilyMember,
    remove: removeFamilyAccess,
    getMembers: getFamilyMembers,
    getSharedOwners,
    loadSharedState,
  },
};
