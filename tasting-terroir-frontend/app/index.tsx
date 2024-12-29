import { View } from "react-native";
import MainButton from "@/components/buttons/mainButton";

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
        icon={{ name: "wine-glass-alt", type: "font-awesome-5" }}
      />
      <MainButton
        rerouthPath="/collections"
        text="Collections"
        icon={{ name: "wine-bottle", type: "font-awesome-5" }}
      />
      <MainButton
        rerouthPath="/generalInformation"
        text="General information"
        icon={{ name: "info", type: "font-awesome-5" }}
      />
      <MainButton rerouthPath="/settings/logOut" text="Log Out" />
    </View>
  );
}
