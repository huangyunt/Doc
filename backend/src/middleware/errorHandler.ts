import { URL } from "../doc.config";
export default function errorHandler(err, req, res, next) {
    console.log("error");

    if (err.name === "UnauthorizedError") {
        return res.redirect(307, `${URL}/login`);
    }
    // 抛出的错误可以附带 status 字段，代表 http 状态码
    // 若没有提供，则默认状态码为 500，代表服务器内部错误
    res.status(err.status || 500);
    res.send({ error: err.message });
}
