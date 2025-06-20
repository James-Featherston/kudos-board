const prisma = require("../prisma.js");

/* Creates a comment in the db */
exports.createComment = async (newComment) => {
  const resComment = await prisma.comment.create({
    data: newComment,
  });
  if (resComment === null) {
    throw Error;
  }
  return resComment;
};
