import { supabase } from "../SupabaseClient"
import {
  getProviderToken,
  removeProviderRefreshToken,
  removeProviderToken,
} from "./handleProviderTokens"

export async function handleSignOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new Error(error.message)
  }

  await removeProviderToken()
  await removeProviderRefreshToken()
}
