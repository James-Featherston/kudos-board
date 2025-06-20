const commentService = require("../services/commentService");

/* Create a new comment */
exports.createComment = async (req, res) => {
  try {
    if (!req.body.message || !req.body.cardId) {
      return res.status(404).send("Invalid inputs");
    }
    const { message, cardId } = req.body;
    const author = req.body.author ? req.body.author : "";
    const newComment = { message, cardId, author };
    const comment = await commentService.createComment(newComment);
    res.json(comment);
  } catch (error) {
    res.status(404).json({ message: "Comment not created" });
  }
};
