import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { PaperProvider, Button } from "react-native-paper";

export default function Index() {
  //TODO - this entire file is gonna be deleted and re-written in the next task so no need to clean it
  const [data, setData] = useState("noder");

  const getData = async () => {
    fetch(
      "http://localhost:2904/testableController/get/67029cd249e0573185b16d2a"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.text);
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
