import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { Dropdown } from "react-native-paper-dropdown";
import { Provider as PaperProvider, Text, Button } from "react-native-paper";
import {
  enumToArray,
  QualityLevel,
  ReadinessLevel,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";

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
    <PaperProvider>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            padding: 50,
            paddingTop: 75,
          }}
        >
          <Text variant="headlineLarge">CONCLUSION</Text>
          <View
            style={{
              width: "100%",
              marginTop: 50,
            }}
          >
            <Dropdown
              label="Quality Level"
              placeholder="Select Quality Level"
              options={enumToArray(QualityLevel)}
              value={note.conclusion.qualityLevel}
              onSelect={(selection) => {
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
            <Dropdown
              label="Readiness Level"
              placeholder="Select Readiness Level"
              options={enumToArray(ReadinessLevel)}
              value={note.conclusion.readinessLevel}
              onSelect={(selection) => {
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
            <Button mode="elevated" onPress={submitHandler}>
              Continue
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
