import { View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { useState } from "react";
import { useRouteInfo } from "expo-router/build/hooks";
import { FAB, Icon } from "@rneui/themed";

export default function BackButton() {
  const router = useRouter();
  const route = useRouteInfo();
  const [isUnbackablePage, setIsUnbackablePage] = useState(true);

  useFocusEffect(() => {
    setIsUnbackablePage(route.pathname == "/" || route.pathname == "/auth");
  });

  return (
    !isUnbackablePage && (
      <View
        style={{
          position: "absolute",
          marginTop: 72,
          marginLeft: 12.5,
        }}
      >
        <FAB
          color="transparent"
          icon={{ name: "left", type: "antdesign" }}
          onPress={() =>
            router.canGoBack() ? router.back() : router.push("/")
          }
        />
      </View>
    )
  );
}
