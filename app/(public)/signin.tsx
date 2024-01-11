import { Button, Text, View } from "react-native";
import { AuthButton } from "../../lib/components/AuthButton";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/utils/supabase";

const SignIn: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // const getSession = async () => {
    //   try {
    //     const { data, error } = await supabase.auth.getSession();
    //     console.log(data.session);
    //     if (error) {
    //       throw error;
    //     } else if (data.session) {
    //       router.push("/(protected)/profile");
    //     }
    //   } catch (error) {
    //     // Handle error
    //   }
    // };
    // getSession();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AuthButton />
      <Button
        title="profile"
        onPress={() => router.push("/(protected)/profile")}
      />
    </View>
  );
};

export default SignIn;
