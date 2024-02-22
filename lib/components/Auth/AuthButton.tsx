import { Provider } from "@supabase/supabase-js"
import { Button, StyleSheet, View, Text } from "react-native"
import { SocialAuth } from "./AuthSocial"
import { NativeAuth } from "./AuthNative"
import { providerBackgroundColors } from "../../utils/auth/constants/socialProviders"
import { Native, ProivderProp } from "../../utils/auth/constants/types"

const PresentationalContainer: React.FC<ProivderProp> = ({ provider }) => {
  return (
    <View
      style={[
        styles.authButtonPresentational,
        { backgroundColor: providerBackgroundColors[provider] },
      ]}
    >
      <Text>continue with {provider}</Text>
    </View>
  )
}

export const AuthButton: React.FC<ProivderProp> = ({ provider }) => {
  return provider === Native.Apple || provider === Native.Google ? (
    <NativeAuth provider={provider}>
      <PresentationalContainer provider={provider} />
    </NativeAuth>
  ) : (
    <SocialAuth provider={provider}>
      <PresentationalContainer provider={provider} />
    </SocialAuth>
  )
}

const styles = StyleSheet.create({
  authButtonPresentational: {
    width: 200,
    height: 150,
  },
})
