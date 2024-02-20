import * as AppleAuthentication from "expo-apple-authentication"
import { supabase } from "../../../utils/supabase"

export const AppleAuthButton = () => {
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 64 }}
      onPress={async () => {
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
      }}
    />
  )
}