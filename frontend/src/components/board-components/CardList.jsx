import React from "react";
import Card from "./Card";
import "./CardList.css";
import { useEffect } from "react";
import { useState } from "react";
import { getCardsWithBoardId } from "../../utils/services";

const cards = [
  { id: 1, title: "title", description: "Description", votes: 0 },
  { id: 2, title: "title", description: "Description", votes: 0 },
];
const CardList = ({ boardId }) => {
  const [cards, setCards] = useState(null);

  const fetchCards = async () => {
    setCards(await getCardsWithBoardId(boardId));
  };
  useEffect(() => {
    fetchCards();
  });

  if (cards === null) {
    return <div>Loading Cards...</div>;
  }
  return (
    <section className="card-list-container">
      {cards.map((card) => {
        return <Card key={card.id} data={card} />;
      })}
    </section>
  );
};

export default CardList;
