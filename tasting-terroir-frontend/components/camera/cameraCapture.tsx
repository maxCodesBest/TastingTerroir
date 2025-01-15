import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraCapture(props: {
  captureHandler: (newUri: string, base64: string) => void;
  skipHnadler: () => void;
}) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

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
