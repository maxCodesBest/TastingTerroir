import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { ITastingNote } from "@/interfaces/ITastingNote";

export default function TastingNoteCard(props: { note: ITastingNote }) {
  //TODO - image should extend to entire card body size
  const generalInfo =
    props.note.general.wineType + ", " + props.note.general.color;
  return (
    <Card style={{ height: 250, width: 250 }}>
      <Card.Title
        title="maxsays wine name and vintage"
        subtitle="producer name"
      />
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
