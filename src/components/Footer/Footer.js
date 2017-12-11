import React from 'react';
import Loopring from '../../img/loop-light.png';
import './footer.css';

const Footer = () => (
	<section className="footer">
		<div className="footer--logo--section">
			<img src={Loopring} alt="Loopring" />
			<h1>Loopring</h1>
		</div>
		<div className="footer--content--section">
			<div className="footer--container">
				<div className="footer--content--links">
					<h4>Loopring Foundation. All rights reserved.</h4>
				</div>
				<div className="footer--content--social">
					<a href="#" className="footer--social--link">
						<i className="fab fa-github-alt" />
					</a>

					<a href="#" className="footer--social--link">
						<i className="fab fa-telegram" />
					</a>

					<a href="#" className="footer--social--link">
						<i className="fas fa-envelope" />
					</a>

					<a href="#" className="footer--social--link">
						<i className="fab fa-twitter" />
					</a>
					<a href="#" className="footer--social--link">
						<i className="fab fa-medium-m" />
					</a>
				</div>
			</div>
		</div>
	</section>
);

export default Footer;
