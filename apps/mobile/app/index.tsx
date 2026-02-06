import { router } from "expo-router";
import { useEffect } from "react";
import SplashScreen from "./SplashScreen";

export default function Index() {
    useEffect(() => {
        // Navigate to main app after 2.5 seconds
        const timer = setTimeout(() => {
            router.replace("/(tabs)/markets");
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return <SplashScreen />;
}
