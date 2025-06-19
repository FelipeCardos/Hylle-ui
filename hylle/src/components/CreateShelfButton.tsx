import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CreateShelfButton(){
    return(
        <View className="items-center">
            <TouchableOpacity>
                <Ionicons name="add-circle-outline" size={50} color="green" />
            </TouchableOpacity>    
        </View>
        
    )
}