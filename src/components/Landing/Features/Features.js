import React from 'react';
import FeaturesRisk from './FeaturesRisk/FeaturesRisk';
import FeaturesRingMatching from './FeaturesRingMatching/FeaturesRingMatching';
import FeaturesDecentralized from './FeaturesDecentralized/FeaturesDecentralized';
import FeaturesOrderSharing from './FeaturesOrderSharing/FeaturesOrderSharing';
import FeaturesCrossChain from './FeaturesCrossChain/FeaturesCrossChain';
import './features.css';

const Features = () => (
	<div className="landing--features">
		<div className="landing--features--container">
			<FeaturesRisk />
			<FeaturesRingMatching />
		</div>
		<div className="landing--features--grey--background">
			<div className="landing--features--container">
				<FeaturesDecentralized />
				<FeaturesOrderSharing />
			</div>
		</div>
		<div className="landing--features--container">
			<FeaturesCrossChain />
		</div>
	</div>
);

export default Features;
