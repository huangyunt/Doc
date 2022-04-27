import { Router } from "express";
import { addDocument } from "../utils/addDocument";
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
workspaceRouter.post("/add", async (req, res) => {
    const { authorization } = req.headers;
    const jwt = authorization?.split(" ")[1];
    const { title } = req.body;
    const response = await addDocument(
        jwt as string,
        title as string
    );
    res.send(response);
});
export default workspaceRouter;
