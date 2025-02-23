import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://oysranhwyltqlmzpxenj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95c3Jhbmh3eWx0cWxtenB4ZW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwOTQ0NTQsImV4cCI6MjA1NTY3MDQ1NH0.aHcbja5ATQqHaNp2Fsmg0mBByRoMV5yX5heTWrP_DNg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
