const env = process.env.NODE_ENV;
const DevURL = "http://localhost:3000";
const ProdURL = "https://huangyunt-doc.web.cloudendpoint.cn/";
export const URL = env === "development" ? DevURL : ProdURL;
export const secretKey = "secretKey";
