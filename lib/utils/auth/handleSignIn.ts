import * as AppleAuthentication from "expo-apple-authentication"
import { supabase } from "./../SupabaseClient"
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin"
import { Provider } from "@supabase/supabase-js"
import * as AuthSession from "expo-auth-session"
import * as WebBrowser from "expo-web-browser"
import {
  storeProviderRefreshToken,
  storeProviderToken,
} from "./handleProviderTokens"

export async function handleAppleSignIn() {
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    })

    if (credential.identityToken) {
      const {
        error,
        data: { user, session },
      } = await supabase.auth.signInWithIdToken({
        provider: "apple",
        token: credential.identityToken,
      })

      if (!error) {
        // User is signed in.
      }
    } else {
      throw new Error("No identityToken.")
    }
  } catch (e: any) {
    if (e.code === "ERR_REQUEST_CANCELED") {
      // handle that the user canceled the sign-in flow
    } else {
      // handle other errors
    }
  }
}

export async function handleGoogleSignIn() {
  //broken maybe becuase of lacking sha keys
  try {
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    if (userInfo.idToken) {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: userInfo.idToken,
      })
      console.log(error, data)
    } else {
      throw new Error("no ID token present!")
    }
  } catch (error: any) {
    console.log(error)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}

export async function handleSocialSignIn(provider: Provider, scopes: string[]) {
  const redirectTo = AuthSession.makeRedirectUri()
  console.log("redirect to", redirectTo)
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo,
      scopes: scopes.join(" "),
    },
  })

  if (error) throw error

  if (data) {
    const res = await WebBrowser.openAuthSessionAsync(data?.url, redirectTo, {
      showInRecents: true,
    })
    if (res.type === "success") {
      const { url } = res
      const urlObj = new URL(url)
      const params = new URLSearchParams(urlObj.search)
      const code = params.get("code")

      if (code) {
        const { data } = await supabase.auth.exchangeCodeForSession(code)
        const provider_token = data.session?.provider_token
        const provider_refresh_token = data.session?.provider_refresh_token
        console.log("provider tokens", provider_token, provider_refresh_token)
        if (provider_token && provider_refresh_token) {
          await storeProviderToken(provider_token)
          await storeProviderRefreshToken(provider_refresh_token)
        } else {
          console.log(
            "no provider tokens found in session response:",
            data.session
          )
        }
      }
    }
  }
}
