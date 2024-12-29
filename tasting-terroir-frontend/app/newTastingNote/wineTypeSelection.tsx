import { View } from "react-native";
import MainButton from "@/components/buttons/mainButton";
import { Href } from "expo-router";
import { wineTypes } from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";

export default function wineTypeSelection() {
  const path: Href = "/newTastingNote/WineMainColorSelection";
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
        text="Regular wine"
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, wineType: wineTypes.regular },
          });
        }}
      />
      <MainButton
        rerouthPath={path}
        text="Sparkling wine"
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, wineType: wineTypes.sparkling },
          });
        }}
      />
      <MainButton
        rerouthPath={path}
        text="Fortified wine"
        callback={() => {
          note.updateNote({
            ...note,
            general: { ...note.general, wineType: wineTypes.fortified },
          });
        }}
      />
    </View>
  );
}
