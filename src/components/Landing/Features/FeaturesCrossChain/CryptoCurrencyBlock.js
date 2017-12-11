import React from 'react';

const CryptoCurrencyBlock = props => (
	<div className={`crypto--currency--block crypto--currency--block--${props.coin}`}>
		<i className={`cc ${props.coin}`} />
	</div>
);

export default CryptoCurrencyBlock;
