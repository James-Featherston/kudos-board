import React from "react";
import tempImg from "../../assets/person.png";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <article className="card-container">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img className="card-img" src={tempImg} alt="Card Gif" />
      <p>{data.author}</p>
      <div className="card-btns-container">
        <button className="card-button">
          <h6>Upvote: {data.upVotes}</h6>
        </button>
        <button className="card-button">
          <h6>Delete</h6>
        </button>
      </div>
    </article>
  );
};

export default Card;
