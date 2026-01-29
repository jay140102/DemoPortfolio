import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type TabIconProps = {
  focused: boolean;
  icon: number;
  title: string;
};

function TabIcon({ focused, icon, title }: TabIconProps) {
  return (
    <View className="items-center justify-center">
      <Image
        source={icon}
        tintColor={focused ? "#AB8BFF" : "#A8B5DB"}
        className="size-5"
      />
      <Text
        className={[
          "text-[11px] mt-1",
          focused ? "text-accent font-semibold" : "text-light-200",
        ].join(" ")}
      >
        {title}
      </Text>
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs
      initialRouteName="markets"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "200%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderTopWidth: 0,
          height: 76,
        },
      }}
    >
      <Tabs.Screen
        name="markets"
        options={{
          headerShown: false,
          title: "Markets",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Markets" />
          ),
        }}
      />
      <Tabs.Screen
        name="academy"
        options={{
          headerShown: false,
          title: "Academy",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.play} title="Academy" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
