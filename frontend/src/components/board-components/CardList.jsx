import React from "react";
import Card from "./Card";
import "./CardList.css";
import { useEffect } from "react";
import { getCardsWithBoardId } from "../../utils/services";
import { useCardsContext } from "../../contexts/CardsContext";

const CardList = ({ boardId }) => {
  const { cards, setCards } = useCardsContext();

  const fetchCards = async () => {
    setCards(await getCardsWithBoardId(boardId));
  };
  useEffect(() => {
    fetchCards();
  }, []);

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
