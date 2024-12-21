import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

import { Dropdown } from "react-native-paper-dropdown";
import { Provider as PaperProvider, Text, Button } from "react-native-paper";
import {
  Clarity,
  ColorIntensity,
  enumToArray,
  ColorPalate,
  WhiteColorPalate,
  RedColorPalate,
  OrangeColorPalate,
  RoseColorPalate,
  wineMainColors,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";

function getSpecificColorPalate(color: wineMainColors) {
  switch (color) {
    case wineMainColors.white:
      return enumToArray(WhiteColorPalate);
    case wineMainColors.red:
      return enumToArray(RedColorPalate);
    case wineMainColors.orange:
      return enumToArray(OrangeColorPalate);
    case wineMainColors.rose:
      return enumToArray(RoseColorPalate);
    default:
      return [];
    // throw Error("no color");
    // TODO - this is called when finishing a note for some unclear reason, solve it and un-comment the error
  }
}

export default function ApperanceForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    router.push("/newTastingNote/noseForm");
  };

  //TODO make this into smaller smarter components instead of hardcoded messy shit
  return (
    <PaperProvider>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            padding: 50,
            paddingTop: 75,
          }}
        >
          <Text variant="headlineLarge">APPERANCE</Text>
          <View
            style={{
              width: "100%",
              marginTop: 50,
            }}
          >
            <Dropdown
              label="Clarity"
              placeholder="Select Clarity"
              options={enumToArray(Clarity)}
              value={note.appearance.clarity}
              onSelect={(selection) => {
                if (selection) {
                  note.updateNote({
                    ...note,
                    appearance: {
                      ...note.appearance,
                      clarity: selection as Clarity,
                    },
                  });
                }
              }}
            />
            <Dropdown
              label="Intensity"
              placeholder="Select Intensity"
              options={enumToArray(ColorIntensity)}
              value={note.appearance.colorIntensity}
              onSelect={(selection) => {
                if (selection) {
                  note.updateNote({
                    ...note,
                    appearance: {
                      ...note.appearance,
                      colorIntensity: selection as ColorIntensity,
                    },
                  });
                }
              }}
            />
            <Dropdown
              label="Color"
              placeholder="Select Color"
              options={getSpecificColorPalate(note.general.color!)}
              value={note.appearance.color}
              onSelect={(selection) => {
                if (selection) {
                  note.updateNote({
                    ...note,
                    appearance: {
                      ...note.appearance,
                      color: selection as ColorPalate,
                    },
                  });
                }
              }}
            />
            <Button mode="elevated" onPress={submitHandler}>
              to nose
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
