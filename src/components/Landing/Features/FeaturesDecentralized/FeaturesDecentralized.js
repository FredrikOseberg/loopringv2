import React from 'react';
import User from './User';
import './featuresdecentralized.css';

const FeaturesDecentralized = props => (
	<div className="features--decentralized">
		<section className="features--decentralized--information">
			<h1>Decentralized</h1>
			<p>
				Orders are automatically executed while trader’s funds remain under their control in a decentralized
				smart contract on the blockchain.
			</p>
		</section>
		<section className="features--decentralized--graphics">
			<User userNumber={'one'} />
			<div className="connecting--line connecting--line--one" />
			<User userNumber={'two'} />
			<div className="connecting--line connecting--line--two" />
			<User userNumber={'three'} />
			<div className="connecting--line connecting--line--three" />
			<User userNumber={'four'} />
			<div className="connecting--line connecting--line--four" />
			<User userNumber={'five'} />
			<div className="connecting--line connecting--line--five" />
			<div className="connecting--line connecting--line--six" />
		</section>
	</div>
);

export default FeaturesDecentralized;
