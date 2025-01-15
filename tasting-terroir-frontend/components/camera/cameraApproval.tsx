import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraApproval(props: {
  uri: string;
  retakeHandler: () => void;
  approveHandler: () => void;
}) {
  return (
    <View style={styles.container}>
      <Image source={props.uri} style={styles.camera} contentFit="fill" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={props.retakeHandler}>
          <Text style={styles.text}>Retake</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.approveHandler}>
          <Text style={styles.text}>Approve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
