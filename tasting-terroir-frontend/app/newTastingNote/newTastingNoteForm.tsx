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
  Clarity,
  ColorIntensity,
  enumToArray,
  ColorPalate,
  WhiteColorPalate,
  RedColorPalate,
  OrangeColorPalate,
  RoseColorPalate,
  wineMainColors,
  Condition,
  AromaIntensity,
  Development,
  Sweetness,
  Finish,
  Body,
  Generic,
  QualityLevel,
  ReadinessLevel,
} from "@/types/tastingNoteTypes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { createTastingNote } from "@/services/tastingNoteServices";
import useTastingNotesStore from "@/stores/TastingNote";
import useUserStore from "@/stores/user";
import { ITastingNote } from "@/interfaces/ITastingNote";

function getSpecificColorPalate(color: wineMainColors | undefined) {
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
      console.error("no color"); //TODO - real error handler
      return enumToArray(Colors);
  }
}

export default function NewTastingNoteForm() {
  const note = useTastingNotesStore();
  const userStore = useUserStore();
  const router = useRouter();

  const submitHandler = async () => {
    const linkedNote: ITastingNote = { ...note, userId: userStore.tokenKey };
    await createTastingNote(linkedNote, userStore.tokenKey!);
    if (router.canDismiss()) router.dismissAll();
    router.push("/");
  };

  //TODO make this into smaller smarter components instead of hardcoded messy shit
  return (
    <PaperProvider>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            padding: 50,
            paddingTop: 75,
          }}
        >
          <Text variant="headlineLarge">APPERANCE</Text>
          <View style={{ width: "100%" }}>
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
              options={getSpecificColorPalate(note.general.color)}
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
          </View>
          <Text variant="headlineLarge">NOSE</Text>
          <View style={{ width: "100%" }}>
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
          </View>
          <Text variant="headlineLarge">PALATE</Text>
          <View style={{ width: "100%" }}>
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
          </View>
          <Text variant="headlineLarge">CONCLUSION</Text>
          <View style={{ width: "100%" }}>
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
          </View>
          <Button mode="elevated" onPress={submitHandler}>
            submit
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
