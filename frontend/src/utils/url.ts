const env = process.env.NODE_ENV;
const DevURL = "http://localhost:8080";
const ProdURL = "https://qci1u3.app.cloudendpoint.cn";
export const URL = env === "development" ? DevURL : ProdURL;
