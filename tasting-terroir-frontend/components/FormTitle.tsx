import { Text } from "@rneui/themed";

export default function FormTitle(props: { text: string }) {
  return (
    <Text style={{ alignSelf: "center", fontSize: 40, marginBottom: 50 }}>
      {props.text}
    </Text>
  );
}
