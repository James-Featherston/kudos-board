const prisma = require('../prisma.js')

exports.getAllBoards = async (filters, limit) => {
    return await prisma.board.findMany({
        take: limit,
        where: {
            category : filters.category,
            title : {
                contains : filters.search,
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
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
        data: newBoard,
    })
    if (resBoard === null) {
        throw Error
    }
    console.log(resBoard)
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
        where: {boardId: boardId},
        orderBy: {
            upVotes: 'desc'
        }
    })
    if (cards === null) {
        throw Error
    }
    return cards
}
