const prisma = require("../prisma.js")

exports.getSingleCard = async (cardId) => {
    const card = await prisma.card.findUnique({
        where: {id : cardId}
    })
    if (card === null) {
        throw Error
    }
    return card
}

exports.createCard = async (newCard) => {
    const resCard = await prisma.card.create({
        data : newCard
    })
    if (resCard === null) {
        throw Error
    }
    return resCard
}

exports.deleteCard = async (cardId) => {
    const delCard = await prisma.card.delete({
        where: {id : cardId}
    })
    if (delCard === null) {
        throw Error
    }
    return delCard
}

exports.getCardComments = async (cardId) => {
    const comments = await prisma.comment.findMany({
        where: {cardId: cardId}
    })
    if (comments === null) {
        throw Error
    }
    return comments
}

exports.updateCard = async (cardId, upVotes) => {
    const card = await prisma.card.update({
        where: {id : cardId},
        data : {
            upVotes : upVotes,
        },
    })
    if (card === null) {
        throw Error
    }
    return card
}