import React, { useEffect, useState } from "react";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cards")
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="card-container">
      {cards.map(card => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;