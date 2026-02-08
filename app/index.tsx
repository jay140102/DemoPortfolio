import { router } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import SplashScreen from "./SplashScreen";

export default function Index() {
    useEffect(() => {
        // Check if running on web platform
        if (Platform.OS === 'web') {
            // Add small delay for web to ensure Root Layout is mounted
            const timer = setTimeout(() => {
                router.replace("/WebLandingPage");
            }, 100);

            return () => clearTimeout(timer);
        } else {
            // Navigate to main app after 2.5 seconds for mobile
            const timer = setTimeout(() => {
                router.replace("/(tabs)/markets");
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, []);

    // Show splash screen for mobile, web will navigate away immediately
    return <SplashScreen />;
}
