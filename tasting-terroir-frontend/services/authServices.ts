import * as SecureStore from "expo-secure-store";

import IUser from "@/interfaces/IUser";

export async function createNewUser(user: IUser): Promise<string> {
  return fetch("http://localhost:2904/auth/signup", {
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
        saveToken(response.body.newUserId, response.body.jwt);
        console.log("new user created successfully");
        return response.body.newUserId;
      } else {
        console.error("res body is - ", response.body);
        console.error("res status is - ", response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
}
export async function userLogIn(user: IUser): Promise<string> {
  return fetch("http://localhost:2904/auth/login", {
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
    .then((response) => {
      if (response.status == 200) {
        saveToken(response.body.userId, response.body.jwt);
        console.log("user fetched successfully");
        return response.body.userId;
      } else {
        console.error("res body is - ", response.body);
        console.error("res status is - ", response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    }); //TODO real error handling
}

export async function tokenValidation(tokenKey: string): Promise<boolean> {
  const token = getToken(tokenKey);

  if (!token) {
    return false;
  }

  return fetch("http://localhost:2904/auth/validateAuth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  })
    .then(async (response) => ({
      body: await response.json(),
      status: response.status,
    }))
    .then(async (response) => {
      if (response.status == 200) {
        console.log("token validated successfully");
        console.log("validation got back - ", response.body);
        return true;
      } else {
        console.error("res body is - ", response.body);
        console.error("res status is - ", response.status);
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
      return false;
    }); //TODO real error handling
}

export async function deleteToken(tokenKey: string) {
  await SecureStore.deleteItemAsync(tokenKey);
}

function saveToken(key: string, value: string) {
  SecureStore.setItem(key, value);
}

export function getToken(key: string) {
  return SecureStore.getItem(key);
} //TODO - error handling for when no token exists with this key
