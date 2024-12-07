import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

import { Dropdown } from "react-native-paper-dropdown";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import {
  enumToArray,
  Condition,
  AromaIntensity,
  Development,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";

export default function NewTastingNoteForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    router.push("/newTastingNote/palateForm");
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
          <Text variant="headlineLarge">NOSE</Text>
          <View
            style={{
              width: "100%",
              marginTop: 50,
            }}
          >
            <Dropdown
              label="Condition"
              placeholder="Select Condition"
              options={enumToArray(Condition)}
              value={note.nose.condition}
              onSelect={(selection) => {
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
            <Dropdown
              label="Aroma Intensity"
              placeholder="Select Aroma Intensity"
              options={enumToArray(AromaIntensity)}
              value={note.nose.intensity}
              onSelect={(selection) => {
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
            <TextInput
              label="Aroma Characteristics"
              placeholder="Aroma Characteristics"
              value={note.nose.characteristics}
              multiline={true}
              onChangeText={(text) =>
                note.updateNote({
                  ...note,
                  nose: { ...note.nose, characteristics: text },
                })
              }
            />
            <Dropdown
              label="Development"
              placeholder="Select Development"
              options={enumToArray(Development)}
              value={note.nose.development}
              onSelect={(selection) => {
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

            <Button mode="elevated" onPress={submitHandler}>
              to palate
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
