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
      <div style={{ width: "100%", marginTop: "10px" }}>
        <button className="board-button">
          <a href={`boards/${data.id}`}>
            <h5>View Board</h5>
          </a>
        </button>
        <button className="board-button">
          <h5>Delete Board</h5>
        </button>
      </div>
    </div>
  );
};
export default BoardCard;
