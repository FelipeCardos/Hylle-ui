import { View, TextInput, Text, TouchableOpacity } from "react-native"
import { useState } from "react"
import Checkbox from 'expo-checkbox';


export default function CreateAccountForm(){
    const [focusedInput, setFocusedInput] = useState<string|null>(null);
    const [isChecked, setIsChecked] = useState(false);

    return(
        <View className="flex-[2] gap-2">
            <Text>Name</Text>
            <TextInput
                placeholder="Eg..  Felipe Cardoso Habib"
                placeholderTextColor="#2C2C2C"
                className={`border ${
                    focusedInput === "name" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"
                  } rounded-md p-3 text-lg text-black`}
                onFocus={()=> setFocusedInput("name") }
                onBlur={()=> setFocusedInput(null)}
            />
            <Text>Username</Text>
            <TextInput
                placeholder="Eg.. Lobster"
                placeholderTextColor="#2C2C2C"
                className={`border ${
                    focusedInput === "username" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"
                  } rounded-md p-3 text-lg text-black`}
                  onFocus={()=> setFocusedInput("username") }
                  onBlur={()=> setFocusedInput(null)}            
            />
            <Text>Email</Text>
            <TextInput
                placeholder="Eg.. example@domain.com"
                keyboardType="email-address"
                placeholderTextColor="#2C2C2C"
                className={`border ${
                    focusedInput === "email" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"
                  } rounded-md p-3 text-lg text-black`}
                  onFocus={()=> setFocusedInput("email") }
                  onBlur={()=> setFocusedInput(null)}            
            />
            <Text>Password</Text>
            <TextInput
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#2C2C2C"
                className={`border ${
                    focusedInput === "password" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"
                  } rounded-md p-3 text-lg text-black`}
                  onFocus={()=> setFocusedInput("password") }
                  onBlur={()=> setFocusedInput(null)}            
            />
            <Text>Password Confirmation</Text>
            <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#2C2C2C"
                className={`border ${
                    focusedInput === "passwordConfirmation" ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-100"
                  } rounded-md p-3 text-lg text-black`}
                  onFocus={()=> setFocusedInput("passwordConfirmation") }
                  onBlur={()=> setFocusedInput(null)}            
            />
          <TouchableOpacity className="flex-row items-center">
          <Checkbox
            value={isChecked}
            onValueChange={(newValue) => setIsChecked(newValue)}
            style={{ marginRight: 10 }}
          />
            <Text className="text-blue-500 text-sm">
              Agree with the terms of use and privacy policy
            </Text>
          </TouchableOpacity>
        </View>
    )
}