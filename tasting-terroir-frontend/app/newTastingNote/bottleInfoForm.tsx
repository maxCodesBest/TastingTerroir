import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import useTastingNotesStore from "@/stores/TastingNote";

export default function BottleInfoForm() {
  const note = useTastingNotesStore();
  const router = useRouter();

  const submitHandler = async () => {
    if (note.isBlindTaste) {
      router.push("/newTastingNote/collectionsToEnlistSelection");
    } else {
      router.push("/newTastingNote/wineTypeSelection");
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
          <Text variant="headlineLarge">BOTTLE INFORMATION</Text>
          <View
            style={{
              width: "100%",
              marginTop: 50,
            }}
          >
            <TextInput
              label="Wine's name"
              placeholder="Wine's name"
              value={note.bottleInfo.name}
              multiline={true}
              onChangeText={(text) =>
                note.updateNote({
                  ...note,
                  bottleInfo: { ...note.bottleInfo, name: text },
                })
              }
            />
            <TextInput
              label="Producer"
              placeholder="Prodcer"
              value={note.bottleInfo.producer}
              multiline={true}
              onChangeText={(text) =>
                note.updateNote({
                  ...note,
                  bottleInfo: { ...note.bottleInfo, producer: text },
                })
              }
            />
            <TextInput
              label="Country"
              placeholder="Country"
              value={note.bottleInfo.country}
              multiline={true}
              onChangeText={(text) =>
                note.updateNote({
                  ...note,
                  bottleInfo: { ...note.bottleInfo, country: text },
                })
              }
            />
            <TextInput
              label="Region"
              placeholder="Region"
              value={note.bottleInfo.region}
              multiline={true}
              onChangeText={(text) =>
                note.updateNote({
                  ...note,
                  bottleInfo: { ...note.bottleInfo, region: text },
                })
              }
            />
            <TextInput
              label="Vintage"
              placeholder="Vintage"
              keyboardType="numeric"
              maxLength={4}
              value={note.bottleInfo.vintage?.toString()}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^0-9]/g, "");
                const filteredNumber = Number(filteredText);
                note.updateNote({
                  ...note,
                  bottleInfo: { ...note.bottleInfo, vintage: filteredNumber },
                });
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