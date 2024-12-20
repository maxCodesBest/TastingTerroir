import { ICollection } from "@/interfaces/ICollection";
import { getAllUserCollections } from "@/services/collectionServices";
import useUserStore from "@/stores/user";
import { useState } from "react";
import { View, Text } from "react-native";

export default function Collections() {
  const [collections, setCollections] = useState<ICollection[]>();
  const getCollections = async (userId: string) => {
    if (!collections) {
      //TODO - add loading machanism and loading screen etc..
      const userCollections = await getAllUserCollections(userId);
      if (userCollections) {
        setCollections(userCollections);
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
      {!collections && <Text>You Don't have any collection yet :(</Text>}
      {collections && <Text>You Do have collection :)</Text>}
    </View>
  );
}
