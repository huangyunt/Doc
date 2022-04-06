import { secretKey } from "./../doc.config";
import expressJwt from "express-jwt";
export default expressJwt({
    secret: secretKey,
    algorithms: ["HS256"],
}).unless({
    path: ["/login", "/register"], // 指定路径不经过 Token 解析
});
