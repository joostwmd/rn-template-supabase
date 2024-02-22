import React, { useEffect } from "react"
import { Button, Text, View } from "react-native"
import { supabase } from "../../lib/utils/SupabaseClient"
import { useRouter } from "expo-router"
import { handleSignOut } from "../../lib/utils/auth/handleSignOut"
import {
  removeProviderRefreshToken,
  removeProviderToken,
} from "../../lib/utils/auth/handleProviderTokens"

function Profile() {
  const router = useRouter()

  async function logOut() {
    await handleSignOut()
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile page</Text>

      <Button title="Log out" onPress={logOut} />
    </View>
  )
}

export default Profile
