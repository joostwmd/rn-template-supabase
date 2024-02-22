import { Provider } from "@supabase/supabase-js"

export type ProivderProp = {
  provider: Provider
}

export type AuthContainerButtonProps = {
  provider: Provider
  children: React.ReactNode
}

export enum Native {
  Apple = "apple",
  Google = "google",
}
