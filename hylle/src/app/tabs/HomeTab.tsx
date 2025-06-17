import ProgressBar from "@/src/components/ProgressBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <ProgressBar />
      </View>
    </SafeAreaView>
  );
}
