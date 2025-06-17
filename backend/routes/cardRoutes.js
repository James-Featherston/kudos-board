const express = require('express')
const router = express.Router()
const cardController = require('../controllers/cardController')

router.get('/:cardId', cardController.getCardById)
router.post('/', cardController.createCard)
router.delete('/:cardId', cardController.deleteCard)
router.get('/:cardId/comments', cardController.getCommentsByCardId)

module.exports = router