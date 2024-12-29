import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import {
  enumToArray,
  wineMainColors,
  AromaIntensity,
  Sweetness,
  Finish,
  Body,
  Generic,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";
import CtaButton from "@/components/buttons/ctaButton";
import { FormDropdown } from "@/components/inputs/formDropdown";
import FormTitle from "@/components/FormTitle";
import FormTextInput from "@/components/inputs/formTextInput";

export default function PalateForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    router.push("/newTastingNote/conclusionForm");
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
        <FormTitle text="PALATE" />
        <View
          style={{
            width: "100%",
            marginTop: 50,
          }}
        >
          <FormDropdown
            label="Sweetness"
            options={enumToArray(Sweetness)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  palate: {
                    ...note.palate,
                    sweetness: selection as Sweetness,
                  },
                });
              }
            }}
          />
          <FormDropdown
            label="Acidity"
            options={enumToArray(Generic)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  palate: {
                    ...note.palate,
                    acidity: selection as Generic,
                  },
                });
              }
            }}
          />
          {note.general.color != wineMainColors.white && (
            <FormDropdown
              label="Tannins"
              options={enumToArray(Generic)}
              ChangeHandler={(selection) => {
                if (selection) {
                  note.updateNote({
                    ...note,
                    palate: {
                      ...note.palate,
                      tannins: selection as Generic,
                    },
                  });
                }
              }}
            />
          )}
          <FormDropdown
            label="Alcohol"
            options={enumToArray(Generic)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  palate: {
                    ...note.palate,
                    alcohol: selection as Generic,
                  },
                });
              }
            }}
          />
          <FormDropdown
            label="Body"
            options={enumToArray(Body)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  palate: {
                    ...note.palate,
                    body: selection as Body,
                  },
                });
              }
            }}
          />
          <FormDropdown
            label="Flavor Intensity"
            options={enumToArray(AromaIntensity)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  palate: {
                    ...note.palate,
                    intensity: selection as AromaIntensity,
                  },
                });
              }
            }}
          />
          <FormTextInput
            label="Flavor Characteristics"
            isMultiLine={true}
            onChangeHandler={(text) =>
              note.updateNote({
                ...note,
                palate: { ...note.palate, characteristics: text },
              })
            }
          />
          <FormDropdown
            label="Finish"
            options={enumToArray(Finish)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  palate: {
                    finish: selection as Finish,
                    ...note.palate,
                  },
                });
              }
            }}
          />
          <CtaButton label="To conclusion" callback={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
}
