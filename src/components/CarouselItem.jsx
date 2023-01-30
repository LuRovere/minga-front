import React from "react";

const CarouselItem = ({ photo, title, description }) => {
	return (
		<div>
			<img src={photo} alt={title} />
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	);
};

export default CarouselItem;
