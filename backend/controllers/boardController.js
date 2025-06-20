const boardService = require("../services/boardService");

/* Gets all the boards */
exports.getAllBoards = async (req, res) => {
  try {
    const filters = {};
    let max_results = 100;
    if (req.query) {
      const { category, search, limit } = req.query;
      if (category) {
        filters.category = category;
      }
      if (search) {
        filters.search = search;
      }
      if (limit) {
        max_results = parseInt(limit);
      }
    }
    const boards = await boardService.getAllBoards(filters, max_results);
    res.json(boards);
  } catch (error) {
    res.status(404).json({ message: "Internal Server Error" });
  }
};

/* Get a board by the board id */
exports.getBoardById = async (req, res) => {
  try {
    const boardId = parseInt(req.params.boardId);
    const board = await boardService.getSingleBoard(boardId);
    res.json(board);
  } catch (error) {
    res.status(404).json({ message: "Board not found" });
  }
};

/* Create a board */
exports.createBoard = async (req, res) => {
  try {
    if (!req.body.title || !req.body.category) {
      return res.status(404).send("Name and date are required.");
    }
    const { title, category } = req.body;
    const author = req.body.author ? req.body.author : "";
    const newBoard = { title, category, author };
    const board = await boardService.createBoard(newBoard);
    res.json(board);
  } catch (error) {
    res.status(404).json({ message: "Error Creating Board" });
  }
};

/* Delete a board by id*/
exports.deleteBoard = async (req, res) => {
  try {
    const boardId = parseInt(req.params.boardId);
    const board = await boardService.deleteBoard(boardId);
    res.json(board);
  } catch (error) {
    res.status(404).json({ message: "Board not deleted" });
  }
};

/* Get cards for a board by the boardId */
exports.getCardsByBoardId = async (req, res) => {
  try {
    const boardId = parseInt(req.params.boardId);
    const cards = await boardService.getBoardCards(boardId);
    res.json(cards);
  } catch (error) {
    res.status(404).json({ message: "Cards not found" });
  }
};
