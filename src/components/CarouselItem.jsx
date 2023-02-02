import React from "react";

const CarouselItem = ({ photo, title, description, prev, next }) => {
	return (
		<div className="carousel-item">
			<img className="carousel-img" src={`https://dummyimage.com/600x400/000/fff&text=${title}`} alt={title} />
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={prev}>{"<"}</button>
        <button className="carousel-button" onClick={next}>{">"}</button>
      </div>
			<h4 className="carousel-title">{title}</h4>
			<p className="carousel-description">{description.length > 200 ? `${description.slice(0, 200)}...` : description}</p>
		</div>
	);
};

export default CarouselItem;
