const prisma = require("../prisma.js")

exports.createComment = async (newComment) => {
    const resComment = await prisma.comment.create({
        data: newComment
    })
    if (resComment === null) {
        throw Error
    }
    return resComment
}