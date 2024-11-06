import { View } from "react-native";
import { useRouter } from "expo-router";

import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import { useState } from "react";
import User from "@/objects/user";
import { createNewUser } from "@/services/authServices";

export default function SignUpForm() {
  const [user, setUser] = useState<User>(new User("place", "holder")); //TODO - do something better than this please..
  const router = useRouter();
  const submitHandler = async () => {
    await createNewUser(user);
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
            label="Email"
            placeholder="Email"
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
          {/* TODO - implement email validation */}
          <TextInput
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
