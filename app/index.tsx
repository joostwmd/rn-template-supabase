import { View, Text } from "react-native";
import { Auth } from "../lib/components/Auth";
import { useEffect } from "react";
import { supabase } from "../lib/utils/supabase";

const Page: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Auth />
    </View>
  );
};

export default Page;
