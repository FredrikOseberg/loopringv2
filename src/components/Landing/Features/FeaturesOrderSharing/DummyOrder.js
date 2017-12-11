import React from 'react';

const DummyOrder = () => (
	<article className="features--order--dummy--order">
		<div className="features--order--dummy--order--container">
			<header>
				<h1>Order number: #123551</h1>
			</header>
			<div className="features--order--dummy--order--body">
				<div className="features--order--dummy--order--currency--one">
					<i className="cc BTC" />
					<p>2.45 BTC</p>
				</div>
				<i className="fas fa-exchange-alt" />
				<div className="features--order--dummy--order--currency--one">
					<i className="cc ETH" />
					<p>86 ETH</p>
				</div>
			</div>
		</div>
		<footer>
			<div className="features--order--dummy--order--container">
				<h2>
					<i className="fas fa-cogs" />In progress
				</h2>
			</div>
		</footer>
	</article>
);

export default DummyOrder;
