import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SignInForm  from '../components/SignInForm';


export default function Login(){
    return(
        <SafeAreaView className="flex-1 bg-white">
             <View className="flex-1 left-0 mx-6">
            <View className="justify-center flex-1 gap-4">
                <Text className="text-blue-500 text-5xl font-bold">Sign in</Text>
                <Text className="text-black text-8xs">Please log in into your account</Text>
            </View>
            <View className="flex-[4]">
                <SignInForm/>
            </View>
            </View>
        </SafeAreaView>
    )
}