import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import {
  enumToArray,
  QualityLevel,
  ReadinessLevel,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";
import CtaButton from "@/components/buttons/ctaButton";
import { Text } from "@rneui/themed";
import { FormDropdown } from "@/components/inputs/formDropdown";
import FormTitle from "@/components/FormTitle";

export default function ConclusionForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    if (note.isBlindTaste) {
      router.push("/newTastingNote/blindTastingEnding");
    } else {
      router.push("/newTastingNote/collectionsToEnlistSelection");
    }
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
        <FormTitle text="COLLECTIONS" />
        <View>
          <FormDropdown
            label="Quality Level"
            options={enumToArray(QualityLevel)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  conclusion: {
                    ...note.nose,
                    qualityLevel: selection as QualityLevel,
                  },
                });
              }
            }}
          />
          <FormDropdown
            label="Readiness Level"
            options={enumToArray(ReadinessLevel)}
            ChangeHandler={(selection) => {
              if (selection) {
                note.updateNote({
                  ...note,
                  conclusion: {
                    ...note.nose,
                    readinessLevel: selection as ReadinessLevel,
                  },
                });
              }
            }}
          />
          <CtaButton label="Continue" callback={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
}
