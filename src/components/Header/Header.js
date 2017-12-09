import React from 'react';
import loopring from '../../img/loop-light.png';
import './header.css';

const Header = () => {
	return (
		<section className="header">
			<div className="header--logo">
				<img src={loopring} alt="loopring" />
			</div>
			<article className="header--banner">
				<h1>Loopring</h1>
				<h2>Powering trustless trade</h2>
				<button className="header--button">Learn more</button>
			</article>
		</section>
	);
};

export default Header;
