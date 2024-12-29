import { Button } from "@rneui/themed";

export default function CtaButton(props: {
  label: string;
  callback: () => void;
}) {
  return (
    <Button
      title={props.label}
      buttonStyle={{
        borderColor: "rgba(78, 116, 289, 1)",
        borderWidth: 0,
        borderRadius: 5,
      }}
      type="outline"
      raised
      titleStyle={{ color: "rgba(78, 116, 289, 1)", fontWeight: "700" }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      onPress={props.callback}
    />
  );
}
