import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(
  "https://ofiqdbpkhdqqlrbrbrkk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODA5OTc3MiwiZXhwIjoxOTUzNjc1NzcyfQ.p0GeyYmDG_80DEm77-xfoJj8N-8eRWW07oEcp4GYyt8"
);