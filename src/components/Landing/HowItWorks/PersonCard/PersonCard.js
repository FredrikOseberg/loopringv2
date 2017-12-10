import React from 'react';
import Loopring from '../../../../img/loop-light.png';

const PersonCard = props => (
	<article className="person--card">
		<header class="person--card__header">
			<h1>{props.name}</h1>
			<img src={props.img} alt={props.name} />
		</header>
		<section className="person--card__wallet">
			<header>
				<img src={loopring} />
				Wallet
			</header>
		</section>
	</article>
);

export default PersonCard;
