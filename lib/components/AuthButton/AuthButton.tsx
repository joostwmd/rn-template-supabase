import React from "react"
import { Provider } from "@supabase/supabase-js"
import { GoogleAuthButton } from "./providers/GoogleAuthButton"
import { AppleAuthButton } from "./providers/AppleAuthButton"
import { SpotifyAuthButton } from "./providers/SpotifyAuthButton"

interface AuthButtonProps {
  provider: Provider
}

export const AuthButton: React.FC<AuthButtonProps> = ({ provider }) => {
  switch (provider) {
    case "google":
      return <GoogleAuthButton />
    case "apple":
      return <AppleAuthButton />
    case "spotify":
      return <SpotifyAuthButton />
    default:
      return null
  }
}
