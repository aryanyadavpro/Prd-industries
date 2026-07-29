/**
 * Browser Supabase client — uses anon key, safe for client components.
 * Implementation deferred until @supabase/supabase-js is installed.
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// TODO: export createBrowserClient() once @supabase/supabase-js is added.
