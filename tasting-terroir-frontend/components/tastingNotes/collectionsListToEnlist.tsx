import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ICollectionTitles } from "@/interfaces/ICollection";

type ItemProps = {
  item: ICollectionTitles;
  onPress: () => void;
  isChosen: boolean;
  isDisabled: boolean;
};

const Item = ({ item, onPress, isChosen, isDisabled }: ItemProps) => (
  <TouchableOpacity
    disabled={isDisabled}
    onPress={onPress}
    style={[styles.item]}
  >
    <Switch
      trackColor={{ false: "#3e3e3e", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onPress}
      value={isChosen}
      disabled={isDisabled}
    />
    <Text style={[styles.title]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function CollectionsListToEnlist(props: {
  collections?: ICollectionTitles[];
  updateList: (collectionId: string[]) => void;
}) {
  const [chosen, setChosen] = useState<string[]>([]);
  function handleSelection(id: string) {
    let newList = chosen.includes(id)
      ? chosen.filter((val) => val != id)
      : [...chosen, id];
    setChosen(newList);
    props.updateList(newList);
  }

  const renderItem = ({ item }: { item: ICollectionTitles }) => {
    if (item.title == "My Notes") {
      return (
        <Item
          item={item}
          onPress={() => {}}
          isChosen={true}
          isDisabled={true}
        />
      );
    } else {
      return (
        <Item
          item={item}
          onPress={() => {
            handleSelection(item.id);
          }}
          isChosen={chosen.includes(item.id)}
          isDisabled={false}
        />
      );
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.collections}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 50 : 50,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#00B4D8",
  },
  title: {
    fontSize: 32,
    marginLeft: 20,
  },
});
