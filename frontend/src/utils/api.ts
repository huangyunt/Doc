import { URL } from "./url";
const header = {
  method: "POST",
  mode: "cors" as RequestMode,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  authenAccount: localStorage.getItem(""),
};
export const authenAccount = async (textData) => {
  try {
    const res = await fetch(URL + "api/user/login", {
      ...header,
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Register request failed", error);
  }
};

export const createAccount = async (textData) => {
  try {
    const res = await fetch(URL + "api/user/register", {
      ...header,
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Login request failed", error);
  }
};

export const getDocItems = async () => {
  try {
    const res = await fetch(URL + "api/doc/");
    return await res.json();
  } catch (error) {
    console.log("Create doc failed", error);
  }
};

export const createDoc = async (textData) => {
  try {
    const res = await fetch(URL + "api/doc/create", {
      ...header,
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Create doc failed", error);
  }
};
