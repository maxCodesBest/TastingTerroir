import { View } from "react-native";
import { Button, Icon } from "react-native-paper";
import { useFocusEffect, useRouter } from "expo-router";
import { useState } from "react";
import { useRouteInfo } from "expo-router/build/hooks";

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
          marginTop: 75,
          marginLeft: 12.5,
        }}
      >
        <Button
          compact={true}
          onPress={() =>
            router.canGoBack() ? router.back() : router.push("/")
          }
        >
          <Icon source={"chevron-left"} size={25}></Icon>
        </Button>
      </View>
    )
  );
}
