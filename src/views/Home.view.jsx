import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import carouselActions from "../store/carousel/actions";
import CarouselHome from "../components/carouselHome/CarouselHome";

const { getCarousel } = carouselActions

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCarousel())
  }, [])
  return (
    <>
      <div className="section">
        <span className="anuncio">
          We announce our next round of funding. <a>Read more →</a>
        </span>
        <h1>Your favorite comic shop</h1>
        <p className="lorem">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <a className="button-started" href="#main">
          Start →{" "}
        </a>
      </div>
      <CarouselHome />
    </>
  );
};
export default Home;
