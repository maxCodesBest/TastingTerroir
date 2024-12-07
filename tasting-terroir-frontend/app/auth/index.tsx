import { View } from "react-native";
import MainButton from "@/components/mainButton";

export default function authScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainButton rerouthPath="/auth/logIn" text="Sign In" />
      <MainButton rerouthPath="/auth/signUp" text="Sign Up" />
    </View>
  );
}
