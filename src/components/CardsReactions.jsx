import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom";

const CardsReactions = () => {
  const { comics } = useSelector((store) => store?.comics);
  //console.log(comics);

  return (
    <>
      {/* {comics?.map((card, index) => {
        return ( */}
      <div className="card">
        <div>
          <div className="textoCard">
            <h2 className="tituloCard">title</h2>
            <p className="pCard">name</p>
            <div className="buttonsFav">
              <Anchor to="#" key="{index}" className="readAnchor">
                Read
              </Anchor>
              <button className="deleteButton">Delete</button>
            </div>
          </div>
        </div>

        <div className="divCardImg">
          <img className="cardIMG" src="{foto}" alt="" />
        </div>
      </div>

      {/*); })} */}
    </>
  );
};
export default CardsReactions;
