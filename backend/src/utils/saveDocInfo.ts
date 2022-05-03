const inspirecloud = require("@byteinspire/inspirecloud-api");
export const saveDocInfo = async (
    docToken: string,
    docTitle: string,
    url: string
) => {
    const docInfoTable = inspirecloud.db.table("doc-info");
    const item = docInfoTable.create({
        docToken,
        title: docTitle,
        imgURL: url,
    });
    await docInfoTable.save(item);
    const { createdAt } = await docInfoTable
        .where({ docToken })
        .findOne();

    return {
        createTime: createdAt,
    };
};
