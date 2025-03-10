import { ICollection, ICollectionTitles } from "@/interfaces/ICollection";
import { getToken } from "./authServices";
import { BACKEND_PORT } from "./config";

export async function getAllUserCollections(
  userId: string
): Promise<ICollection[]> {
  const token = getToken(userId);
  return await fetch(
    `${BACKEND_PORT}/collections/getAllUserCollections/${userId}`,
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
    `${BACKEND_PORT}/collections/getAllUserCollectionTitles/${userId}`,
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

export async function createNewCollection(
  userId: string,
  userName: string,
  collectionName: string
): Promise<ICollection> {
  const token = getToken(userId);
  const reqBody = JSON.stringify({
    title: collectionName,
    participantNames: [userName],
  });

  return await fetch(`${BACKEND_PORT}/collections/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token!,
    },
    body: reqBody,
  }) //TODO .env consts
    .then(async (response) => {
      if (response.status == 201) {
        console.log("new collection created successfully");
        const res = await response.json();
        return res;
      }
      console.error(
        "res status is -",
        response.status,
        " and res body is -",
        response.body
      );
    })
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
}
