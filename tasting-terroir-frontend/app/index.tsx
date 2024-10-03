import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { PaperProvider, Button } from "react-native-paper";

export default function Index() {
  const [data, setData] = useState("noder");

  const getData = async () => {
    fetch("http://localhost:2904/main/healthcheck")
      .then((response) => response.json())
      .then((json) => {
        setData(json.maxsays);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
          {data}
        </Button>
      </View>
    </PaperProvider>
  );
}
