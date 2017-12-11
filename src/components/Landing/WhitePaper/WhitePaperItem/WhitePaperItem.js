import React from 'react';
import './whitepaperitem.css';

const WhitePaperItem = props => (
	<article className="whitepaper--item">
		<div className="whitepaper--item--container">
			<header>
				<h1>{props.language}</h1>
			</header>
			<div className="whitepaper--line--one" />
			<div className="whitepaper--line--two" />
			<div className="whitepaper--line--three" />
			<div className="whitepaper--line--four" />
			<div className="whitepaper--line--three" />
			<div className="whitepaper--line--four" />
			<div className="whitepaper--line--two" />
			<div className="whitepaper--line--three" />
			<div className="whitepaper--line--one" />

			<footer>
				<button className="whitepaper--item--download--button">
					<i className="fas fa-download" />
				</button>
			</footer>
		</div>
	</article>
);

export default WhitePaperItem;
