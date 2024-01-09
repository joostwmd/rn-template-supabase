import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { supabase } from "../../lib/utils/supabase";
import { useRouter } from "expo-router";

function Profile() {
  async function logOut() {
    await supabase.auth.signOut();
  }
  const router = useRouter();
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        console.log(data.session);
        if (error) {
          throw error;
        } else if (data.session) {
          router.push("/(protected)/profile");
        }
      } catch (error) {
        // Handle error
      }
    };

    getSession();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile page</Text>

      <Button title="Log out" onPress={logOut} />
    </View>
  );
}

export default Profile;
