import CollectionCard from "@/components/collections/collectionCard";
import CreateCollection from "@/components/collections/createCollection";
import MainButton from "@/components/buttons/mainButton";
import { getAllUserCollections } from "@/services/collectionServices";
import useUserStore from "@/stores/user";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import { ICollection } from "@/interfaces/ICollection";

export default function Collections() {
  const [collections, setCollections] = useState<ICollection[]>();
  const [isRelevant, setIsRelevant] = useState(false);

  const userStore = useUserStore();

  const getCollections = async () => {
    //TODO - add loading machanism and loading screen etc..
    const userCollections = await getAllUserCollections(userStore.tokenKey!);
    if (userCollections[0].noteIds?.length != 0) {
      setIsRelevant(true);
      setCollections(userCollections);
    }
  };

  const renderCollection = ({ item }: { item: ICollection }) => {
    return <CollectionCard key={item._id} collection={item} />;
  };

  const updateNewCollection = (newCollection: ICollection) => {
    setCollections([...collections!, newCollection]);
  };

  useEffect(() => {
    getCollections();
  }, []);

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
            icon={{ name: "wine-glass-alt", type: "font-awesome-5" }}
          />
        </View>
      )}
      {isRelevant && collections && (
        <>
          <SafeAreaView style={styles.centeredView}>
            <FlatList
              data={collections}
              keyExtractor={(collection) => collection._id}
              renderItem={renderCollection}
            />
          </SafeAreaView>
          <View style={styles.stickyButton}>
            <CreateCollection updateCollectionList={updateNewCollection} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stickyButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
