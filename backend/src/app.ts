import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/UserRouter";
import DocRouter from "./routes/DocRouter";
import WorkspaceRouter from "./routes/WorkspaceRouter";
import checkJwt from "./routes/CheckJwt";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

/**
 * JWT验证
 */
app.use(checkJwt);

/**
 * 业务路由
 */
app.use("/user", UserRouter);
app.use("/workspace", WorkspaceRouter);
app.use("/doc", DocRouter);

// 错误处理
app.use(errorHandler);

// 导出 Express 对象
module.exports = app;
