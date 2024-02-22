import { Provider } from "@supabase/supabase-js"
import React, { useCallback, useEffect } from "react"
import { supabase } from "../../utils/SupabaseClient"
import * as WebBrowser from "expo-web-browser"
import { Linking, TouchableOpacity } from "react-native"
import * as AuthSession from "expo-auth-session"
import {
  storeProviderRefreshToken,
  storeProviderToken,
} from "../../utils/auth/handleProviderTokens"
import { useRouter } from "expo-router"
import { scopes } from "../../utils/auth/constants/socialProviders"
import { AuthContainerButtonProps } from "../../utils/auth/constants/types"

export const SocialAuth: React.FC<AuthContainerButtonProps> = ({
  provider,
  children,
}) => {
  const router = useRouter()

  const handleRedirect = useCallback(async (event: any) => {
    const url = new URL(event.url)
    const code = url.searchParams.get("code")

    if (code) {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) throw error

      const provider_token = data.session?.provider_token
      const provider_refresh_token = data.session?.provider_refresh_token

      if (provider_token && provider_refresh_token) {
        console.log(
          "Storing provider tokens:",
          provider_token,
          provider_refresh_token
        )
        await storeProviderToken(provider_token)
        await storeProviderRefreshToken(provider_refresh_token)
        router.replace("/(protected)/profile")
      } else {
        console.log(
          "no provider tokens found in session response:",
          data.session
        )
      }
      WebBrowser.dismissBrowser()
    }
  }, [])

  useEffect(() => {
    const subscription = Linking.addEventListener("url", (event) =>
      handleRedirect(event)
    )
    return () => subscription.remove()
  }, [handleRedirect, provider])

  async function handleSocialSignIn(provider: Provider, scopes: string[]) {
    console.log("Initiating login with provider:", provider)

    const redirectTo = AuthSession.makeRedirectUri()

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo,
          scopes: scopes.join(" "),
          skipBrowserRedirect: true,
        },
      })

      if (data && data.url) {
        await WebBrowser.openBrowserAsync(data.url)
      }

      if (error) throw error
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  return (
    <TouchableOpacity
      onPress={() => handleSocialSignIn(provider, scopes[provider] ?? [])}
    >
      {children}
    </TouchableOpacity>
  )
}
