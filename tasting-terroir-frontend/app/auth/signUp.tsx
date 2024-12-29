import { View } from "react-native";
import { useState } from "react";
import { createNewUser } from "@/services/authServices";
import IUser from "@/interfaces/IUser";
import useUserStore from "@/stores/user";
import { useRouter } from "expo-router";
import CtaButton from "@/components/buttons/ctaButton";
import FormTextInput from "@/components/inputs/formTextInput";
import { Text } from "@rneui/themed";

export default function SignUpForm() {
  const [user, setUser] = useState<Partial<IUser>>();
  const userStore = useUserStore();
  const router = useRouter();

  const isCompleteUser = (user: Partial<IUser>): user is IUser =>
    user.name && user.email && user.password ? true : false;

  const submitHandler = async () => {
    if (user && isCompleteUser(user)) {
      const userId = await createNewUser(user);
      if (userId) {
        userStore.updateUser(userId, user.name);
        router.push("/");
      }
    }
  };

  const nameChangeHandler = (text: string) => setUser({ ...user, name: text });

  const emailChangeHandler = (text: string) =>
    setUser({ ...user, email: text });

  const passwordChangeHandler = (text: string) =>
    setUser({ ...user, password: text });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",

        padding: 50,
        paddingTop: 75,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text style={{ alignSelf: "center", fontSize: 40, marginBottom: 50 }}>
          SIGN UP
        </Text>
        <FormTextInput label="Name" onChangeHandler={nameChangeHandler} />
        <FormTextInput label="Email" onChangeHandler={emailChangeHandler} />
        <FormTextInput
          label="Password"
          onChangeHandler={passwordChangeHandler}
          isPassword={true}
        />
        <CtaButton label="Sign Up" callback={submitHandler} />
      </View>
    </View>
  );
}
