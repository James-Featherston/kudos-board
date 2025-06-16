import React from "react";
import Card from "./Card";
import "./CardList.css";

const cards = [
  { id: 1, title: "title", description: "Description", votes: 0 },
  { id: 2, title: "title", description: "Description", votes: 0 },
];
const CardList = () => {
  return (
    <section className="card-list-container">
      {cards.map((card) => {
        return <Card key={card.id} data={card} />;
      })}
    </section>
  );
};

export default CardList;
