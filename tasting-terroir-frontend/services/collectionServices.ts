import { ICollection, ICollectionTitles } from "@/interfaces/ICollection";
import { getToken } from "./authServices";

export async function getAllUserCollections(
  userId: string
): Promise<ICollection[] | undefined> {
  const token = getToken(userId);
  return await fetch(
    `http://localhost:2904/collections/getAllUserCollections/${userId}`,
    {
      method: "GET",
      headers: {
        authorization: token!,
      },
    }
  ) //TODO .env consts
    .then(async (response) => {
      if (response.status == 200) {
        return await response.json();
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
}

export async function getAllUserCollectionTitles(
  userId: string
): Promise<ICollectionTitles[] | undefined> {
  const token = getToken(userId);
  return fetch(
    `http://localhost:2904/collections/getAllUserCollectionTitles/${userId}`,
    {
      method: "GET",
      headers: {
        authorization: token!,
      },
    }
  ) //TODO .env consts
    .then(async (response) => {
      if (response.status == 200) {
        return await response.json();
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
}
