import { DocsItemCode } from "../status-code/index";
const inspirecloud = require("@byteinspire/inspirecloud-api");

export const getDocList = async (jwt: string) => {
    const JwtToAccountTable = inspirecloud.db.table("jwt-to-account");
    const DocListTable = inspirecloud.db.table("doc-list");
    const { account } = await JwtToAccountTable.where({
        jwt,
    }).findOne();
    const docList = await DocListTable.where({ account }).find();
    const list = docList.map((item) => item.docToken);
    return {
        code: DocsItemCode.Success,
        result: "Get list successful",
        list: list,
    };
};
