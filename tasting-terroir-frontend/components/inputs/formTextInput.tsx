import { Input } from "@rneui/themed";
import { useState } from "react";

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
