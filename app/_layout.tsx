import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/StockInfo"
        options={{ headerShown: true, title: "Stock Info" }}
      />
    </Stack>
  );
}
