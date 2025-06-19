import CreateShelfButton from "@/src/components/CreateShelfButton";
import ShelflList from "@/src/components/ShelfList";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ShelvesTab(){
    return(
        <SafeAreaView className="flex-1">
                <View className="flex-1">
                    <ShelflList/>
                </View>
                <View className="justify-end flex-2">
                    <CreateShelfButton/>
                </View>
        </SafeAreaView>
    )
}