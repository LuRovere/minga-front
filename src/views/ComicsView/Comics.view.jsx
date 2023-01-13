import React, { useEffect, useRef, useState } from "react";
import Categories from "../../components/ComicsCategories";
import Cards from "../../components/ComicsCards";
import "./Comics.css";
import { useDispatch, useSelector } from "react-redux";
import comicsActions from "../../store/comics/actions";

const { getComics } = comicsActions;

const ComicsView = () => {

  const comicsStore = useSelector((store) => store.comics);
  //console.log(comicsStore);
  const inputCategory = useSelector(
    (store) => store.filterCategoryComic.filterCategory
  );

  const [load,setLoad] = useState(false)
  
  const dispatch = useDispatch();
  const inputText = useRef("");
  const inputSort = "asc";
  const inputLimit = 10;
  //console.log(inputText.current?.value);

  useEffect(() => {
    dispatch(
      getComics({
        inputText: inputText.current?.value,
        inputSort,
        inputCategory: inputCategory.join(","),
        inputLimit,
      })
    );   
  }, [load, inputCategory]);

/*-----boton-----*/

  const seeMore = () => {
    const limitt = comicsStore.comics?.comics.length;
    dispatch(
      getComics({
        inputText: inputText.current.value,
        inputSort,
        inputCategory: inputCategory.join(","),
        inputLimit: limitt + 5,
      })
    );
  };

  const boton = () => {
    const limitt = comicsStore.comics?.comics?.length;
    if (limitt ===34) {
      return <div className="noMore">No more comics</div>
    } else {
      return (
        <button onClick={seeMore} className="buttonSeeMore">
          See more
        </button>
      );
    }
  };

  return (
    <div className="comicsBody">
      <h1 className="tituloComics">Comics</h1>
      <label className="contSearch" htmlFor="search">
        <img className="searchImg" src="./assets/Search.png" alt="" />
        <input
          ref={inputText}
          onKeyUp={()=>setLoad(!load)}
          className="search"
          type="text"
          id="search"
          placeholder="Find your comic here"
        />
      </label>

      <section>
        <div className="exploradorDeComics">
          <h2 className="explore">Explore</h2>

          <div className="ancorsComics">
            <a className="ancorComics1" href="">
              Adventures
            </a>
            <a className="ancorComics2" href="">
              Nostalgic
            </a>
            <a className="ancorComics3" href="">
              Popular
            </a>
          </div>
          <Categories />
          <Cards />
          {boton()}
        </div>
      </section>
    </div>
  );
};
export default ComicsView;
