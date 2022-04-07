export const saveToken = (jwtToken) => {
  const token = jwtToken.split(" ")[1];
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token") || "";
};
