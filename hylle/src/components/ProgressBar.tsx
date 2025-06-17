import React, { useEffect, useRef } from "react";
import { View, Animated, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ProgressBar() {
  const progress = 0.6;

  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View className="bg-blue-500 rounded-xl h-20 mx-4 px-4 flex-row items-center">
        <Text></Text>
      <FontAwesome name="user-circle-o" size={54} color="#fff" />

      <View className="w-6" />

      <View className="flex-1 flex-row items-center">
        <View className="flex-1 h-4 bg-white/30 rounded-full overflow-hidden">
          <Animated.View
            className="h-full bg-white rounded-full"
            style={{ width: widthInterpolated }}
          />
        </View>
        <Text className="text-white text-lg font-semibold ml-2">
          {Math.round(progress * 100)}%
        </Text>
      </View>
    </View>
  );
}
