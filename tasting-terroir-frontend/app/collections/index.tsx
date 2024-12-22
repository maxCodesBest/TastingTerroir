import CollectionCard from "@/components/collections/collectionCard";
import CreateCollection from "@/components/collections/createCollection";
import MainButton from "@/components/mainButton";
import { getAllUserCollections } from "@/services/collectionServices";
import useUserStore from "@/stores/user";
import { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Collections() {
  const [collections, setCollections] = useState<React.JSX.Element[]>();
  const [isRelevant, setIsRelevant] = useState(false);

  const getCollections = async (userId: string) => {
    if (!collections) {
      //TODO - add loading machanism and loading screen etc..
      const userCollections = await getAllUserCollections(userId);
      if (userCollections[0].noteIds?.length != 0) {
        if (userCollections?.length != 0) {
          const collectionCards = userCollections.map((collection) => {
            return (
              <CollectionCard
                key={collection._id}
                collection={collection}
              ></CollectionCard>
            );
          });
          setIsRelevant(true);
          setCollections(collectionCards);
        }
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
      {!isRelevant && (
        <View>
          <Text>You Don't have any tasting notes yet :(</Text>
          <MainButton
            rerouthPath="/newTastingNote"
            text="Create your first tasting note"
            icon="glass-wine"
          />
        </View>
      )}
      {isRelevant && collections && (
        <CreateCollection collections={collections} />
      )}
    </View>
  );
}
