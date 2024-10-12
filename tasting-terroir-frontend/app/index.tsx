import { StyleSheet, View, Pressable, Text } from "react-native";
import { PaperProvider, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={styles.mainButtons}
          icon="glass-wine"
          mode="elevated"
          onPress={() => router.push("/newTastingNote")}
        >
          Add a new tasting note
        </Button>
        <Button
          style={styles.mainButtons}
          icon="bottle-wine"
          mode="elevated"
          onPress={() => router.push("/collections")}
        >
          collections
        </Button>
        <Button
          style={styles.mainButtons}
          icon="information"
          mode="elevated"
          onPress={() => router.push("/generalInformation")}
        >
          General information
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  mainButtons: { marginTop: 40 },
});
