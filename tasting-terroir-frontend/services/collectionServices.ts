import { ICollection, ICollectionTitles } from "@/interfaces/ICollection";
import { getToken } from "./authServices";

export async function getAllUserCollections(
  userId: string
): Promise<ICollection[] | undefined> {
  const token = getToken(userId);
  fetch(`http://localhost:2904/collections/getAllUserCollections/${userId}`, {
    //maxsays add return here to actually return collections
    method: "GET",
    headers: {
      authorization: token!,
    },
  }) //TODO .env consts
    .then((response) => {
      if (response.status == 200) {
        console.log(
          "maxsays get all collections response body is - ",
          response.body
        );
        return response.body;
      } else {
        console.error(
          "res status is -",
          response.status,
          " and res body is -",
          response.body
        );
      }
    })
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
  return; //maxsays remove this after testing
}

export async function getAllUserCollectionTitles(
  userId: string
): Promise<ICollectionTitles[] | undefined> {
  const token = getToken(userId);
  fetch(
    `http://localhost:2904/collections/getAllUserCollectionTitles/${userId}`,
    {
      //maxsays add return here to actually return collections
      method: "GET",
      headers: {
        authorization: token!,
      },
    }
  ) //TODO .env consts
    .then((response) => {
      if (response.status == 200) {
        console.log(
          "maxsays get all collection titles response body is - ",
          response.body
        );
        return response.body;
      } else {
        console.error(
          "res status is -",
          response.status,
          " and res body is -",
          response.body
        );
      }
    })
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
  return; //maxsays remove this after testing
}
