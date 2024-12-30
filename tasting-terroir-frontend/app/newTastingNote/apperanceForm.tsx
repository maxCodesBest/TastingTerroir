import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
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
import { Text } from "@rneui/themed";
import { FormDropdown } from "@/components/inputs/formDropdown";
import CtaButton from "@/components/buttons/ctaButton";

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
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          padding: 50,
          paddingTop: 75,
        }}
      >
        <Text style={{ alignSelf: "center", fontSize: 40, marginBottom: 50 }}>
          APPERANCE
        </Text>
        <View>
          <FormDropdown
            label="Clarity"
            options={enumToArray(Clarity)}
            ChangeHandler={(selection: string) => {
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
          <FormDropdown
            label="Intensity"
            options={enumToArray(ColorIntensity)}
            ChangeHandler={(selection) => {
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
          <FormDropdown
            label="Color"
            options={getSpecificColorPalate(note.general.color!)}
            ChangeHandler={(selection) => {
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
          <CtaButton label="To nose" callback={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
}
