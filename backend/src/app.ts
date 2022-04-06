import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/UserRouter";
import DocRouter from "./routes/DocRouter";
import WorkspaceRouter from "./routes/WorkspaceRouter";
import checkJwt from "./routes/CheckJwt";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(bodyParser.urlencoded());

/**
 * JWT验证
 */
app.use(checkJwt);

/**
 * 业务路由
 */
app.use("/api/user", UserRouter);
app.use("/api/workspace", WorkspaceRouter);
app.use("/api/doc", DocRouter);

// 错误处理
app.use(errorHandler);

// 导出 Express 对象
module.exports = app;
