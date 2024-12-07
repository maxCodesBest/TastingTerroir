import { View } from "react-native";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import { useState } from "react";
import { deleteToken, userLogIn } from "@/services/authServices";
import IUser from "@/interfaces/IUser";
import useUserStore from "@/stores/user";
import { useRouter } from "expo-router";

export default function LogOutForm() {
  const userStore = useUserStore();
  const router = useRouter();

  const logOutHandler = async () => {
    const tokenKey = userStore.tokenKey;
    if (tokenKey) {
      deleteToken(tokenKey);
      userStore.resetUser();
      router.push("/auth");
    }
  };

  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",

          padding: 50,
          paddingTop: 75,
        }}
      >
        <View style={{ width: "100%" }}>
          <Text variant="headlineLarge">LOG OUT</Text>
          <Text variant="headlineSmall">are you sure you want to log out?</Text>

          <Button mode="elevated" onPress={logOutHandler}>
            yes
          </Button>
          <Button
            mode="elevated"
            onPress={() => {
              router.back();
            }}
          >
            no
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}
