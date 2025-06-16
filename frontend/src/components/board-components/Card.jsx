import React from "react";
import tempImg from "../../assets/person.png";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <article className="card-container">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img className="card-img" src={tempImg} alt="Card Gif" />
      <p>Creator</p>
    </article>
  );
};

export default Card;
