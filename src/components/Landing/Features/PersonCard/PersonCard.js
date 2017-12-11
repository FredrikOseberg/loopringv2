import React from 'react';
import Loopring from '../../../../img/loop-light.png';
import './personcard.css';

const PersonCard = props => (
	<article className="person--card">
		<header class="person--card__header">
			<h1>{props.name}</h1>
			<img src={props.img} alt={props.name} />
		</header>
		<section className="person--card__wallet">
			<header>
				<img src={Loopring} alt="loopring" />
				<h2>Wallet</h2>
			</header>
			<div className="person--card__wallet__body">
				<ul>
					<li>
						<p>Bitcoin</p>
						<p>3.24</p>
					</li>
				</ul>
			</div>
		</section>
	</article>
);

export default PersonCard;
