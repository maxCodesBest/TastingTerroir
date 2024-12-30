import { View } from "react-native";
import { deleteToken } from "@/services/authServices";
import useUserStore from "@/stores/user";
import { useRouter } from "expo-router";
import CtaButton from "@/components/buttons/ctaButton";
import { Text } from "@rneui/themed";
import FormTitle from "@/components/FormTitle";

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
    <View
      style={{
        flex: 1,
        alignItems: "center",

        padding: 50,
        paddingTop: 75,
      }}
    >
      <View style={{ width: "100%" }}>
        <FormTitle text="LOG OUT" />
        <Text>are you sure you want to log out?</Text>

        <CtaButton label="Yes" callback={logOutHandler} />
        <CtaButton label="No" callback={() => router.back()} />
      </View>
    </View>
  );
}
