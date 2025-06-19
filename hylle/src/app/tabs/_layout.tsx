import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Pressable } from "react-native";
import eventBus from "../../hooks/EventBus"; 
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function TabsLayout() {
  async function incrementCounter() {
    try {
      const value = await AsyncStorage.getItem("pageCount");
      const current = value ? parseInt(value, 10) : 0;
      const newValue = current + 5;
      await AsyncStorage.setItem("pageCount", newValue.toString());
  
      eventBus.emit("pageCountUpdated");
    } catch (e) {
      console.error("Erro ao atualizar contador:", e);
    }
  }
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#1E40AF" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#1E40AF",
      }}
    >
      <Tabs.Screen name="HomeTab" options={{ 
        title: "Home", 
        tabBarIcon:({size}) =>(
            <Entypo
            name={'home'}
            size={size}
            />
        )
      }} />
      <Tabs.Screen name="ShelvesTab" options={{ 
        title: "Shelves", 
        tabBarIcon:({color, size})=>(
            <MaterialCommunityIcons
            name={'library-shelves'}
            size={size}
            color={color}
            />
         )
        }} />
      <Tabs.Screen
        name="AddPagesCounterTab"
        options={{
          title: "Count Pages",
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={incrementCounter}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <MaterialIcons name="post-add" size={40} color="#1E40AF" />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen name="ScanTab" options={{ 
        title: "Scan",
        tabBarIcon:({color, size})=>(
            <MaterialCommunityIcons
            name={'barcode-scan'}
            size={size}
            color={color}
            />
         )
        }} />
      <Tabs.Screen name="ProfileTab" options={{ 
        title: "Profile",
        tabBarIcon:({color, size})=>(
            <FontAwesome
            name={'user-circle-o'}
            size={size}
            color={color}
            />
         )
        }} />
    </Tabs>
  );
}
