import { ICollection } from "@/interfaces/ICollection";
import { useRouter } from "expo-router";
import useCollectionStore from "@/stores/collection";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, Card } from "@rneui/themed";

const fullImageHeight = 150;
const fullImageWidth = 150;
const partialImageheight = 75;
const partialImageWidth = 75;

function generateProfileImages(
  images?: string[]
): React.JSX.Element | React.JSX.Element[] {
  if (!images || images.length == 0) {
    return (
      <Card.Image
        style={{ padding: 0, height: fullImageHeight, width: fullImageWidth }}
        source={require("../../assets/images/defaultWineImage.jpg")}
      />
    );
  }
  if (images.length === 4) {
    const ProfileImages = images.map((imageUrl, index) => {
      return (
        <Card.Image
          key={index}
          style={{
            padding: 0,
            height: partialImageheight,
            width: partialImageWidth,
          }}
          source={{
            uri: imageUrl,
          }}
        />
      );
    });
    return ProfileImages;
  }
  return (
    <Card.Image
      style={{ padding: 0, height: fullImageHeight, width: fullImageWidth }}
      source={{
        uri: images[0],
      }}
    />
  );
}

export default function CollectionCard(props: { collection: ICollection }) {
  const router = useRouter();
  const collectionStore = useCollectionStore();

  const profileImages = generateProfileImages(props.collection.profileImages);

  const handleClick = () => {
    collectionStore.updateCollection(props.collection.noteIds!);
    router.push("/collections/singleCollection");
  };
  //TODO - image should extend to entire card body size
  return (
    <Pressable onPress={handleClick}>
      <Card containerStyle={{ width: "100%" }}>
        <Card.Title>{props.collection.title}</Card.Title>
        <Card.Divider />
        <View
          style={{
            height: fullImageHeight,
            width: fullImageWidth,
            display: "flex",
            flexWrap: "wrap",
            alignSelf: "center",
          }}
        >
          {profileImages}
        </View>
        <Text style={styles.name}>{props.collection.participantNames}</Text>
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
