import { View } from "react-native";
import MainButton from "@/components/mainButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainButton
        rerouthPath="/newTastingNote"
        text="Add a new tasting note"
        icon="glass-wine"
      />
      <MainButton
        rerouthPath="/collections"
        text="Collections"
        icon="bottle-wine"
      />
      <MainButton
        rerouthPath="/generalInformation"
        text="General information"
        icon="information"
      />
      <MainButton rerouthPath="/auth" text="Auth" />
    </View>
  );
}
