import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

import { Dropdown } from "react-native-paper-dropdown";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import TastingNote from "@/objects/TastingNote";
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
  wineTypes,
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
      console.error("no color"); //TODO - real error handler
      return enumToArray(Colors);
  }
}

export default function NewTastingNoteForm() {
  const data = useLocalSearchParams(); //TODO - pass the type and color in a better way, maybe Redux?
  const initalNote = new TastingNote(
    data.wineType as wineTypes,
    data.color as wineMainColors
  );
  const router = useRouter();
  const [tastingNote, setTastingNote] = useState<TastingNote>(initalNote);
  const submitHandler = async () => {
    await createTastingNote(tastingNote);
    if (router.canDismiss()) router.dismissAll();
    router.back();
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
              value={tastingNote.appearance.clarity}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    appearance: {
                      ...tastingNote.appearance,
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
              value={tastingNote.appearance.colorIntensity}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    appearance: {
                      ...tastingNote.appearance,
                      colorIntensity: selection as ColorIntensity,
                    },
                  });
                }
              }}
            />
            <Dropdown
              label="Color"
              placeholder="Select Color"
              options={getSpecificColorPalate(tastingNote.general.color)}
              value={tastingNote.appearance.color}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    appearance: {
                      ...tastingNote.appearance,
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
              value={tastingNote.nose.condition}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    nose: {
                      ...tastingNote.nose,
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
              value={tastingNote.nose.intensity}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    nose: {
                      ...tastingNote.nose,
                      intensity: selection as AromaIntensity,
                    },
                  });
                }
              }}
            />
            <TextInput
              label="Aroma Characteristics"
              placeholder="Aroma Characteristics"
              value={tastingNote.nose.characteristics}
              multiline={true}
              onChangeText={(text) =>
                setTastingNote({
                  ...tastingNote,
                  nose: { ...tastingNote.nose, characteristics: text },
                })
              }
            />
            <Dropdown
              label="Development"
              placeholder="Select Development"
              options={enumToArray(Development)}
              value={tastingNote.nose.development}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    nose: {
                      ...tastingNote.nose,
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
              value={tastingNote.palate.sweetness}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    palate: {
                      ...tastingNote.palate,
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
              value={tastingNote.palate.acidity}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    palate: {
                      ...tastingNote.palate,
                      acidity: selection as Generic,
                    },
                  });
                }
              }}
            />
            {tastingNote.general.color != wineMainColors.white && (
              <Dropdown
                label="Tannins"
                placeholder="Select Tannins"
                options={enumToArray(Generic)}
                value={tastingNote.palate.tannins}
                onSelect={(selection) => {
                  if (selection) {
                    setTastingNote({
                      ...tastingNote,
                      palate: {
                        ...tastingNote.palate,
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
              value={tastingNote.palate.alcohol}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    palate: {
                      ...tastingNote.palate,
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
              value={tastingNote.palate.body}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    palate: {
                      ...tastingNote.palate,
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
              value={tastingNote.palate.intensity}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    palate: {
                      ...tastingNote.palate,
                      intensity: selection as AromaIntensity,
                    },
                  });
                }
              }}
            />
            <TextInput
              label="Flavor Characteristics"
              placeholder="Flavor Characteristics"
              value={tastingNote.palate.characteristics}
              multiline={true}
              onChangeText={(text) =>
                setTastingNote({
                  ...tastingNote,
                  palate: { ...tastingNote.palate, characteristics: text },
                })
              }
            />
            <Dropdown
              label="Finish"
              placeholder="Select Finish"
              options={enumToArray(Finish)}
              value={tastingNote.palate.finish}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    palate: {
                      finish: selection as Finish,
                      ...tastingNote.palate,
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
              value={tastingNote.conclusion.qualityLevel}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    conclusion: {
                      ...tastingNote.nose,
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
              value={tastingNote.conclusion.readinessLevel}
              onSelect={(selection) => {
                if (selection) {
                  setTastingNote({
                    ...tastingNote,
                    conclusion: {
                      ...tastingNote.nose,
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
