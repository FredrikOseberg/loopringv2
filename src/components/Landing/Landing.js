import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Features from './Features/Features';
import WhitePaper from './WhitePaper/WhitePaper';

const Landing = () => (
	<Fragment>
		<Header />
		<Features />
		<WhitePaper />
	</Fragment>
);

export default Landing;
