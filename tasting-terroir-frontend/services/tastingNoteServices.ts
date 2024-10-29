import TastingNote from "@/objects/TastingNote";

export async function createTastingNote(newNote: TastingNote): Promise<void> {
  fetch("http://localhost:2904/tastingNotes/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  }) //TODO .env consts
    .then((response) =>
      response.status == 201
        ? console.log("new note created successfully")
        : console.error(
            "new note WASNT created successfully, something weird happend, check it"
          )
    )
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
}
