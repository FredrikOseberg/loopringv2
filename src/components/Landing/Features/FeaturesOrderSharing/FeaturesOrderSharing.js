import React from 'react';
import DummyOrder from './DummyOrder';
import OrderPiece from './OrderPiece';
import './featuresordersharing.css';

const FeaturesOrderSharing = () => (
	<div className="features--order--sharing">
		<section className="features--order--sharing--graphics">
			<DummyOrder />
			<OrderPiece amountBtc={1} amountEth={36} />
			<OrderPiece amountBtc={1.2} amountEth={42} />
			<OrderPiece amountBtc={0.25} amountEth={8} />
		</section>
		<section className="features--order--sharing--information">
			<h1>Order Sharing</h1>
			<p>
				Loopring mechanism allows to order break into small pieces, identifies the best exchanges and times to
				trade those pieces on, and applies game theoretic logic to optimize trading results. Loopring can also
				well protect trading from DDOS attack.
			</p>
		</section>
	</div>
);

export default FeaturesOrderSharing;
