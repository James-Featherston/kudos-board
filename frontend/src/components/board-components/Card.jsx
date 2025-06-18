import React from "react";
import tempImg from "../../assets/person.png";
import "./Card.css";
import { deleteCard } from "../../utils/services";

const Card = ({ data }) => {
  const handleDelete = () => {
    deleteCard(data.id);
  };

  return (
    <article className="card-container">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img className="card-img" src={data.gif} alt="Card Gif" />
      <p>{data.author}</p>
      <div className="card-btns-container">
        <button className="card-button">
          <h6>Upvote: {data.upVotes}</h6>
        </button>
        <button onClick={handleDelete} className="card-button">
          <h6>Delete</h6>
        </button>
      </div>
    </article>
  );
};

export default Card;
