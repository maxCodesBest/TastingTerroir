import { View } from "react-native";
import MainButton from "@/components/buttons/mainButton";
import useTastingNotesStore from "@/stores/TastingNote";

export default function tastingTypeSelection() {
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
        rerouthPath="/newTastingNote/wineTypeSelection"
        text="Blind tasting"
        callback={() => {
          note.updateNote({
            ...note,
            isBlindTaste: true,
          });
        }}
      />
      <MainButton
        rerouthPath="/newTastingNote/bottleInfoForm"
        text="I know what I'm drinking"
        callback={() => {
          note.updateNote({
            ...note,
            isBlindTaste: false,
          });
        }}
      />
    </View>
  );
}
