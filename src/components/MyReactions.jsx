import React, { useEffect, useRef, useState } from "react";
import Categories from "../components/ComicsCategories";
import CardsReactions from "../components/CardsReactions";
import "../views/ComicsView/Comics.view";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../store/myReactions/actions";
import authActions from "../store/auth/actions";

const { getReactions } = reactionsActions;

const MyReactions = () => {
  
  const reactions = useSelector((store) => store.reactions);
  const auth = useSelector((store) => store.auth.token);
  //console.log(auth)
  //console.log(reactions);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (reactions.lenght === 0) {
     
    // }
    let token = localStorage.getItem("token")
    dispatch(getReactions(token));
    
    //console.log(reactions);
  }, []);

  return (
    <div className="favouritesBody">
      <h1 className="tituloComics">FAVORITES</h1>
      <label className="contSearch" htmlFor="search">
        <img className="searchImg" src="./assets/Search.png" alt="" />
        <input
          //   ref={inputText}
          //   onKeyUp={() => setLoad(!load)}
          className="search"
          type="text"
          id="search"
          placeholder="Find your comic here"
          // defaultValue={text}
        />
      </label>

      <section className="sectionCards">
        <div className="exploradorDeComics">
          <h2 className="explore">Explore</h2>

          <Categories />
          <CardsReactions />
          {/* {boton2()}
          {boton()} */}
        </div>
      </section>
    </div>
  );
};
export default MyReactions;
