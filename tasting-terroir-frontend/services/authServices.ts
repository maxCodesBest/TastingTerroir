import User from "@/objects/user";
// import * as SecureStore from "expo-secure-store";

export async function createNewUser(user: User): Promise<void> {
  fetch("http://localhost:2904/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }) //TODO .env consts
    .then(async (response) => ({
      body: await response.json(),
      status: response.status,
    }))
    .then(async (response) => {
      if (response.status == 201) {
        await saveToken(response.body.newUserId, response.body.jwt);
        console.log("new user created successfully");
        const maxsays = await getToken(response.body.newUserId);
        console.log("we got back - ", maxsays);
      } else {
        console.error(
          "new user WASNT created successfully, something weird happend, check it"
        );
      }
    })
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
}

function saveToken(key: string, value: string) {
  // SecureStore.setItem(key, value);
}

function getToken(key: string) {
  // return SecureStore.getItem(key);
} //TODO - error handling for when no token exists with this key
