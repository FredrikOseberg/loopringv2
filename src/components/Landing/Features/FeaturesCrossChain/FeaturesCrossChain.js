import React from 'react';
import CryptoCurrencyBlock from './CryptoCurrencyBlock';
import './featurescrosschain.css';

const FeaturesCrossChain = props => (
	<div className="features--cross--chain">
		<section className="features--cross--chain--information">
			<h1>Cross-chain protocol</h1>
			<p>
				Loopring was designed to be blockchain agnostic. As long as a blockchain has smart-contract support,
				Loopring can be implemented, and all ERC20-like tokens on such a blockchain can be traded under
				Loopring.
			</p>
		</section>
		<section className="features--cross--chain--graphics">
			<CryptoCurrencyBlock coin="ETH" />
			<CryptoCurrencyBlock coin="ARDR" />
			<CryptoCurrencyBlock coin="NXT" />
			<CryptoCurrencyBlock coin="NEO" />
			<CryptoCurrencyBlock coin="LISK" />
		</section>
	</div>
);

export default FeaturesCrossChain;
