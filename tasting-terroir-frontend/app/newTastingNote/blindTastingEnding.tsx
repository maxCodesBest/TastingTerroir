import { View, Text } from "react-native";
import MainButton from "@/components/mainButton";

export default function AddNewTastingNote() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Great tasting note!</Text>
      <Text>now it's time to reveal the bottle</Text>
      <MainButton
        rerouthPath="/newTastingNote/bottleInfoForm"
        text="Continue"
      />
    </View>
  );
}
