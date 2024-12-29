import { View } from "react-native";
import MainButton from "@/components/buttons/mainButton";

export default function AddNewTastingNote() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainButton
        rerouthPath="/newTastingNote/tastingTypeSelection"
        text="Create a new Tasting Note"
      />
      <MainButton rerouthPath="/newTastingNote" text="Resume a Tasting Note" />
    </View>
  );
}
