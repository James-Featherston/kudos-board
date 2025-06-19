import React, { useState } from "react";
import tempImg from "../../assets/person.png";
import "./Card.css";
import { deleteCard } from "../../utils/services";
import { updateCard } from "../../utils/services";
import { useCardsContext } from "../../contexts/CardsContext";
import Modal from "../Modal";
import { useTheme } from "../../contexts/ThemeContext";

const Card = ({ data }) => {
  const { theme } = useTheme();
  const [upVotes, setUpVotes] = useState(data.upVotes);
  const { cards, setCards } = useCardsContext();
  const [modal, setModal] = useState(false);
  const handleDelete = async (event) => {
    event.stopPropagation();
    const delCard = await deleteCard(data.id);
    setCards(cards.filter((card) => card.id !== delCard.id));
  };

  const handleUpVote = async (event) => {
    event.stopPropagation();
    updateCard(data.id, upVotes + 1);
    setUpVotes(upVotes + 1);
  };

  return (
    <>
      <article
        className="card-container"
        style={{ backgroundColor: theme.bgColor, color: theme.color }}
        onClick={() => setModal(true)}
      >
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <img className="card-img" src={data.gif} alt="Card Gif" />
        <p>{data.author}</p>
        <div className="card-btns-container">
          <button onClick={handleUpVote} className="card-button">
            <h6>Upvote: {upVotes}</h6>
          </button>
          <button onClick={handleDelete} className="card-button">
            <h6>Delete</h6>
          </button>
        </div>
      </article>
      {modal ? <Modal handleClose={setModal} cardData={data} /> : <></>}
    </>
  );
};

export default Card;
