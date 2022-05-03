export const saveToken = (jwtToken) => {
  const token = jwtToken.split(" ")[1];
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("token") || "";
  return token;
};
