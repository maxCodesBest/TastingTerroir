import { View } from "react-native";
import { useState } from "react";
import { userLogIn } from "@/services/authServices";
import IUser from "@/interfaces/IUser";
import useUserStore from "@/stores/user";
import { useRouter } from "expo-router";
import { Input, Text, Button } from "@rneui/themed";
import CtaButton from "@/components/buttons/ctaButton";
import FormTextInput from "@/components/inputs/formTextInput";

export default function LogInForm() {
  const [user, setUser] = useState<Partial<IUser>>({ name: "" }); //name is irelevent here
  const userStore = useUserStore();
  const router = useRouter();

  const submitHandler = async () => {
    const loggedUser = await userLogIn({
      name: "placeholder",
      email: "placeholder",
      password: "placeholder",
    });
    if (loggedUser) {
      userStore.updateUser(loggedUser.userId, loggedUser.userName);
      router.push("/");
    }

    //TODO - bring back the real fcking mechanism written next, and at least do the part above conditional for DEV environment
    // if (user && isCompleteUser(user)) {
    //   const loggedUser = await userLogIn(user);
    //   if (loggedUser) {
    //     userStore.updateUser(loggedUser.userId, loggedUser.userName);
    //     router.push("/");
    //   }
    // }
    // const isCompleteUser = (user: Partial<IUser>): user is IUser =>
    // user.email && user.password ? true : false;
  };

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
          LOG IN
        </Text>
        <FormTextInput label="Email" onChangeHandler={emailChangeHandler} />
        <FormTextInput
          label="Password"
          onChangeHandler={passwordChangeHandler}
          isPassword={true}
        />
        <CtaButton label="Log In" callback={submitHandler} />
      </View>
    </View>
  );
}
