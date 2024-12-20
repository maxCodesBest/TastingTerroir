import TastingNoteCard from "@/components/collections/tastingNoteCard";
import { getNotesByIds } from "@/services/tastingNoteServices";
import useCollectionStore from "@/stores/collection";
import useUserStore from "@/stores/user";
import { useState } from "react";
import { View } from "react-native";

export default function SingleCollection() {
  const userStore = useUserStore();
  const collectionStore = useCollectionStore();

  const [notes, setNotes] = useState<React.JSX.Element[]>();
  const getNotes = async () => {
    if (!notes) {
      //TODO - add loading machanism and loading screen etc..
      const collectionNotes = await getNotesByIds(
        collectionStore.noteIds!,
        userStore.tokenKey!
      );
      if (collectionNotes) {
        const noteCards = collectionNotes.map((note) => {
          return <TastingNoteCard key={note._id} note={note}></TastingNoteCard>;
        });
        setNotes(noteCards);
      }
    }
  };
  getNotes();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>{notes}</View>
    </View>
  );
}
