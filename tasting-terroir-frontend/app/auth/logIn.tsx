import { View } from "react-native";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import { useState } from "react";
import { userLogIn } from "@/services/authServices";
import IUser from "@/interfaces/IUser";
import useUserStore from "@/stores/user";
import { useRouter } from "expo-router";

export default function LogInForm() {
  const [user, setUser] = useState<Partial<IUser>>({ name: "" }); //name is irelevent here
  const userStore = useUserStore();
  const router = useRouter();

  const isCompleteUser = (user: Partial<IUser>): user is IUser =>
    user.email && user.password ? true : false;

  const submitHandler = async () => {
    const maxsays = {
      name: "",
      email: "testytest@gmail.com",
      password: "testypassword",
    };
    const userId = await userLogIn(maxsays);
    if (userId) {
      userStore.updateUser(userId);
      router.push("/");
    }
    //maxsays delete all of the above

    // if (user && isCompleteUser(user)) {
    //   const userId = await userLogIn(user);
    //   if (userId) {
    //     userStore.updateUser(userId);
    //     router.push("/");
    //   }
    // }
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
          <Text style={{ alignSelf: "center" }} variant="headlineLarge">
            SIGN IN
          </Text>

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
