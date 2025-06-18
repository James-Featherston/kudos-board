import React, { useState } from "react";
import tempImg from "../../assets/person.png";
import "./Card.css";
import { deleteCard } from "../../utils/services";
import { updateCard } from "../../utils/services";
import { useCardsContext } from "../../contexts/CardsContext";

const Card = ({ data }) => {
  const [upVotes, setUpVotes] = useState(data.upVotes);
  const [voteStatus, setVoteStatus] = useState(false);
  const { cards, setCards } = useCardsContext();
  const handleDelete = async () => {
    const delCard = await deleteCard(data.id);
    setCards(cards.filter((card) => card.id !== delCard.id));
  };

  const handleUpVote = async () => {
    if (voteStatus) {
      updateCard(data.id, upVotes - 1);
      setUpVotes(upVotes - 1);
    } else {
      updateCard(data.id, upVotes + 1);
      setUpVotes(upVotes + 1);
    }
    setVoteStatus(!voteStatus);
  };

  return (
    <article className="card-container">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img className="card-img" src={data.gif} alt="Card Gif" />
      <p>{data.author}</p>
      <div className="card-btns-container">
        <button
          onClick={handleUpVote}
          className="card-button"
          style={voteStatus ? { backgroundColor: "lightgreen" } : {}}
        >
          <h6>Upvote: {upVotes}</h6>
        </button>
        <button onClick={handleDelete} className="card-button">
          <h6>Delete</h6>
        </button>
      </div>
    </article>
  );
};

export default Card;
