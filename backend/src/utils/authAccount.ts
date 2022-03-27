const inspirecloud = require("@byteinspire/inspirecloud-api");
export enum LoginCode {
    Fail = 0,
    Success,
}
export const authenAccount = async (account, password) => {
    // 使用 inspirecloud.db.table 获取数据表
    const AccountTable = inspirecloud.db.table("account");
    const isFound = await AccountTable.where({
        account,
        password,
    }).find();
    return isFound.length
        ? {
              code: LoginCode.Success,
              result: "Login successful",
          }
        : {
              code: LoginCode.Fail,
              result: "Email or password is incorrect",
          };
};
