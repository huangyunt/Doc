import { Router } from "express";
import { getDocList } from "../utils/getDocList";
const workspaceRouter = Router();
// 获取文档列表
workspaceRouter.get("/list", async (req, res) => {
    const { authorization } = req.headers;
    const jwt = authorization?.split(" ")[1];
    const response = await getDocList(jwt as string);
    res.send(response);
});

// 注册接口
// workspaceRouter.post("/register", async (req, res) => {
//     console.log("@@", req.body);
//     const { account, password } = req.body;
//     const response = await createAccount(account, password);
//     res.send(response);
// });
export default workspaceRouter;
