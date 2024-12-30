import TastingNoteCard from "@/components/collections/tastingNoteCard";
import { ITastingNote } from "@/interfaces/ITastingNote";
import { getNotesByIds } from "@/services/tastingNoteServices";
import useCollectionStore from "@/stores/collection";
import useUserStore from "@/stores/user";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function SingleCollection() {
  const userStore = useUserStore();
  const collectionStore = useCollectionStore();

  const [notes, setNotes] = useState<ITastingNote[]>();
  const getNotes = async () => {
    //TODO - add loading machanism and loading screen etc..
    const collectionNotes = await getNotesByIds(
      collectionStore.noteIds!,
      userStore.tokenKey!
    );
    if (collectionNotes) {
      setNotes(collectionNotes);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const renderNotes = ({ item }: { item: ITastingNote }) => {
    return <TastingNoteCard key={item._id} note={item} />;
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <FlatList
        data={notes}
        keyExtractor={(note) => note._id}
        renderItem={renderNotes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
