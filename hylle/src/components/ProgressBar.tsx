import React, { useEffect, useRef, useState } from "react";
import { View, Animated, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import eventBus from "../hooks/EventBus"; // ajuste caminho conforme sua estrutura

export default function ProgressBar() {
  const widthAnim = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);

  const TARGET = 100;

  const animateTo = (value: number) => {
    Animated.timing(widthAnim, {
      toValue: value,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const loadProgress = async () => {
    try {
      const value = await AsyncStorage.getItem("pageCount");
      const count = value ? parseInt(value, 10) : 0;
      const ratio = Math.min(count / TARGET, 1);
      setProgress(ratio);
      animateTo(ratio);
    } catch (e) {
      console.error("Erro ao carregar progresso:", e);
    }
  };

  useEffect(() => {
    loadProgress();

    const listener = () => loadProgress();
    eventBus.on("pageCountUpdated", listener);

    return () => {
      eventBus.off("pageCountUpdated", listener);
    };
  }, []);

  const widthInterpolated = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View className="bg-blue-500 rounded-xl h-20 mx-4 px-4 flex-row items-center">
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
