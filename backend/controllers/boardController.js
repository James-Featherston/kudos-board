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
        const idObj = {id: boardId}
        const boards = await boardService.getSingleBoard(idObj)
        res.json(boards)
    } catch (error) {
        res.status(404).json({message: "Board not found"})
    }
}

exports.createBoard = async (req, res) => {
    try {
        if (!req.body.title || !req.body.description || !req.body.category || !req.body.image) {
            return res.status(404).send('Name and date are required.')
        }
        const {title, description, category, image} = req.body
        const author = req.body.author ? req.body.author : "";
        const newBoard = {title, description, category, image, author} 
        const board = await boardService.createBoard(newBoard)
        res.json(board)
    } catch (error) {
        res.status(404).json({message: "Error Creating Board"})
    }
}

exports.deleteBoard = async(req, res) => {
    try {
        const boardId  = parseInt(req.params.boardId)
        const idObj = {id: boardId}
        const board = await boardService.deleteBoard(idObj)
        res.json(board)
    } catch (error) {
        res.status(404).json({message: "Board not deleted"})
    }
}

exports.getPostsByBoardId = async(req, res) => {
    // const posts = await prisma.card.findMany({
    //     where: {boardId: 1}
    // })
    res.json(posts)
}