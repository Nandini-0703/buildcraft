// import React from "react";

// const Cards = () => {
//   return <div>

//   </div>;
// };

// export default Cards;

import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

function Cards() {
  const initialSelectedCard = {
    id: 1,
    title: "",
    content: "",
    img: "/assets/Event/HackNSolve.webp",
  };
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const cards = [
    {
      id: 1,
      title: "Blockchain",
      content: "",
      img: "/assets/Event/HackNSolve.webp",
    },
    {
      id: 2,
      title: "AR/VR",
      content: "",
      img: "/assets/Event/Bid-O-Mania.webp",
    },
    {
      id: 3,
      title: "Machine Learning",
      content: "",
      img: "/assets/Event/RoboWar.webp",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      content: "",
      img: "/assets/Event/GamingArena.webp",
    },
    {
      id: 5,
      title: "Development",
      content: "",
      img: "/assets/Event/GuestSpeakerSession.webp",
    },
  ];
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <>
      <div id="event" className="page-layout ">
        <div className="card-layout">
          <div className="selected-card-content">
            {selectedCard && (
              <div className="scard">
                <Card
                  className="selected-card-details bg-center bg-cover"
                  style={{ backgroundImage: `url(${selectedCard.img})` }}
                >
                  <Card.Body>
                    <Card.Title className="text-7xl font-semibold text-red-950 uppercase text-black">
                      {selectedCard.title}
                    </Card.Title>
                    <Card.Text>{selectedCard.content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>

          <div
            className={`card-sidebar ${selectedCard ? "selected-sidebar" : ""}`}
          >
            <div className="card-container">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="individual-card-container"
                  style={{
                    backgroundColor:
                      selectedCard.id === card.id ? "yellow" : "black",
                  }}
                >
                  <Card
                    style={{ backgroundImage: `url(${card.img})` }}
                    className={`cursor-pointer bg-center individual-cards bg-cover  ${
                      selectedCard.id === card.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <Card.Body>
                      <Card.Title className="text-red-950 font-semibold text-black">
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
