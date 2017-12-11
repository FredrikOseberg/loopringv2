import React from 'react';

const OrderPiece = props => (
	<div className="order--piece">
		<div className="order--piece--container">
			<div className="order--piece--currency">
				<i className="cc BTC" />
				<p>{props.amountBtc} BTC</p>
			</div>
			<i className="fas fa-exchange-alt" />
			<div className="order--piece--currency">
				<i className="cc ETH" />
				<p>{props.amountEth} ETH</p>
			</div>
		</div>
	</div>
);

export default OrderPiece;
