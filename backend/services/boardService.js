const prisma = require("../prisma.js");

/* Queries the db for all the baords */
exports.getAllBoards = async (filters, limit) => {
  return await prisma.board.findMany({
    take: limit,
    where: {
      category: filters.category,
      title: {
        contains: filters.search,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/* Queries the db for a single board */
exports.getSingleBoard = async (boardId) => {
  const board = await prisma.board.findUnique({
    where: { id: boardId },
  });
  if (board === null) {
    throw Error;
  }
  return board;
};

/* Create a new board in the db */
exports.createBoard = async (newBoard) => {
  const resBoard = await prisma.board.create({
    data: newBoard,
  });
  if (resBoard === null) {
    throw Error;
  }
  return resBoard;
};

/* Deletes a board in the db */
exports.deleteBoard = async (boardId) => {
  const delBoard = await prisma.board.delete({
    where: { id: boardId },
  });
  if (delBoard === null) {
    throw Error;
  }
  return delBoard;
};

/* Gets the cards associated with a board in the db */
exports.getBoardCards = async (boardId) => {
  const cards = await prisma.card.findMany({
    where: { boardId: boardId },
  });
  if (cards === null) {
    throw Error;
  }
  const sorted = cards.sort((a, b) => {
    if (a.pinned && b.pinned) {
      return (
        new Date(b.pinnedTime).getTime() - new Date(a.pinnedTime).getTime()
      );
    } else if (!a.pinned && !b.pinned) {
      return b.upVotes - a.upVotes;
    } else {
      return a.pinned ? -1 : 1;
    }
  });
  return sorted;
};
