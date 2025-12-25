import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.REACT_APP_SUPABASE_URL;
const supabase_anon = process.env.REACT_APP_SUPABASE_ANON_KEY;

// if (!supabase_url || !supabase_anon) {
//   throw new Error("Missing Supabase environment variables");
// }

export const supabaseClient = createClient(supabase_url, supabase_anon);
