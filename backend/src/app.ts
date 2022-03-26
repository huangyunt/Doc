// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import { create, RegisterCode } from "./utils/createAccount";

const app = express();
app.use(bodyParser.urlencoded());
// 注册接口
app.post("/register", async (req, res) => {
    console.log("@@", req.body);
    const { account, password } = req.body;
    const { code, result } = await create(account, password);
    res.set({
        // "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
    });
    res.send(result);
    // res.sendStatus(code);
});

// 请求体 parse 中间件，用于 parse json 格式请求体
app.use(express.json());

// 若无匹配业务路由，则匹配 404 路由，代表访问路径不存在
app.use(notFound);

app.use(errorHandler);

function notFound(req, res) {
    res.status(404);
    res.send({
        error: "not found",
    });
}

function errorHandler(err, req, res, next) {
    // 抛出的错误可以附带 status 字段，代表 http 状态码
    // 若没有提供，则默认状态码为 500，代表服务器内部错误
    res.status(err.status || 500);
    res.send({ error: err.message });
}

// 导出 Express 对象
module.exports = app;
