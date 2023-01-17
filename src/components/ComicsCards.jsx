import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom";

const ComicsCards = () => {
  const { comics } = useSelector((store) => store?.comics);
  console.log(comics);

  return (
    <>
      {comics?.map((card, index) => {
        return (
          <Anchor to={`/comic/${card._id}`} key={index} className="card">
            <div className="textoCard">
              <h2 className="tituloCard">{card.title}</h2>
              <p className="pCard">{card.category_id.name}</p>
            </div>

            <div className="divCardImg">
              <img className="cardIMG" src={card.photo} alt="" />
            </div>
          </Anchor>
        );
      })}
    </>
  );
};
export default ComicsCards;
