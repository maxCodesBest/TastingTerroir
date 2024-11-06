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
      <MainButton rerouthPath="/screens/auth/signIn" text="Sign In" />
      <MainButton rerouthPath="/screens/auth/signUp" text="Sign Up" />
    </View>
  );
}
