import React from 'react';
import FirstHeader from '../components/FirstHeader/FirstHeader';
import '../Home.css';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import BestGifts from '../components/BestGifts/BestGifts';

function App() {
	return (
		<>
			<div className="container_headers">
				<FirstHeader />
				<Header />
			</div>
			<Slider />
			<BestGifts />
		</>
	);
}

export default App;
