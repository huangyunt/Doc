import { saveDocInfo } from "./saveDocInfo";
import { getAccountByJwt } from "./getAccountByJwt";
const inspirecloud = require("@byteinspire/inspirecloud-api");
import { v1 as uuidv1 } from "uuid";
import { CreateDocCode } from "../status-code";
export const addDocument = async (jwt: string, title: string) => {
    // 通过 uuid 新建文档的唯一 token
    const docToken = uuidv1();
    // 获取数据表表
    const DocListTable = inspirecloud.db.table("doc-list");
    // 根据 Jwt 获取账号
    const account = await getAccountByJwt(jwt);
    const docItem = DocListTable.create({ account, docToken });
    try {
        await DocListTable.save(docItem);
        const { createTime } = await saveDocInfo(docToken, title);
        return {
            code: CreateDocCode.Success,
            result: "Success to create doc",
            docInfo: {
                docToken,
                createTime,
            },
        };
    } catch (error) {
        return {
            code: CreateDocCode.Fail,
            result: "Fail to create doc",
        };
    }
};
