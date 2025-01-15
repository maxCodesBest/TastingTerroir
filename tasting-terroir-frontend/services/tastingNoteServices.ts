import { ITastingNote, INewTastingNote } from "@/interfaces/ITastingNote";
import { getToken } from "./authServices";
import { BACKEND_PORT } from "./config";

export async function createTastingNote(
  newNote: INewTastingNote,
  tokenKey: string,
  collectionsToEnlist: string[]
): Promise<void> {
  //TODO - the right thing to do is -  "const collectionIds = collectionsToEnlist?.map((value) => value.id);" but thats in the next feature
  const token = getToken(tokenKey);
  const reqBody = JSON.stringify({
    note: newNote,
    collectionsToEnlist: collectionsToEnlist,
  });

  fetch(`${BACKEND_PORT}/tastingNotes/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token!,
    },
    body: reqBody,
  }) //TODO .env consts
    .then((response) =>
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

export async function getNotesByIds(
  noteIds: string[],
  tokenKey: string
): Promise<ITastingNote[]> {
  const token = getToken(tokenKey);
  const reqBody = JSON.stringify({
    _id: noteIds,
  });

  return fetch(`${BACKEND_PORT}/tastingNotes/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token!,
    },
    body: reqBody,
  }) //TODO .env consts
    .then(async (response) => {
      if (response.status == 200) {
        console.log("notes fetched successfully");
        const res = await response.json();
        return res;
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
