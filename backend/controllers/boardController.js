const boardService = require('../services/boardService')

exports.getAllBoards = async (req, res) => {
    try {
        // Need to configure filters
        const filters = {}
        const boards = await boardService.getAllBoards(filters)
        res.json(boards)
    } catch (error) {
        res.status(404).json({message: "Internal Server Error"})
    }
}

exports.getBoardById = async (req, res) => {
    try {
        const boardId  = parseInt(req.params.boardId)
        const board = await boardService.getSingleBoard(boardId)
        res.json(board)
    } catch (error) {
        res.status(404).json({message: "Board not found"})
    }
}

exports.createBoard = async (req, res) => {
    try {
        if (!req.body.title || !req.body.category) {
            return res.status(404).send('Name and date are required.')
        }
        const {title, category} = req.body
        const author = req.body.author ? req.body.author : "";
        const newBoard = {title, category, author} 
        const board = await boardService.createBoard(newBoard)
        res.json(board)
    } catch (error) {
        res.status(404).json({message: "Error Creating Board"})
    }
}

exports.deleteBoard = async(req, res) => {
    try {
        const boardId  = parseInt(req.params.boardId)
        const board = await boardService.deleteBoard(boardId)
        res.json(board)
    } catch (error) {
        res.status(404).json({message: "Board not deleted"})
    }
}

exports.getCardsByBoardId = async(req, res) => {
    try {
        const boardId = parseInt(req.params.boardId)
        const cards = await boardService.getBoardCards(boardId)
        res.json(cards)
    } catch (error) {
        res.status(404).json({message: "Cards not found"})
    }
}