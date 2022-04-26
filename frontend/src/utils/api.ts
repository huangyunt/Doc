import { URL } from "./url";
import { getToken } from "./token";
const header = {
  method: "POST",

  mode: "cors" as RequestMode,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer " + getToken(),
  },
};
export const authenAccount = async (textData) => {
  try {
    const res = await fetch(URL + "user/login", {
      ...header,
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Login request failed", error);
  }
};

export const createAccount = async (textData) => {
  try {
    const res = await fetch(URL + "user/register", {
      ...header,
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Register request failed", error);
  }
};

export const getDocItems = async () => {
  try {
    const res = await fetch(URL + "workspace/list", {
      ...header,
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.log("Get doc items failed", error);
  }
};

export const createDoc = async (textData) => {
  try {
    const res = await fetch(URL + "doc/create", {
      ...header,
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Create doc failed", error);
  }
};
