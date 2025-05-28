import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
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
        tabBarIcon:({color, size}) =>(
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
      <Tabs.Screen name="AddPagesCounterTab" options={{ 
        title: "Count Pages",
        tabBarIcon:({color, size})=>(
            <MaterialIcons
            name={'post-add'}
            size={size}
            color={color}
            />
         )
        }} />
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
