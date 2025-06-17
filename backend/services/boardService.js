const prisma = require('../prisma.js')

exports.getAllBoards = async (filters) => {
    return await prisma.board.findMany({
        where: filters
    })
}

exports.getSingleBoard = async (boardId) => {
    const board =  await prisma.board.findUnique({
        where: {id : boardId}
    })
    if (board === null) {
        throw Error
    }
    return board
}

exports.createBoard = async (newBoard) => {
    const resBoard = await prisma.board.create({
        data: newBoard
    })
    if (resBoard === null) {
        throw Error
    }
    return resBoard
}

exports.deleteBoard = async (boardId) => {
    const delBoard = await prisma.board.delete({
        where: {id : boardId}
    })
    if (delBoard === null) {
        throw Error
    }
    return delBoard
}

exports.getBoardCards = async (boardId) => {
    const cards = await prisma.card.findMany({
        where: {boardId: boardId}
    })
    if (cards === null) {
        throw Error
    }
    return cards
}
