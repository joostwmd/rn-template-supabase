import { TouchableOpacity } from "react-native"
import {
  handleAppleSignIn,
  handleGoogleSignIn,
} from "../../utils/auth/handleNativeSignIn"
import {
  AuthContainerButtonProps,
  Native,
} from "../../utils/auth/constants/types"

export const NativeAuth: React.FC<AuthContainerButtonProps> = ({
  provider,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={
        provider === Native.Google ? handleGoogleSignIn : handleAppleSignIn
      }
    >
      {children}
    </TouchableOpacity>
  )
}
