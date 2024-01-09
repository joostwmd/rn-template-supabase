import { View } from "react-native";
import { Auth } from "../../lib/components/Auth";
import { useEffect } from "react";

const SignIn: React.FC = () => {
  useEffect(() => {
    console.log("sign in");
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Auth />
    </View>
  );
};

export default SignIn;
