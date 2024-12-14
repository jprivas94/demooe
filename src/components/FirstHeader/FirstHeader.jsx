import React from 'react';
import './FirstHeaderStyles.css';

const FirstHeader = () => {
	return (
		<div className="firstheader">
			<p className="firstheader__text">Atencion al cliente: 654618664</p>
			<nav className="firstheader__container">
				<ul className="firstheader__container__list">
					<li>item1</li>
					<li>item2</li>
					<li>item3</li>
					<li>item4</li>
					<li>item5</li>
					<li>item6</li>
					<li>item7</li>
					<li>item8</li>
				</ul>
			</nav>
		</div>
	);
};

export default FirstHeader;
