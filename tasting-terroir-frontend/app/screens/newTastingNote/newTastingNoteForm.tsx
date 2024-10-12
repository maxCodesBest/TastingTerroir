import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function NewTastingNoteForm() {
  const data = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{data.type}</Text>
      <Text>{data.color}</Text>
    </View>
  );
}
