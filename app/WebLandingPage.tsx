import { ScreenBackground } from "@/components/ScreenBackground";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";

export default function WebLandingPage() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleAppStorePress = (store: 'google' | 'apple') => {
        // Placeholder URLs - replace with actual app store links
        const urls = {
            google: 'https://play.google.com/store',
            apple: 'https://apps.apple.com'
        };
        Linking.openURL(urls[store]);
    };

    return (
        <ScreenBackground>
            <StatusBar style="light" />
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
                {/* Header Section with Gradient Decoration */}
                <View className="relative h-32 bg-gradient-to-r from-accent/20 to-transparent overflow-hidden">
                    {/* Decorative Elements */}
                    <View className="absolute -left-10 -top-10 w-40 h-40 bg-accent/10 rounded-full" />
                    <View className="absolute -right-10 top-20 w-32 h-32 bg-accent/10 rounded-full" />

                    {/* Header Content */}
                    <View className="flex-1 justify-center items-center px-6">
                        <View className="w-16 h-16 bg-accent rounded-full justify-center items-center mb-3">
                            <Text className="text-white text-3xl font-bold">Q</Text>
                        </View>
                        <Text className="text-white text-2xl font-bold">PrimQ</Text>
                        <Text className="text-light-200 text-sm">Smart Trading Simplified</Text>
                    </View>
                </View>

                {/* Profile Section */}
                <View className="mx-6 mt-6 bg-dark-100/50 rounded-2xl p-6 border border-accent/20">
                    <View className="items-center">
                        {/* Avatar */}
                        <View className="w-20 h-20 bg-light-300/20 rounded-full justify-center items-center mb-4">
                            <Text className="text-light-200 text-4xl">👤</Text>
                        </View>

                        {/* Email */}
                        <View className="flex-row items-center">
                            <Text className="text-light-300 text-sm mr-2">Email:</Text>
                            <Text className="text-white text-base">jpratap581@gmail.com</Text>
                        </View>
                    </View>
                </View>

                {/* Expandable Sections */}
                <View className="mx-6 mt-6 space-y-4">
                    {/* Premium Section */}
                    <Pressable
                        onPress={() => toggleSection('premium')}
                        className="bg-dark-100/50 rounded-2xl border border-accent/20 overflow-hidden"
                    >
                        <View className="flex-row items-center p-5">
                            <Text className="text-accent text-xl mr-3">⭐</Text>
                            <Text className="flex-1 text-white text-base font-medium">Premium</Text>
                            <Text className="text-light-200 text-lg">{expandedSection === 'premium' ? '▼' : '▶'}</Text>
                        </View>
                        {expandedSection === 'premium' && (
                            <View className="px-5 pb-5 pt-2 border-t border-accent/10">
                                <Text className="text-light-200 text-sm leading-5">
                                    Unlock premium features including advanced analytics, real-time market data,
                                    portfolio insights, and exclusive trading tools. Get access to premium stock
                                    recommendations and personalized investment strategies.
                                </Text>
                            </View>
                        )}
                    </Pressable>

                    {/* Restore Portfolio Data Section */}
                    <Pressable
                        onPress={() => toggleSection('restore')}
                        className="bg-dark-100/50 rounded-2xl border border-accent/20 overflow-hidden"
                    >
                        <View className="flex-row items-center p-5">
                            <Text className="text-accent text-xl mr-3">🔄</Text>
                            <Text className="flex-1 text-white text-base font-medium">Restore Deleted Portfolio Data</Text>
                            <Text className="text-light-200 text-lg">{expandedSection === 'restore' ? '▼' : '▶'}</Text>
                        </View>
                        {expandedSection === 'restore' && (
                            <View className="px-5 pb-5 pt-2 border-t border-accent/10">
                                <Text className="text-light-200 text-sm leading-5">
                                    Recover your previously deleted portfolio data from our secure backup system.
                                    This feature allows you to restore portfolios that were deleted within the last
                                    30 days. Your investment history and stock holdings will be fully recovered.
                                </Text>
                            </View>
                        )}
                    </Pressable>

                    {/* Delete Account Data Section */}
                    <Pressable
                        onPress={() => toggleSection('delete')}
                        className="bg-dark-100/50 rounded-2xl border border-accent/20 overflow-hidden"
                    >
                        <View className="flex-row items-center p-5">
                            <Text className="text-red-400 text-xl mr-3">🗑️</Text>
                            <Text className="flex-1 text-white text-base font-medium">Delete Account Data</Text>
                            <Text className="text-light-200 text-lg">{expandedSection === 'delete' ? '▼' : '▶'}</Text>
                        </View>
                        {expandedSection === 'delete' && (
                            <View className="px-5 pb-5 pt-2 border-t border-accent/10">
                                <Text className="text-light-200 text-sm leading-5">
                                    Permanently delete all your account data including portfolios, trading history,
                                    and personal information. This action cannot be undone. Please note that you will
                                    need to contact support to complete the deletion process for security purposes.
                                </Text>
                            </View>
                        )}
                    </Pressable>
                </View>

                {/* Download App Section */}
                <View className="mx-6 mt-8">
                    <Text className="text-white text-xl font-bold text-center mb-6">
                        Download Our Mobile App
                    </Text>

                    <View className="flex-row justify-center items-center space-x-4 flex-wrap">
                        {/* Google Play Button */}
                        <Pressable
                            onPress={() => handleAppStorePress('google')}
                            className="bg-black rounded-lg px-6 py-3 mb-4 border border-white/20 active:opacity-70"
                        >
                            <View className="flex-row items-center">
                                <MaterialIcons name="android" size={20} color="white" style={{ marginRight: 12 }} />
                                <View>
                                    <Text className="text-white/70 text-xs">GET IT ON</Text>
                                    <Text className="text-white text-base font-bold">Google Play</Text>
                                </View>
                            </View>
                        </Pressable>

                        {/* App Store Button */}
                        <Pressable
                            onPress={() => handleAppStorePress('apple')}
                            className="bg-black rounded-lg px-6 py-3 mb-4 border border-white/20 active:opacity-70"
                        >
                            <View className="flex-row items-center">
                                <MaterialIcons name="apple" size={20} color="white" style={{ marginRight: 12 }} />
                                <View>
                                    <Text className="text-white/70 text-xs">Download on the</Text>
                                    <Text className="text-white text-base font-bold">App Store</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>

                {/* Footer */}
                <View className="mt-8 px-6">
                    <Text className="text-light-300 text-xs text-center">
                        © 2026 PrimQ. All rights reserved.
                    </Text>
                </View>
            </ScrollView>
        </ScreenBackground>
    );
}
