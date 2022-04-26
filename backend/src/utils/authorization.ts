import jwt from "jsonwebtoken";
import { LoginCode } from "../status-code";
const inspirecloud = require("@byteinspire/inspirecloud-api");

const secretKey = "secretKey";

// 生成token
export const generateToken = function (payload) {
    const { account } = payload;
    const jsonwebtoken = jwt.sign(payload, secretKey, {
        expiresIn: 60 * 60,
    });
    const token = "Bearer " + jsonwebtoken;
    saveToken(jsonwebtoken, account);
    return token;
};

const saveToken = async (token, account) => {
    const JwtToAccountTable = inspirecloud.db.table("jwt-to-account");
    const item = JwtToAccountTable.create({ jwt: token, account });
    await JwtToAccountTable.save(item);
};

// 验证token
export const verifyToken = function (req, res, next) {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(11);
    if (token) {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                console.log("verify error", err);
                return res.send({
                    code: LoginCode.WrongToken,
                    msg: "token无效，重新登录",
                });
            }
            console.log("verify decoded", decoded);
            return res.send({
                code: LoginCode.RightToken,
                msg: "token验证成功，返回个人中心页面",
            });
        });
    } else {
        res.redirect(307, "/login");
    }
};
