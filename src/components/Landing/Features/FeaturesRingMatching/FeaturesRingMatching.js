import React from 'react';
import Ring from './Ring/Ring';
import './ringmatching.css';

const FeaturesRingMatching = () => (
	<div className="features--ring--matching">
		<section className="features--ring--matching--rings">
			<Ring color={'one'} />
			<Ring color={'two'} />
			<Ring color={'three'} />
			<Ring color={'four'} />
		</section>

		<section className="features--ring--matching--information">
			<h1>Ring Matching</h1>
			<p>
				Loopring is a decentralized, automated trading intelligence interfaces between crypto exchanges and
				blockchains, using our balance sheet to enable users to realize liquidity many times greater than
				available directly in the market, by both generating liquidity within the platform and breaking orders
				into small pieces that are placed across all market venues simultaneously.
			</p>
		</section>
	</div>
);

export default FeaturesRingMatching;
