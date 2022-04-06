import jwt from "jsonwebtoken";
const secretKey = "secretKey";

// 生成token
export const generateToken = function (payload) {
    const token =
        "Bearer " +
        jwt.sign(payload, secretKey, {
            expiresIn: 60 * 60,
        });
    return token;
};

// 验证token
export const verifyToken = function (req, res, next) {
    const token = req.headers?.authorization?.split(" ")[1];
    if (token) {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                console.log("verify error", err);
                return res.send({
                    code: "303",
                    msg: "token无效，重新登录",
                });
            }
            console.log("verify decoded", decoded);
            return res.send({
                code: "204",
                msg: "token验证成功，返回个人中心页面",
            });
            next();
        });
    } else {
        res.send({
            error: "To login",
        });
    }
};
