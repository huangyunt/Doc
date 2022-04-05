const inspirecloud = require("@byteinspire/inspirecloud-api");
import { v1 as uuidv1 } from "uuid";
export enum RegisterCode {
    Existed = 0,
    Success,
}
export const createDocument = async () => {
    const id = uuidv1();
    // 使用 inspirecloud.db.table 获取数据表
    const AccountTable = inspirecloud.db.table("document");
    const findOne = await AccountTable.where({}).findOne();
};
