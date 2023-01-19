import React, { useEffect, useRef, useState } from "react";
import Categories from "../components/ComicsCategories";
import CardsReactions from "../components/CardsReactions";
import "../views/ComicsView/Comics.view";

import { useDispatch, useSelector } from "react-redux";
import comicsActions from "../store/comic/actions";

const { getComics } = comicsActions;

const MyReactions
 = () => {
const comicsStore = useSelector((store) => store.comics.comics);
console.log(comicsStore)
const text = useSelector((store) => store.comics.text);
const page = useSelector((store) => store.comics.page);
useSelector((store) => store.comics);
const reactions = useSelector((store) => store);
console.log(reactions)


//   const [load, setLoad] = useState(false);
//   const dispatch = useDispatch();
//   let inputText = useRef(text);
//   const inputSort = "asc";
//   const inputLimit = 10;
//   //console.log(inputText.current?.value);
//   useEffect(() => {
//     dispatch(
//       getComics({
//         inputText: inputText.current?.value,
//         page,
//         inputCategory: inputCategory.join(","),
        
//       })
//     );
//   }, [load, inputCategory,page]);

  /*-----boton-----*/

//   const next = () => {
//     const comicLimit = comicsStore.length
//     console.log(comicLimit)
//     dispatch(
//       getComics({
//         inputText: inputText.current.value,
//         inputCategory: inputCategory.join(","),
//         page: page+1,
//       })
//     );
//   };

//   const boton = () => {
//     const comicLimit = comicsStore.length
//     if (comicLimit<9) {
//       return <button className="noMore">No more comics</button>;
//     } else {
//       return (
//         <button onClick={next} className="buttonNext">
//           Next
//         </button>
//       );
//     }
//   };
//   /*---------boton2-----*/
//   const prev = () => {
//     const comicLimit = comicsStore.length
//     console.log(comicLimit)
//     dispatch(
//       getComics({
//         inputText: inputText.current.value,
//         inputCategory: inputCategory.join(","),
//         page: page-1,
//       })
//     );
//   };

//   const boton2 = () => {
//     if (page>1) {
//       return (
//         <button onClick={prev} className="buttonPrev">
//           Prev
//         </button>
//       );

//     }
//   };

  return (
    <div className="favouritesBody">
      <h1 className="tituloComics">FAVOURITES</h1>
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
export default MyReactions
;
