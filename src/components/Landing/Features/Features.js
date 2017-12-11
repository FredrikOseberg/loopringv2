import React from 'react';
import FeaturesRisk from './FeaturesRisk/FeaturesRisk';
import FeaturesRingMatching from './FeaturesRingMatching/FeaturesRingMatching';
import './features.css';

const Features = () => (
	<div className="landing--features">
		<div className="landing--features--container">
			<FeaturesRisk />
			<FeaturesRingMatching />
		</div>
		<div className="landing--features--grey--background">
			<div className="landing--features--container">hi</div>
		</div>
	</div>
);

export default Features;
