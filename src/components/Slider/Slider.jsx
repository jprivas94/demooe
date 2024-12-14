import React from 'react';
import './Slider.css';
import imagenslider from '../../assets/slider-oe.jpg';

const Slider = () => {
	return (
		<div className="slider__content">
			<img src={imagenslider} alt="Logo" className="slider__image" />
		</div>
	);
};

export default Slider;
