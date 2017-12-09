import React from 'react';
import PersonChat from './PersonChat/PersonChat';
import personImg from '../../../img/personResized.jpg';
import './howitworks.css';

const HowItWorks = () => (
	<div className="landing--hiw">
		<div className="landing--hiw--container">
			<div className="landing--hiw--person--container">
				<PersonChat
					img={personImg}
					message={`I'd like to exchange bitcoin for ethereum safely.`}
					align={'left'}
				/>
				<PersonChat img={personImg} message={'I want to exchange ethereum for neo safely'} align={'right'} />
			</div>
		</div>
	</div>
);

export default HowItWorks;
