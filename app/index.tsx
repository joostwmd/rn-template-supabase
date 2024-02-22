import { View, Text, Button } from "react-native"
import { useRouter } from "expo-router"

const Page: React.FC = () => {
  const router = useRouter()

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to this template</Text>

      <Button
        title="go to sign in"
        onPress={() => router.push("/(public)/signin")}
      />
    </View>
  )
}

export default Page
