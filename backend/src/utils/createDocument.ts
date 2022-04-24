const inspirecloud = require("@byteinspire/inspirecloud-api");
import { v1 as uuidv1 } from "uuid";
import { CreateDocCode } from "../status-code";
export const createDocument = async (token) => {
    // 通过 uuid 新建文档的唯一 token
    const id = uuidv1();
    // 获取数据表表
    const AccountTable = inspirecloud.db.table("document");
    const docItem = AccountTable.create({ token, docToken: id });
    try {
        await AccountTable.save(docItem);
        return {
            code: CreateDocCode.Success,
            result: "Success to create doc",
        };
    } catch (error) {
        return {
            code: CreateDocCode.Fail,
            result: "Fail to create doc",
        };
    }
};
