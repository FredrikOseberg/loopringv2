import React from 'react';
import './backercard.css';

const BackerCard = props => (
	<article className="backer--card">
		<div className="backer--card--container">
			<header>
				<img src={props.img} alt={props.name} />
			</header>
			<div className="backer--card--body">
				<h3>{props.name}</h3>
			</div>
		</div>
	</article>
);

export default BackerCard;
