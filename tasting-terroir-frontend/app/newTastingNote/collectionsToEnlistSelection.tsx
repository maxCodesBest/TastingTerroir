import { useRouter } from "expo-router";
import useTastingNotesStore from "@/stores/TastingNote";
import useUserStore from "@/stores/user";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ICollectionTitles } from "@/interfaces/ICollection";
import { getAllUserCollectionTitles } from "@/services/collectionServices";
import CollectionsListToEnlist from "@/components/tastingNotes/collectionsListToEnlist";
import { createTastingNote } from "@/services/tastingNoteServices";
import { Text } from "@rneui/themed";
import CtaButton from "@/components/buttons/ctaButton";

//TODO - add loading mechanism until collections are fetched to know if we display this screen or directly create the note and call SubmitHandler()
export default function CollectionsToEnlistSelection() {
  const note = useTastingNotesStore();
  const userStore = useUserStore();
  const router = useRouter();

  const [collections, setCollections] = useState<ICollectionTitles[]>();
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);

  async function submitTastingNote(ids: string[]) {
    await createTastingNote(note, userStore.tokenKey!, ids);
    note.resetNote();
    if (router.canDismiss()) router.dismissAll();
    router.push("/");
  }

  const submitHandler = async () => {
    submitTastingNote(selectedCollections);
  };

  const getCollections = async () => {
    if (!collections) {
      const userCollections = await getAllUserCollectionTitles(
        userStore.tokenKey!
      );
      if (userCollections) {
        const mainCollectionId = userCollections[0].id;
        if (userCollections.length == 1) {
          await submitTastingNote([mainCollectionId]);
          return;
        }
        setCollections(userCollections);
        setSelectedCollections([mainCollectionId]);
      }
    }
  };

  getCollections();

  const updateList = (ids: string[]) => {
    if (!ids.includes(collections![0].id)) {
      ids.push(collections![0].id);
    }
    setSelectedCollections(ids);
  };

  return (
    <>
      <View
        style={{
          alignItems: "center",
          paddingTop: 75,
        }}
      >
        <Text style={{ alignSelf: "center", fontSize: 40, marginBottom: 50 }}>
          COLLECTIONS
        </Text>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {collections && collections.length > 1 && (
            <CollectionsListToEnlist
              collections={collections}
              updateList={updateList}
            />
          )}

          <View style={styles.submit}>
            <CtaButton label="Submit!" callback={submitHandler} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submit: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
