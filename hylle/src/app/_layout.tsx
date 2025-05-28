import '../styles/global.css'

import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1E40AF" }, // Cor do cabeçalho
        headerTintColor: "#fff", // Cor do texto no cabeçalho
        headerTitleAlign: "center", // Centraliza o título
      }}
    >
      <Stack.Screen name="tabs" options={{ headerShown:false, headerBackVisible: false }}/>
      <Stack.Screen name="index" options={{ title: "Hylle" }} />
      <Stack.Screen name="Login" options={{ title: "Sign In" }} />
      <Stack.Screen name="CreateAccount" options={{ title: "Create Account" }} />
    </Stack>
  );
}