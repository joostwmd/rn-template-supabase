import { createClient } from "@supabase/supabase-js"
import { SecureStore } from "./secureStore"

const url: string | undefined = process.env.EXPO_PUBLIC_SUPABASE_URL
const key: string | undefined = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(url!, key!, {
  auth: {
    storage: new SecureStore(),
    autoRefreshToken: true,
    detectSessionInUrl: false,
    persistSession: false,
    flowType: "pkce",
  },
})
