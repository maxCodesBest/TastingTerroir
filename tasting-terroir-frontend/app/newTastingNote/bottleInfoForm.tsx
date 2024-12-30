import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import useTastingNotesStore from "@/stores/TastingNote";
import { Text } from "@rneui/themed";
import FormTextInput from "@/components/inputs/formTextInput";
import CtaButton from "@/components/buttons/ctaButton";

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
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          padding: 50,
          paddingTop: 75,
        }}
      >
        <Text style={{ alignSelf: "center", fontSize: 40, marginBottom: 50 }}>
          LOG IN
        </Text>
        <View
          style={{
            width: "100%",
            marginTop: 50,
          }}
        >
          <FormTextInput
            label="Wine's name"
            isMultiLine={true}
            onChangeHandler={(text) =>
              note.updateNote({
                ...note,
                bottleInfo: { ...note.bottleInfo, name: text },
              })
            }
          />
          <FormTextInput
            label="Producer"
            isMultiLine={true}
            onChangeHandler={(text) =>
              note.updateNote({
                ...note,
                bottleInfo: { ...note.bottleInfo, producer: text },
              })
            }
          />
          <FormTextInput
            label="Country"
            isMultiLine={true}
            onChangeHandler={(text) =>
              note.updateNote({
                ...note,
                bottleInfo: { ...note.bottleInfo, country: text },
              })
            }
          />
          <FormTextInput
            label="Region"
            isMultiLine={true}
            onChangeHandler={(text) =>
              note.updateNote({
                ...note,
                bottleInfo: { ...note.bottleInfo, region: text },
              })
            }
          />
          <FormTextInput
            label="Vintage"
            maxLength={4}
            onChangeHandler={(text) => {
              const filteredText = text.replace(/[^0-9]/g, "");
              const filteredNumber = Number(filteredText);
              note.updateNote({
                ...note,
                bottleInfo: { ...note.bottleInfo, vintage: filteredNumber },
              });
            }}
          />
          <CtaButton label="Continue" callback={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
}
