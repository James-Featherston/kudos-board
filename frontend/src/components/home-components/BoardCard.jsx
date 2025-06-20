import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoardCard.css";
import boardImg from "../../assets/board_card_pic.jpg";
import { deleteBoard } from "../../utils/services";
import { useBoardsContext } from "../../contexts/BoardsContext";
import { useTheme } from "../../contexts/ThemeContext";

const BoardCard = ({ data }) => {
  const navigate = useNavigate();
  const { boards, setBoards } = useBoardsContext();
  const { theme } = useTheme();
  const handleDelete = async () => {
    const deleted = await deleteBoard(data.id);
    setBoards(boards.filter((board) => board.id !== deleted.id));
  };
  return (
    <div className="board-card-container" style={{ ...theme }}>
      <img className="board-img" src={boardImg} alt="Board Image" />
      <div className="board-text">
        <h3>{data.title}</h3>
        <h5>{data.category}</h5>
      </div>
      <div
        className="btns-container"
        style={{ width: "100%", marginTop: "10px" }}
      >
        <button
          onClick={() => navigate(`/boards/${data.id}`)}
          className="board-button"
        >
          <h5>View Board</h5>
        </button>
        <button className="board-button" onClick={handleDelete}>
          <h5>Delete Board</h5>
        </button>
      </div>
    </div>
  );
};
export default BoardCard;
