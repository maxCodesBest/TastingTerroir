import { View } from "react-native";
import MainButton from "@/components/mainButton";
import { wineTypes } from "@/general/generalTypes";
import { Href } from "expo-router";

export default function WineType() {
  const path: Href<string | Object> = "/screens/newTastingNote/wineColor";
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
        params={{ type: wineTypes.regular }}
      />
      <MainButton
        rerouthPath={path}
        text="Sparkling wine"
        params={{ type: wineTypes.sparkling }}
      />
      <MainButton
        rerouthPath={path}
        text="Fortified wine"
        params={{ type: wineTypes.fortified }}
      />
    </View>
  );
}
