import React, { useState } from "react";
import "./Card.css";
import { deleteCard } from "../../utils/services";
import { updateCard } from "../../utils/services";
import { useCardsContext } from "../../contexts/CardsContext";
import Modal from "../Modal";
import { useTheme } from "../../contexts/ThemeContext";

const Card = ({ data }) => {
  const { theme } = useTheme();
  const [upVotes, setUpVotes] = useState(data.upVotes);
  const [pinned, setPinned] = useState(data.pinned);
  const { cards, setCards } = useCardsContext();
  const [modal, setModal] = useState(false);

  const handleDelete = async (event) => {
    event.stopPropagation();
    const delCard = await deleteCard(data.id);
    setCards(cards.filter((card) => card.id !== delCard.id));
  };

  const handleUpVote = async (event) => {
    event.stopPropagation();
    await updateCard(data.id, { upVotes: upVotes + 1 });
    setUpVotes(upVotes + 1);
  };

  const handlePin = async (event) => {
    event.stopPropagation();
    const pinnedState = pinned;
    const newCard = await updateCard(data.id, { pinned: !pinnedState });
    setPinned(!pinnedState);
    setCards((prev) => {
      const clicked = prev.find((card) => card.id === data.id);
      const rest = prev.filter((card) => card.id !== data.id);
      if (pinnedState) {
        return [...rest, clicked];
      } else {
        return [clicked, ...rest];
      }
    });
  };

  return (
    <>
      <article
        className="card-container"
        style={{ ...theme }}
        onClick={() => setModal(true)}
      >
        <div className="title-text">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <img className="card-img" src={data.gif} alt="Card Gif" />
        <div className="author-text">
          <p>{data.author}</p>
        </div>
        <div className="card-btns-container">
          <button onClick={handleUpVote} className="card-button">
            <h6>Upvote: {upVotes}</h6>
          </button>
          <button onClick={handleDelete} className="card-button">
            <h6>Delete</h6>
          </button>
        </div>
        <span
          className={`material-symbols-outlined pinned ${pinned ? "show" : ""}`}
          onClick={handlePin}
        >
          keep
        </span>
      </article>
      {modal ? <Modal handleClose={setModal} cardData={data} /> : <></>}
    </>
  );
};

export default Card;
