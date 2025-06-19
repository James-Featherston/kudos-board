const cardService = require("../services/cardService");

exports.getCardById = async (req, res) => {
  try {
    const cardId = parseInt(req.params.cardId);
    const card = await cardService.getSingleCard(cardId);
    console.log(card);
    res.json(card);
  } catch (error) {
    res.status(404).json({ message: "Card not found" });
  }
};

exports.createCard = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.gif ||
      !req.body.boardId
    ) {
      return res.status(404).send("Invalid inputs");
    }
    const { title, description, gif } = req.body;
    const boardId = parseInt(req.body.boardId);
    const author = req.body.author ? req.body.author : "";
    const newCard = { title, description, gif, boardId, author };
    const card = await cardService.createCard(newCard);
    res.json(card);
  } catch (error) {
    res.status(404).json({ message: "Card not created" });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const cardId = parseInt(req.params.cardId);
    const card = await cardService.deleteCard(cardId);
    res.json(card);
  } catch (error) {
    res.status(404).json({ message: "Card not deleted" });
  }
};

exports.getCommentsByCardId = async (req, res) => {
  try {
    const cardId = parseInt(req.params.cardId);
    const comments = await cardService.getCardComments(cardId);
    res.json(comments);
  } catch (error) {
    res.status(404).json({ message: "Comments not found" });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const cardId = parseInt(req.params.cardId);
    const { upVotes, pinned } = req.body;
    const updatedCard = {};
    if (upVotes) {
      updatedCard.upVotes = upVotes;
    }
    if (pinned !== null) {
      updatedCard.pinned = pinned;
      if (pinned) {
        updatedCard.pinnedTime = new Date();
      }
    }

    const card = await cardService.updateCard(cardId, updatedCard);
    res.json(card);
  } catch (error) {
    res.status(404).json({ message: "Card not updated" });
  }
};
