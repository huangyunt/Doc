import { secretKey } from "./../doc.config";
import expressJwt from "express-jwt";

//默认情况下，从请求 Headers 的 Authorization 字段来获取 Token 并解析
export default expressJwt({
    secret: secretKey,
    algorithms: ["HS256"],
}).unless({
    path: [
        { url: "/user/login", methods: ["GET", "POST"] },
        { url: "/user/register", methods: ["GET", "POST"] },
    ], // 指定路径不经过 Token 解析
});
