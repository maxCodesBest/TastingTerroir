import { ITastingNote } from "@/interfaces/ITastingNote";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Card } from "@rneui/themed";

const fullImageHeight = 150;
const fullImageWidth = 150;

export default function TastingNoteCard(props: { note: ITastingNote }) {
  //TODO - image should extend to entire card body size
  const wineName = props.note.bottleInfo?.name || "Unknown Wine";
  const producerName = props.note.bottleInfo?.producer || "Unknown Producer";
  const vintage = props.note.bottleInfo?.vintage;
  const subtitleText = vintage ? producerName + ", " + vintage : producerName;
  const generalInfo =
    props.note.general.wineType + ", " + props.note.general.color;
  const imageSource = props.note.bottleInfo?.image
    ? { uri: props.note.bottleInfo?.image }
    : require("../../assets/images/defaultWineImage.jpg");

  const handleClick = () => {
    console.log("TODO - edit page");
  };
  return (
    <Pressable onPress={handleClick} style={{ alignItems: "center" }}>
      <Card containerStyle={{ width: "100%" }}>
        <Card.Title>{wineName}</Card.Title>
        <Card.Divider />
        <View
          style={{
            height: fullImageHeight,
            width: fullImageWidth,
            alignSelf: "center",
          }}
        >
          <Card.Image
            style={{
              padding: 0,
              height: fullImageHeight,
              width: fullImageWidth,
            }}
            source={imageSource}
          />
        </View>
        <Text style={styles.name}>{subtitleText}</Text>
        <Text style={styles.name}>{generalInfo}</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
