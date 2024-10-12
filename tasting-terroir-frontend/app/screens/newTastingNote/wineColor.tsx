import { View } from "react-native";
import MainButton from "@/components/mainButton";
import { wineColors } from "@/general/generalTypes";
import { useLocalSearchParams } from "expo-router";
import { Href } from "expo-router";

export default function WineColor() {
  const path: Href<string | Object> =
    "/screens/newTastingNote/newTastingNoteForm";
  const data = useLocalSearchParams();

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
        text="White"
        params={{ color: wineColors.white, ...data }}
      />
      <MainButton
        rerouthPath={path}
        text="Red"
        params={{ color: wineColors.red, ...data }}
      />
      <MainButton
        rerouthPath={path}
        text="Rose"
        params={{ color: wineColors.rose, ...data }}
      />
      <MainButton
        rerouthPath={path}
        text="Orange"
        params={{ color: wineColors.orange, ...data }}
      />
    </View>
  );
}
