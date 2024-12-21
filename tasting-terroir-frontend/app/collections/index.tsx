import CollectionCard from "@/components/collections/collectionCard";
import MainButton from "@/components/mainButton";
import { getAllUserCollections } from "@/services/collectionServices";
import useUserStore from "@/stores/user";
import { useState } from "react";
import { View, Text } from "react-native";

export default function Collections() {
  const [collections, setCollections] = useState<React.JSX.Element[]>();
  const getCollections = async (userId: string) => {
    if (!collections) {
      //TODO - add loading machanism and loading screen etc..
      const userCollections = await getAllUserCollections(userId);
      if (userCollections?.length != 0) {
        const collectionCards = userCollections.map((collection) => {
          return (
            <CollectionCard
              key={collection._id}
              collection={collection}
            ></CollectionCard>
          );
        });
        setCollections(collectionCards);
      }
    }
  };
  const userStore = useUserStore();
  getCollections(userStore.tokenKey!);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!collections && (
        <View>
          <Text>You Don't have any tasting notes yet :(</Text>
          <MainButton
            rerouthPath="/newTastingNote"
            text="Createyour first tasting note"
            icon="glass-wine"
          />
        </View>
      )}
      {collections && <View>{collections}</View>}
    </View>
  );
}
