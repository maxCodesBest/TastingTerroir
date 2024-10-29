import { View } from "react-native";
import MainButton from "@/components/mainButton";
import { Href } from "expo-router";
import { wineTypes } from "@/types/tastingNoteTypes";

export default function wineTypeSelection() {
  const path: Href<string | Object> =
    "/screens/newTastingNote/WineMainColorSelection";
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainButton
        rerouthPath={path}
        text="Regular wine"
        params={{ wineType: wineTypes.regular }}
      />
      <MainButton
        rerouthPath={path}
        text="Sparkling wine"
        params={{ wineType: wineTypes.sparkling }}
      />
      <MainButton
        rerouthPath={path}
        text="Fortified wine"
        params={{ wineType: wineTypes.fortified }}
      />
    </View>
  );
}
