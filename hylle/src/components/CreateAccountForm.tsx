import { View, TextInput, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { createUser } from "../app/services/CreateUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function CreateAccountForm() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleCreateAccount = async () => {
    if (!email || !password || !name || !username || !passwordConfirmation) {
      Alert.alert('Error', 'Please, fill all the fields');
      return;
    }
    if (password !== passwordConfirmation) {
      Alert.alert('Error', 'Password confirmation and password are different');
      return;
    }
    if(!isChecked){
      Alert.alert('Error', 'You need to accept the terms of usage');
      return;
    }

    setIsLoading(true);
    try {
      const { token, user } = await createUser(email, password, name, username);
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(user)); 

      setTimeout(() => {
        setIsLoading(false);
        router.replace('/Home');
      }, 1000);

    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      Alert.alert('Error', 'Failed to create account. Please try again!');
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-4 text-blue-500 font-bold">Creating your account...</Text>
      </View>
    );
  }

  return (
    <View className="flex-[2] gap-2">
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Eg.. Felipe Cardoso Habib"
        placeholderTextColor="#2C2C2C"
        className={`border ${focusedInput === "name" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
        onFocus={() => setFocusedInput("name")}
        onBlur={() => setFocusedInput(null)}
      />
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Eg.. Lobster"
        placeholderTextColor="#2C2C2C"
        className={`border ${focusedInput === "username" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
        onFocus={() => setFocusedInput("username")}
        onBlur={() => setFocusedInput(null)}
      />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Eg.. example@domain.com"
        keyboardType="email-address"
        placeholderTextColor="#2C2C2C"
        className={`border ${focusedInput === "email" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#2C2C2C"
        className={`border ${focusedInput === "password" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
        onFocus={() => setFocusedInput("password")}
        onBlur={() => setFocusedInput(null)}
      />
      <Text>Password Confirmation</Text>
      <TextInput
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        placeholder="Confirm Password"
        secureTextEntry
        placeholderTextColor="#2C2C2C"
        className={`border ${focusedInput === "passwordConfirmation" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"} rounded-md p-3 text-lg text-black`}
        onFocus={() => setFocusedInput("passwordConfirmation")}
        onBlur={() => setFocusedInput(null)}
      />
      <TouchableOpacity className="flex-row items-center">
        <Checkbox
          value={isChecked}
          onValueChange={setIsChecked}
          style={{ marginRight: 10 }}
        />
        <Text className="text-blue-500 text-sm">
          Agree with the terms of use and privacy policy
        </Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity 
          className="h-12 bg-blue-500 rounded-md items-center justify-center mb-4" 
          onPress={handleCreateAccount}
          disabled={isLoading}
        >
          <Text className="text-white font-bold">
            {isLoading ? 'Creating...' : 'Create Account'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
