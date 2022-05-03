import { DocsItemCode } from "../status-code/index";
import { getAccountByJwt } from "./getAccountByJwt";
const inspirecloud = require("@byteinspire/inspirecloud-api");

export const getDocList = async (jwt: string) => {
    const DocListTable = inspirecloud.db.table("doc-list");
    const DocInfoTable = inspirecloud.db.table("doc-info");
    // 根据 Jwt 获取账号
    const account = await getAccountByJwt(jwt);
    const docList = await DocListTable.where({ account }).find();
    const list = docList.map((item) => item.docToken);
    const docsInfo = [];
    for (let token of list) {
        const docInfo = await DocInfoTable.where({
            docToken: token,
        }).find();
        const { docToken, title, imgURL, createdAt } = docInfo;
        // @ts-ignore
        docsInfo.push({
            docToken,
            title,
            imgURL,
            createTime: createdAt,
        });
    }
    return {
        code: DocsItemCode.Success,
        result: "Get list successful",
        list: docsInfo,
    };
};
