import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Features from './Features/Features';
import WhitePaper from './WhitePaper/WhitePaper';
import Backers from './Backers/Backers';
import Footer from '../Footer/Footer';

const Landing = () => (
	<Fragment>
		<Header />
		<Features />
		<WhitePaper />
		<Backers />
		<Footer />
	</Fragment>
);

export default Landing;
