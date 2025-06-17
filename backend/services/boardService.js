const prisma = require('../prisma.js')

exports.getAllBoards = async (filters) => {
    return await prisma.board.findMany({
        where: filters
    })
}

exports.getSingleBoard = async (idObj) => {
    const board =  await prisma.board.findUnique({
        where: idObj
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

exports.deleteBoard = async (idObj) => {
    const delBoard = await prisma.board.delete({
        where: idObj
    })
    if (delBoard === null) {
        throw Error
    }
    return delBoard
}