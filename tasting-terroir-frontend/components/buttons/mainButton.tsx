import { StyleSheet } from "react-native";
import { Href, Link } from "expo-router";
import { Button } from "@rneui/themed";

export default function MainButton(props: {
  rerouthPath: Href;
  text: string;
  icon?: { name: string; type: string };
  callback?: () => void;
}) {
  // TODO - the problem here is that navigating with buttons and router.push(path) is making some funny bugs so i hide a link under the button
  // one day come back to change this funny hack/workaround, maybe new versions already fixed the problem with buttons for you at this point
  return (
    <Link
      href={props.rerouthPath}
      onPress={() => {
        if (props.callback) {
          props.callback();
        }
      }}
      asChild
    >
      <Button
        title={props.text}
        buttonStyle={{
          borderColor: "#242424",
          height: "100%",
          width: "100%",
          borderWidth: 1,
          borderRadius: 10,
        }}
        type="outline"
        raised
        titleStyle={{ color: "#242424" }}
        containerStyle={{
          marginTop: 40,
          borderWidth: 0,
          borderRadius: 10,
          height: 150,
          width: "80%",
        }}
        icon={{ name: props.icon?.name, type: props.icon?.type }}
      />
    </Link>
  );
}

const styles = StyleSheet.create({
  mainButtons: {
    marginTop: 40,
    height: 150,
    width: "80%",
    justifyContent: "center",
    flexShrink: 1,
  },
});
