import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { authenticateUser } from "../app/services/OAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";


export default function SignInForm(){
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    

    const handleSignIn = async () =>{
        setIsLoading(true);
        
        try{
            const{ token, user } = await authenticateUser(username, password);
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('userInfo', JSON.stringify(user));

            router.replace('/Home');
        }catch(error){
            console.log("Error to authenticate the user", error)
            Alert.alert('Error', 'Error to authenticate the user');
            setIsLoading(false);
        }
    }


    return (
        <View className="flex-[2] gap-2">
            <Text>Username</Text>
            <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Lobster"
            className={`border ${focusedInput === "username" ? "border0-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
            onFocus={() => setFocusedInput("username")}
            onBlur={() => setFocusedInput(null)}
            />
            <Text>Password</Text>
            <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="myemail@gmail.com"
            className={`border ${focusedInput === "password" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            />
            <View className="">
                <Text className="text-orange-500 mb-4 text-right">Forgot password?</Text>
                <TouchableOpacity 
                    className="h-12 bg-blue-500 rounded-md items-center justify-center" 
                    onPress={handleSignIn}
                    disabled={isLoading}
                >
                    <Text className="text-white font-bold">
                    {isLoading ? 'Signing in...' : 'Sign in'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center my-4">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-2 text-gray-500 text-sm">or</Text>
                <View className="flex-1 h-px bg-gray-300" />
            </View>
            <View>
            <TouchableOpacity 
                    className="h-12 bg-blue-500 rounded-md items-center justify-center my-4 flex-row" 
                    onPress={handleSignIn}
                    disabled={isLoading}
                >
                    <Icon name="google" size={20} color="white" style={{ marginRight: 10 }}/>
                    <Text className="text-white font-bold">
                    {isLoading ? 'Signing in...' : 'Sign in with Google'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="h-12 bg-blue-500 rounded-md items-center justify-center flex-row" 
                    onPress={handleSignIn}
                    disabled={isLoading}
                >
                    <Icon name="amazon" size={20} color="white" style={{ marginRight: 10 }}/>
                    <Text className="text-white font-bold">
                    {isLoading ? 'Signing in...' : 'Sign in with Kindle'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}