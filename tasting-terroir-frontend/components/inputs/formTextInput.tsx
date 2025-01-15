import { Input } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function FormTextInput(props: {
  label: string;
  onChangeHandler: (text: string) => void;
  isPassword?: boolean;
  isMultiLine?: boolean;
  maxLength?: number;
}) {
  const [data, setData] = useState<string>();
  return (
    <Input
      style={styles.input}
      inputContainerStyle={{ width: "100%" }}
      label={props.label}
      placeholder={props.label}
      value={data}
      secureTextEntry={props.isPassword}
      multiline={props.isMultiLine}
      maxLength={props.maxLength}
      onChangeText={(text) => {
        setData(text);
        props.onChangeHandler(text);
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
