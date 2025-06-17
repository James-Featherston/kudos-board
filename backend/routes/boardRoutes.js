const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')

router.get("/", boardController.getAllBoards)
router.get("/:boardId", boardController.getBoardById)
router.post("/", boardController.createBoard)
router.delete("/:boardId", boardController.deleteBoard)
router.get("/:boardId/cards", boardController.getCardsByBoardId)

module.exports = router