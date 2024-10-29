import { View } from "react-native";
import MainButton from "@/components/mainButton";
import { useLocalSearchParams } from "expo-router";
import { Href } from "expo-router";
import { wineMainColors } from "@/types/tastingNoteTypes";

export default function WineMainColorSelection() {
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
        params={{ color: wineMainColors.white, ...data }}
      />
      <MainButton
        rerouthPath={path}
        text="Red"
        params={{ color: wineMainColors.red, ...data }}
      />
      <MainButton
        rerouthPath={path}
        text="Rose"
        params={{ color: wineMainColors.rose, ...data }}
      />
      <MainButton
        rerouthPath={path}
        text="Orange"
        params={{ color: wineMainColors.orange, ...data }}
      />
    </View>
  );
}
