const inspirecloud = require("@byteinspire/inspirecloud-api");
const create = async (account, password) => {
    // 使用 inspirecloud.db.table 获取数据表
    const AccountTable = inspirecloud.db.table("account");
    const findOne = await AccountTable.where({ account }).findOne();
    console.log("** ", findOne);
    if (!findOne) {
        // 使用 save 方法新增一条记录
        const result = await AccountTable.save({ account, password });
        return { result };
    } else {
        return "Account existed";
    }
};
module.exports = {
    create,
};
export {};
