import { Provider } from "@supabase/supabase-js"

export const providerBackgroundColors: Record<Provider, string> = {
  google: "#4285F4",
  github: "#333",
  facebook: "#3B5998",
  twitter: "#1DA1F2",
  gitlab: "#FC6D26",
  bitbucket: "#205081",
  apple: "#000000",
  linkedin: "#0A66C2",
  twitch: "#9146FF",
  slack: "#4A154B",
  spotify: "#1DB954",
  discord: "#5865F2",
  azure: "",
  figma: "",
  kakao: "",
  keycloak: "",
  linkedin_oidc: "",
  notion: "",
  workos: "",
  zoom: "",
  fly: "",
}

export const scopes: Partial<Record<Provider, string[]>> = {
  spotify: [
    "user-top-read",
    "playlist-read-collaborative",
    "playlist-read-private",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-read-email",
    "user-read-private",
  ],
}
