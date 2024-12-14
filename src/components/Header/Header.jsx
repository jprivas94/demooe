import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__content">
					<div className="header__logo">
						<p className="header__logo-text">logo</p>
						<p className="header__logo-menu">hamb</p>
					</div>
					<div className="header__nav">
						<input className="header__nav-input" type="text" />
						<ul className="header__nav-list">
							<li className="header__nav-item">
								<div className="header__nav-item-wrapper">
									<div className="header__nav-item-wrapper-text">
										<p>Encuentra el stock disponible cerca de ti</p>
									</div>
								</div>
							</li>
							<li className="header__nav-item">
								<div className="header__nav-item-wrapper">
									<i className="header__nav-icon"></i>
									<span className="header__nav-item-text">Inicia Sesion</span>
								</div>
							</li>
							<li className="header__nav-item">
								<div className="header__nav-item-wrapper">
									<i className="header__nav-icon"></i>
									<span className="header__nav-item-text">Carrito</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
