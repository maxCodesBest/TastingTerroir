import { View } from "react-native";
import MainButton from "@/components/mainButton";
import { useLocalSearchParams } from "expo-router";
import { Href } from "expo-router";
import { wineMainColors } from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";

export default function WineMainColorSelection() {
  const path: Href = "/newTastingNote/apperanceForm";
  const note = useTastingNotesStore();

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
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, color: wineMainColors.white },
          });
        }}
      />
      <MainButton
        rerouthPath={path}
        text="Red"
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, color: wineMainColors.red },
          });
        }}
      />
      <MainButton
        rerouthPath={path}
        text="Rose"
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, color: wineMainColors.rose },
          });
        }}
      />
      <MainButton
        rerouthPath={path}
        text="Orange"
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, color: wineMainColors.orange },
          });
        }}
      />
    </View>
  );
}
