import { supabaseClient } from "../client/supabase_Client";

export const Submit = async (payload) => {
  const { error } = await supabaseClient.from("contact_info").insert([payload]);

  if (error) {
    throw error;
  }

  return { success: true };
};
