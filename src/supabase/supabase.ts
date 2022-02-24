import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdyyceitwjnhrmxogftf.supabase.co";

//const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkeXljZWl0d2puaHJteG9nZnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU2MzEzMzAsImV4cCI6MTk2MTIwNzMzMH0.lvunm5kdgimqd4_Q1ZSwCTUYRkz06l13nT10_Joj4fc";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
