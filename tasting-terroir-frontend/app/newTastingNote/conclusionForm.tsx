import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { Dropdown } from "react-native-paper-dropdown";
import { Provider as PaperProvider, Text, Button } from "react-native-paper";
import {
  enumToArray,
  QualityLevel,
  ReadinessLevel,
} from "@/types/tastingNoteTypes";
import { createTastingNote } from "@/services/tastingNoteServices";
import useTastingNotesStore from "@/stores/TastingNote";
import useUserStore from "@/stores/user";
import { getAllUserCollectionTitles } from "@/services/collectionServices";

export default function NewTastingNoteForm() {
  const note = useTastingNotesStore();
  const userStore = useUserStore();
  const router = useRouter();

  const submitHandler = async () => {
    const userCollections = await getAllUserCollectionTitles(
      userStore.tokenKey!
    );
    await createTastingNote(note, userStore.tokenKey!, userCollections);
    if (router.canDismiss()) router.dismissAll();
    router.push("/");
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
              submit
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
