import { StyleSheet, View, Pressable, Text } from "react-native";
import { PaperProvider, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import MainButton from "@/components/mainButton";

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
        <MainButton
          rerouthPath="/screens/newTastingNote"
          text="Add a new tasting note"
          icon="glass-wine"
        />
        <MainButton
          rerouthPath="/screens/collections"
          text="Collections"
          icon="bottle-wine"
        />
        <MainButton
          rerouthPath="/screens/generalInformation"
          text="General information"
          icon="information"
        />
      </View>
    </PaperProvider>
  );
}
