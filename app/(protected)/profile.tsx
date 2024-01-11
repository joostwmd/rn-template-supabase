import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { supabase } from "../../lib/utils/supabase";
import { useRouter } from "expo-router";

function Profile() {
  const router = useRouter();

  async function logOut() {
    await supabase.auth.signOut();
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile page</Text>

      <Button title="Log out" onPress={logOut} />
    </View>
  );
}

export default Profile;
