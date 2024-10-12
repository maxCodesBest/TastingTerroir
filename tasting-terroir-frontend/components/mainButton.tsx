import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Href, RouteParamInput, Routes, useRouter } from "expo-router";

export default function MainButton(props: {
  rerouthPath: Href<string | Object>;
  text: string;
  icon?: string;
  params?: Partial<RouteParamInput<Routes>>;
}) {
  const router = useRouter();

  return (
    <Button
      style={styles.mainButtons}
      icon={props.icon}
      mode="elevated"
      onPress={() => {
        router.push(props.rerouthPath);
        if (props.params) {
          router.setParams(props.params);
        }
      }}
    >
      {props.text}
    </Button>
  );
}

const styles = StyleSheet.create({
  mainButtons: { marginTop: 40 },
});
