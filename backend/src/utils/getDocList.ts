import { DocsItemCode } from "../status-code/index";
import { getAccountByJwt } from "./getAccountByJwt";
const inspirecloud = require("@byteinspire/inspirecloud-api");

export const getDocList = async (jwt: string) => {
    const DocListTable = inspirecloud.db.table("doc-list");
    // 根据 Jwt 获取账号
    const account = await getAccountByJwt(jwt);
    const docList = await DocListTable.where({ account }).find();
    const list = docList.map((item) => item.docToken);
    return {
        code: DocsItemCode.Success,
        result: "Get list successful",
        list: list,
    };
};
