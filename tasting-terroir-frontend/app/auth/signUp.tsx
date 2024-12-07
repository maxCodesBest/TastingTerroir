import { View } from "react-native";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import { useState } from "react";
import { createNewUser } from "@/services/authServices";
import IUser from "@/interfaces/IUser";
import useUserStore from "@/stores/user";
import { useRouter } from "expo-router";

export default function SignUpForm() {
  const [user, setUser] = useState<IUser>({ email: "", password: "" }); //TODO - do something better than this please..
  const userStore = useUserStore();
  const router = useRouter();

  const submitHandler = async () => {
    if (user) {
      const userId = await createNewUser(user);
      if (userId) {
        userStore.updateUser(userId);
        router.push("/");
      }
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
          <Text variant="headlineLarge">SIGN UP</Text>
          <TextInput
            style={{
              marginTop: 50,
            }}
            label="Email"
            placeholder="Email"
            value={user?.email}
            onChangeText={(text) => {
              setUser({ ...user, email: text });
            }}
          />
          {/* TODO - implement email validation */}
          <TextInput
            style={{
              marginTop: 50,
              marginBottom: 50,
            }}
            label="Password"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
          <Button mode="elevated" onPress={submitHandler}>
            submit
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}
