import React from "react";
import "./BoardCard.css";
import emptyImg from "../../assets/person.png";
const BoardCard = ({ data }) => {
  // Delete board logic
  return (
    <div className="board-card-container">
      <img className="board-img" src={emptyImg} alt="Board Image" />
      <h3>{data.title}</h3>
      <h5>{data.type}</h5>
      <div style={{ width: "100%" }}>
        <button className="board-button">
          <a href={`boards/${data.id}`}>
            <h6>View Board</h6>
          </a>
        </button>
        <button className="board-button">
          <h6>Delete Board</h6>
        </button>
      </div>
    </div>
  );
};
export default BoardCard;
