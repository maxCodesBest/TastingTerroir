import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { ITastingNote } from "@/interfaces/ITastingNote";

export default function TastingNoteCard(props: { note: ITastingNote }) {
  //TODO - image should extend to entire card body size
  const wineName = props.note.bottleInfo?.name || "Unknown Wine";
  const producerName = props.note.bottleInfo?.producer || "Unknown Producer";
  const vintage = props.note.bottleInfo?.vintage;
  const subtitleText = vintage ? producerName + ", " + vintage : producerName;
  const generalInfo =
    props.note.general.wineType + ", " + props.note.general.color;
  return (
    <Card style={{ height: 250, width: 250 }}>
      <Card.Title title={wineName} subtitle={subtitleText} />
      <Card.Content>
        <Text variant="bodyMedium">{generalInfo}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Edit</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});
