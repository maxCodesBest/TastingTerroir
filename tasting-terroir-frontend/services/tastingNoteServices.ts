import { ITastingNote } from "@/interfaces/ITastingNote";
import { getToken } from "./authServices";
import { ICollectionTitles } from "@/interfaces/ICollection";

export async function createTastingNote(
  newNote: ITastingNote,
  tokenKey: string,
  collectionsToEnlist?: ICollectionTitles[]
): Promise<void> {
  const token = getToken(tokenKey);
  const reqBody =
    JSON.stringify(newNote) && JSON.stringify(collectionsToEnlist);

  fetch("http://localhost:2904/tastingNotes/create", {
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
