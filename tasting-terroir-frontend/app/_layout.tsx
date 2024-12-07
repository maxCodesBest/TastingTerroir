import { Stack, useNavigation, useRouter } from "expo-router";
import BackButton from "@/components/backButton";
import { useEffect } from "react";
import { tokenValidation } from "@/services/authServices";
import useUserStore from "@/stores/user";

export default function RootLayout() {
  const navigation = useNavigation();
  const userStore = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "state",
      async (navigationData) => {
        const routes = navigationData.data.state.routes;
        const currentRoute: string = routes[routes.length - 1].name;
        if (!currentRoute.includes("auth")) {
          const tokenKey = userStore.tokenKey;
          if (tokenKey) {
            const isTokenValid = await tokenValidation(tokenKey);
            if (isTokenValid) {
              return;
            }
          }
          console.log("token is invalid rerouting to sign in page");
          router.dismissAll();
          router.push("/auth");
        }
      }
    );
    return unsubscribe;
  });
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
