import { View } from "react-native";
import MainButton from "@/components/mainButton";

export default function GeneralInformation() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainButton
        rerouthPath="/" //TODO - will be replaced with smart pages from the backend
        text="Regions"
        icon="forest"
      />
      <MainButton
        rerouthPath="/" //TODO - will be replaced with smart pages from the backend
        text="Grape Varieties"
        icon="fruit-grapes"
      />
      <MainButton
        rerouthPath="/" //TODO - will be replaced with smart pages from the backend
        text="General Knowledge"
        icon="information"
      />
    </View>
  );
}
