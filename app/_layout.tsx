import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import InitialLayout from "@/components/InitialLayout";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "black" }}
        >
          <InitialLayout/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
