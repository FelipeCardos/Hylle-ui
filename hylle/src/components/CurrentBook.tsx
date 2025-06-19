import { View, Image } from "react-native";

export default function CurrentBook(){
return (
  <View className="flex-2 justify-center items-center h-full">
    <View className="p-10 rounded-md flex-1">
      <Image
        source={require("../assets/Clean_Code.png")} 
        className="rounded-md w-80 h-80 object-contain"
      />
    </View>
  </View>
);

}