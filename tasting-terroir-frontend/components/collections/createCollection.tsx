import { createNewCollection } from "@/services/collectionServices";
import useUserStore from "@/stores/user";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import FormTextInput from "../inputs/formTextInput";
import { ICollection } from "@/interfaces/ICollection";

export default function CreateCollection(props: {
  updateCollectionList: (newCollection: ICollection) => void;
}) {
  const userStore = useUserStore();

  const [modalVisible, setModalVisible] = useState(false);
  const [collectionName, setCollectionName] = useState("");

  const closeModal = () => {
    setCollectionName("");
    setModalVisible(false);
  };

  const handleCreation = async () => {
    if (collectionName) {
      const newCollection = await createNewCollection(
        userStore.tokenKey!,
        userStore.name!,
        collectionName
      );
      props.updateCollectionList(newCollection);
      closeModal();
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create a new collection</Text>
            <FormTextInput
              label="New collection name"
              onChangeHandler={(text) => {
                setCollectionName(text);
              }}
            />
            <Pressable
              style={[styles.button, styles.buttonCreate]}
              onPress={handleCreation}
            >
              <Text style={styles.textStyle}>Create!</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeModal}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create a new collection</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonCreate: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
