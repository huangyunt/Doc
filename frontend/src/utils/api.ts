import { URL } from "./url";
export const authenAccount = async (textData) => {
  try {
    const res = await fetch(URL + "/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Register request failed", error);
  }
};

export const createAccount = async (textData) => {
  try {
    const res = await fetch(URL + "/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: textData, // body data type must match "Content-Type" header
    });
    return await res.json();
  } catch (error) {
    console.log("Login request failed", error);
  }
};
