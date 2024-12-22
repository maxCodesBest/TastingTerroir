import { ICollection, ICollectionTitles } from "@/interfaces/ICollection";
import { getToken } from "./authServices";

export async function getAllUserCollections(
  userId: string
): Promise<ICollection[]> {
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

export async function createNewCollection(
  userId: string,
  userName: string,
  collectionName: string
) {
  const token = getToken(userId);
  const reqBody = JSON.stringify({
    title: collectionName,
    participantNames: [userName],
  });

  await fetch(`http://localhost:2904/collections/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token!,
    },
    body: reqBody,
  }) //TODO .env consts
    .then(async (response) =>
      response.status == 201
        ? console.log("new note created successfully")
        : console.error(
            "res status is -",
            response.status,
            " and res body is -",
            response.body
          )
    )
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
}
