import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"
import { DeviceStorage } from "./DeviceStorage"

const url: string | undefined = process.env.EXPO_PUBLIC_SUPABASE_URL
const key: string | undefined = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(url!, key!, {
  auth: {
    storage: DeviceStorage,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    persistSession: false,
    flowType: "pkce",
  },
})
