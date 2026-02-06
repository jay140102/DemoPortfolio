import { StocksProvider } from "@/contexts/StocksContext";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <StocksProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="screens/StockInfo"
          options={{ headerShown: true, title: "Stock Info" }}
        />
        <Stack.Screen
          name="screens/add-stock"
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "slide_from_bottom"
          }}
        />
        <Stack.Screen
          name="screens/premium-plans"
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "slide_from_bottom"
          }}
        />
      </Stack>
    </StocksProvider>
  );
}
