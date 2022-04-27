const inspirecloud = require("@byteinspire/inspirecloud-api");
export const getAccountByJwt = async (jwt) => {
    const JwtToAccountTable = inspirecloud.db.table("jwt-to-account");
    const { account } = await JwtToAccountTable.where({
        jwt,
    }).findOne();
    return account;
};
