import { Text, View } from "react-native";
import { PaperProvider, Button } from "react-native-paper";

export default function Index() {
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
          icon="heart"
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          Maxsays
        </Button>
      </View>
    </PaperProvider>
  );
}
