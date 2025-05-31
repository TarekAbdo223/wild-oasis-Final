import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kwircgvrthdarldyimbm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aXJjZ3ZydGhkYXJsZHlpbWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MjA0ODIsImV4cCI6MjA2NDE5NjQ4Mn0.nv7M22r0Jyr-RzFL9O2nmfVuxYt_sRhOY0pwA_xIfj0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
