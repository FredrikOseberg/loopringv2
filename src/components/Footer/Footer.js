import React from 'react';
import Loopring from '../../img/loop-light.png';
import './footer.css';

const Footer = () => (
	<section className="footer">
		<div className="footer--logo--section">
			<img src={Loopring} alt="Loopring" />
			<h1>Loopring</h1>
		</div>
	</section>
);

export default Footer;
