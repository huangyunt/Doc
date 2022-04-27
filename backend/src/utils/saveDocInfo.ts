const inspirecloud = require("@byteinspire/inspirecloud-api");
export const saveDocInfo = async (
    docToken: string,
    docTitle: string
) => {
    const docInfoTable = inspirecloud.db.table("doc-info");
    const item = docInfoTable.create({
        docToken,
        title: docTitle,
    });
    await docInfoTable.save(item);
    const { createAt } = await docInfoTable
        .where({ docToken })
        .findOne();

    return {
        createTime: createAt,
    };
};
