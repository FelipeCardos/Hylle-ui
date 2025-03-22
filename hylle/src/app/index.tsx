import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";

export default function App() {
const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <View className="flex-1 left-0 mx-6">
        <View className="justify-center flex-1 gap-4">
          <Text className="text-white text-5xl font-bold">Welcome 🚀</Text>
          <Text className="text-white text-8xs font-bold">Let's get started!</Text>
        </View>
        <View className="flex-1 gap-2">
          <Text className="text-white text-8xs font-bold">Existing User / Get started</Text>
          <TouchableOpacity 
            className="h-12 bg-white rounded-md items-center justify-center"
            onPress={()=> router.push("/Login")}  
          >
            <Text className="text-blue-500 font-bold">Sign In</Text>
          </TouchableOpacity>
          <View className="flex-row">
            <Text className="text-white text-8xs font-bold">New user? </Text>
            <Link href="/CreateAccount" className="text-white text-8xs font-bold underline">
              Create new account
            </Link>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}
