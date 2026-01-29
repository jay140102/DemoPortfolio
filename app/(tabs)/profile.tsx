import { ScreenBackground } from "@/components/ScreenBackground";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function ProfileTab() {
  return (
    <ScreenBackground>
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-white text-[18px] font-semibold">
          Profile (blank template)
        </Text>
      </View>
    </ScreenBackground>
  );
}

