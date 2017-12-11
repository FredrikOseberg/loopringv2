import React from 'react';
import PersonChatLeft from '../PersonChat/PersonChatLeft';
import PersonChatRight from '../PersonChat/PersonChatRight';
import personImg from '../../../../img/personResized.jpg';
import loopringLogo from '../../../../img/loop-black.png';
import './featuresrisk.css';

const FeaturesRisk = () => (
	<div className="features--risk">
		<section className="features--risk--description">
			<h1>Reduced Exchange Risk</h1>
			<p>
				Loopring does not require members to send tokens to exchanges for custody. Tokens always remain in their
				blockchain addresses during the whole transaction life cycle Members can even transfer their tokens
				around after orders are submitted - Loopring will automatically adjust trading amount at the initial
				price. Loopring protects members from threats such as exchange bankruptcies and DDOS.
			</p>
		</section>

		<section className="features--risk--chat">
			<PersonChatLeft img={personImg} message={`I'd like to exchange bitcoin for ethereum safely.`} />
			<PersonChatRight img={loopringLogo} message={'Have you heard of Loopring?'} />
			<PersonChatLeft img={personImg} message={`What is Loopring?`} />
			<PersonChatRight
				img={loopringLogo}
				message={
					'Loopring is a protocol that allows you to trade cryptocurrencies with the funds never leaving your wallet.'
				}
			/>
			<PersonChatLeft img={personImg} message={`So you mean I'm not vulnerable to exchanges getting hacked?`} />
			<PersonChatRight
				img={loopringLogo}
				message={
					'Yes. And you keep your currency in your own wallet at all times, automatically adjust for best price and can transfer money around as you need it.'
				}
			/>
		</section>
	</div>
);

export default FeaturesRisk;
