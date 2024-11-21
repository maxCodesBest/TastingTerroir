import { Stack } from "expo-router";
import BackButton from "@/components/backButton";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
      <BackButton />
    </>
  );
}
