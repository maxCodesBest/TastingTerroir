import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Href, Link } from "expo-router";

export default function MainButton(props: {
  rerouthPath: Href;
  text: string;
  icon?: string;
  callback?: () => void;
}) {
  // TODO - the problem here is that navigating with buttons and router.push(path) is making some funny bugs so i hide a link under the button
  // one day come back to change this funny hack/workaround, maybe new versions already fixed the problem with buttons for you at this point
  return (
    <Link
      style={styles.mainButtons}
      href={props.rerouthPath}
      onPress={() => {
        if (props.callback) {
          props.callback();
        }
      }}
      asChild
    >
      <Button style={styles.mainButtons} icon={props.icon} mode="elevated">
        {props.text}
      </Button>
    </Link>
  );
}

const styles = StyleSheet.create({
  mainButtons: { marginTop: 40 },
});
