import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Href, useRouter } from "expo-router";

export default function MainButton(props: {
  rerouthPath: Href<string | Object>;
  text: string;
  icon?: string;
}) {
  const router = useRouter();

  return (
    <Button
      style={styles.mainButtons}
      icon={props.icon}
      mode="elevated"
      onPress={() => router.push(props.rerouthPath)}
    >
      {props.text}
    </Button>
  );
}

const styles = StyleSheet.create({
  mainButtons: { marginTop: 40 },
});
