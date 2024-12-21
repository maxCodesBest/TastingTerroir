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
  wineMainColors,
  AromaIntensity,
  Sweetness,
  Finish,
  Body,
  Generic,
} from "@/types/tastingNoteTypes";
import useTastingNotesStore from "@/stores/TastingNote";

export default function PalateForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    router.push("/newTastingNote/conclusionForm");
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
          <Text variant="headlineLarge">PALATE</Text>
          <View
            style={{
              width: "100%",
              marginTop: 50,
            }}
          >
            <Dropdown
              label="Sweetness"
              placeholder="Select Sweetness"
              options={enumToArray(Sweetness)}
              value={note.palate.sweetness}
              onSelect={(selection) => {
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
            <Dropdown
              label="Acidity"
              placeholder="Select Acidity"
              options={enumToArray(Generic)}
              value={note.palate.acidity}
              onSelect={(selection) => {
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
              <Dropdown
                label="Tannins"
                placeholder="Select Tannins"
                options={enumToArray(Generic)}
                value={note.palate.tannins}
                onSelect={(selection) => {
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
            <Dropdown
              label="Alcohol"
              placeholder="Select Alcohol"
              options={enumToArray(Generic)}
              value={note.palate.alcohol}
              onSelect={(selection) => {
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
            <Dropdown
              label="Body"
              placeholder="Select Body"
              options={enumToArray(Body)}
              value={note.palate.body}
              onSelect={(selection) => {
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
            <Dropdown
              label="Flavor Intensity"
              placeholder="Select Flavor Intensity"
              options={enumToArray(AromaIntensity)}
              value={note.palate.intensity}
              onSelect={(selection) => {
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
            <TextInput
              label="Flavor Characteristics"
              placeholder="Flavor Characteristics"
              value={note.palate.characteristics}
              multiline={true}
              onChangeText={(text) =>
                note.updateNote({
                  ...note,
                  palate: { ...note.palate, characteristics: text },
                })
              }
            />
            <Dropdown
              label="Finish"
              placeholder="Select Finish"
              options={enumToArray(Finish)}
              value={note.palate.finish}
              onSelect={(selection) => {
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

            <Button mode="elevated" onPress={submitHandler}>
              to conclusion
            </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
