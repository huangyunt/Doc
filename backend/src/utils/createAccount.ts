const inspirecloud = require("@byteinspire/inspirecloud-api");
export enum RegisterCode {
    Existed = 0,
    Success,
}
export const createAccount = async (account, password) => {
    // 使用 inspirecloud.db.table 获取数据表
    const AccountTable = inspirecloud.db.table("account");
    const findOne = await AccountTable.where({
        account,
    }).findOne();
    console.log("findOne: ", findOne);

    if (!findOne) {
        // 使用 save 方法新增一条记录
        const result = await AccountTable.save({
            account,
            password,
        });
        return {
            code: RegisterCode.Success,
            result,
        };
    } else {
        return {
            code: RegisterCode.Existed,
            result: "Account existed",
        };
    }
};
