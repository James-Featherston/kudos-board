const prisma = require("../prisma.js");

/* Gets a single card in the db */
exports.getSingleCard = async (cardId) => {
  const card = await prisma.card.findUnique({
    where: { id: cardId },
  });
  if (card === null) {
    throw Error;
  }
  return card;
};

/* Creates a card in the db */
exports.createCard = async (newCard) => {
  const resCard = await prisma.card.create({
    data: newCard,
  });
  if (resCard === null) {
    throw Error;
  }
  return resCard;
};

/* Deletes a card in the db */
exports.deleteCard = async (cardId) => {
  const delCard = await prisma.card.delete({
    where: { id: cardId },
  });
  if (delCard === null) {
    throw Error;
  }
  return delCard;
};

/* Get comments for a card in the db */
exports.getCardComments = async (cardId) => {
  const comments = await prisma.comment.findMany({
    where: { cardId: cardId },
  });
  if (comments === null) {
    throw Error;
  }
  return comments;
};

/* Updates a card in the db */
exports.updateCard = async (cardId, newData) => {
  const card = await prisma.card.update({
    where: { id: cardId },
    data: newData,
  });
  if (card === null) {
    throw Error;
  }
  return card;
};
