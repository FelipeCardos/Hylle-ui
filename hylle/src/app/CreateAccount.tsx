import { SafeAreaView, View, Text } from "react-native";

import CreateAccountForm  from '../components/CreateAccountForm';

export default function Register(){
    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 left-0 mx-6">
                <View className="justify-center flex-1 gap-4">
                    <Text className="text-blue-500 text-5xl font-bold">Sign up</Text>
                    <Text className="text-black text-8xs">Please create a new account</Text>
                </View>
                <View className="flex-[4]">
                    <CreateAccountForm/>
                </View>
                
            </View>

            
        </SafeAreaView>
    )
}