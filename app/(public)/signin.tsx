import { View } from "react-native"
import { AuthButton } from "../../lib/components/Auth/AuthButton"

const SignIn: React.FC = () => {
  return (
    <View>
      <AuthButton provider="spotify" />
      <AuthButton provider="apple" />
    </View>
  )
}

export default SignIn
