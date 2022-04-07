import { Router } from "express";
import { authenAccount } from "../utils/authAccount";
import { createAccount } from "../utils/createAccount";

const userRouter = Router();

userRouter.post("/login", async (req, res) => {
    console.log("@@", req.body);
    const { account, password } = req.body;
    const response = await authenAccount(account, password);
    res.send(response);
});

// 注册接口
userRouter.post("/register", async (req, res) => {
    console.log("@@", req.body);
    const { account, password } = req.body;
    const response = await createAccount(account, password);
    res.send(response);
});

export default userRouter;
