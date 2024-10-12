import { View } from "react-native";
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
      <MainButton
        rerouthPath="/screens/newTastingNote/wineType"
        text="Create a new Tasting Note"
      />
      <MainButton
        rerouthPath="/screens/newTastingNote"
        text="Resume a Tasting Note"
      />
    </View>
  );
}
