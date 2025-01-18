import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CameraCapture(props: {
  captureHandler: (newUri: string, base64: string) => void;
  skipHnadler: () => void;
}) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const onAlbumSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
      base64: true,
    });

    if (!result.canceled && result.assets[0].base64) {
      props.captureHandler(result.assets[0].uri, result.assets[0].base64);
    }
  };

  if (!permission) {
    // TODO - Camera permissions are still loading, add loader
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const onCapture = async () => {
    if (cameraRef.current) {
      await cameraRef.current
        .takePictureAsync({ base64: true, quality: 0 })
        .then((pictureData) => {
          pictureData && pictureData.base64
            ? props.captureHandler(pictureData.uri, pictureData.base64)
            : new Error("TODO - better error handling here");
        });
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={"back"}
        ref={cameraRef}
        ratio="1:1"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={props.skipHnadler}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onCapture}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onAlbumSelection}>
            <Text style={styles.text}>From Album</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
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
