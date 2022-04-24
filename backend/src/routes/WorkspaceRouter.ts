import { Router } from "express";
import { createDocument } from "../utils/createDocument";

const workspaceRouter = Router();
// workspaceRouter.get("/workspace", async (req, res) => {
//     const { authorization } = req.headers;
//     const jwt = authorization?.split(" ")[1];
//     const response = await createDocument(jwt);
//     res.send(response);
// });

// 注册接口
// workspaceRouter.post("/register", async (req, res) => {
//     console.log("@@", req.body);
//     const { account, password } = req.body;
//     const response = await createAccount(account, password);
//     res.send(response);
// });
export default workspaceRouter;
