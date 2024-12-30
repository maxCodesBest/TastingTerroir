import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import {
  enumToArray,
  Condition,
  AromaIntensity,
  Development,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";
import FormTitle from "@/components/FormTitle";
import { FormDropdown } from "@/components/inputs/formDropdown";
import FormTextInput from "@/components/inputs/formTextInput";
import CtaButton from "@/components/buttons/ctaButton";

export default function NoseForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    router.push("/newTastingNote/palateForm");
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
        <FormTitle text="NOSE" />
        <View>
          <FormDropdown
            label="Condition"
            options={enumToArray(Condition)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  nose: {
                    ...note.nose,
                    condition: selection as Condition,
                  },
                });
              }
            }}
          />
          <FormDropdown
            label="Aroma Intensity"
            options={enumToArray(AromaIntensity)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  nose: {
                    ...note.nose,
                    intensity: selection as AromaIntensity,
                  },
                });
              }
            }}
          />
          <FormTextInput
            label="Aroma Characteristics"
            isMultiLine={true}
            onChangeHandler={(text) =>
              note.updateNote({
                ...note,
                nose: { ...note.nose, characteristics: text },
              })
            }
          />
          <FormDropdown
            label="Development"
            options={enumToArray(Development)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  nose: {
                    ...note.nose,
                    development: selection as Development,
                  },
                });
              }
            }}
          />
          <CtaButton label="To palate" callback={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
}
