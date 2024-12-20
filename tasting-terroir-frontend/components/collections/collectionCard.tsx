import { StyleSheet } from "react-native";
import { ICollection } from "@/interfaces/ICollection";
import { Card } from "react-native-paper";
import { useRouter } from "expo-router";
import useCollectionStore from "@/stores/collection";

export default function CollectionCard(props: { collection: ICollection }) {
  const router = useRouter();
  const collectionStore = useCollectionStore();

  const handleClick = () => {
    collectionStore.updateCollection(props.collection.noteIds!);
    router.push("/collections/singleCollection");
  };
  //TODO - image should extend to entire card body size
  return (
    <Card style={{ height: 250, width: 250 }} onPress={handleClick}>
      <Card.Title
        title={props.collection.title}
        subtitle={props.collection.participantNames}
      />
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  );
}

const styles = StyleSheet.create({});
