import { useSelector, useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import reactionsActions from "../store/myReactions/actions";
import { useEffect } from "react";


const  {getReactions}  = reactionsActions;

const CardsReactions = () => {
  const {reactions} = useSelector((store) => store.reactions);
console.log(reactions)

  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token")
    dispatch(getReactions(token));
  }, []);

  return (
    <>
    {reactions?.map((card, index) => {
        return (
      <div  key={index} className="card">
        <div>
          <div className="textoCard">
            <h2 className="tituloCard">{card.comic_id.title}</h2>
            <p className="pCard">{card?.comic_id.category_id.name}</p>
            <div className="buttonsFav">
              <Anchor to={`/comic/${card.comic_id._id}`}className="readAnchor">
                Read
              </Anchor>
              <button className="deleteButton">Delete</button>
            </div>
          </div>
        </div>

        <div className="divCardImg">
          <img className="cardIMG" src={card.comic_id.photo} alt="" />
        </div>
      </div>)
  })}
    </>
  );
};
export default CardsReactions;
