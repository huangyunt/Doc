import { Router } from "express";
import { authenAccount } from "../utils/authAccount";
import { generateToken } from "../utils/authorization";
import { createAccount } from "../utils/createAccount";

const userRouter = Router();
userRouter.post("/login", async (req, res) => {
    console.log("@@", req.body);
    const { account, password } = req.body;
    const response = await authenAccount(account, password);
    res.set({
        // "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
    });
    const token = generateToken({ account });
    res.send({ ...response, token });
});

// 注册接口
userRouter.post("/register", async (req, res) => {
    console.log("@@", req.body);
    const { account, password } = req.body;
    const response = await createAccount(account, password);
    res.set({
        // "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
    });
    res.send(response);
});

export default userRouter;
