import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./BoardCard.css";
import emptyImg from "../../assets/person.png";
import { deleteBoard } from "../../utils/services";
import { useBoardsContext } from "../../contexts/BoardsContext";

const BoardCard = ({ data }) => {
  const navigate = useNavigate();
  const { boards, setBoards } = useBoardsContext();
  const handleDelete = async () => {
    const deleted = await deleteBoard(data.id);
    setBoards(boards.filter((board) => board.id !== deleted.id));
    console.log(deleted);
  };
  return (
    <div className="board-card-container">
      <img className="board-img" src={emptyImg} alt="Board Image" />
      <h3>{data.title}</h3>
      <h5>{data.category}</h5>
      <div style={{ width: "100%", marginTop: "10px" }}>
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
