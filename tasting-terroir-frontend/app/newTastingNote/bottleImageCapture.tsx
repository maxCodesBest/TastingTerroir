import CameraApproval from "@/components/camera/cameraApproval";
import CameraCapture from "@/components/camera/cameraCapture";
import useTastingNotesStore from "@/stores/TastingNote";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ImageManipulator, SaveFormat } from "expo-image-manipulator";

export default function BottleImageCapture() {
  const [pictureData, setPictureData] = useState<
    { uri: string; base64: string } | undefined
  >();
  const note = useTastingNotesStore();
  const router = useRouter();

  const continueToNextPage = () => {
    if (note.isBlindTaste) {
      router.push("/newTastingNote/collectionsToEnlistSelection");
    } else {
      router.push("/newTastingNote/wineTypeSelection");
    }
  };

  const captureHandler = (uri: string, base64: string) => {
    setPictureData({ uri, base64 });
  };

  const retakeHandler = () => {
    setPictureData(undefined);
  };

  const approvalHandler = async () => {
    if (pictureData?.uri) {
      const manipulationResult = await ImageManipulator.manipulate(
        pictureData.uri
      )
        .resize({
          width: 250,
          height: 250,
        })
        .renderAsync();

      const compressedPic = await manipulationResult.saveAsync({
        base64: true,
        format: SaveFormat.JPEG,
      });

      note.updateNote({
        ...note,
        bottleInfo: {
          ...note.bottleInfo,
          image: "data:image/jpeg;base64," + compressedPic.base64,
        },
      });

      continueToNextPage();
    }
  };

  return (
    <>
      {!pictureData && (
        <CameraCapture
          captureHandler={captureHandler}
          skipHnadler={continueToNextPage}
        />
      )}
      {pictureData && (
        <CameraApproval
          uri={pictureData.uri}
          retakeHandler={retakeHandler}
          approveHandler={approvalHandler}
        />
      )}
    </>
  );
}
