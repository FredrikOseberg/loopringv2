import React from 'react';
import data from '../../../backerData.js';
import BackerCard from './BackerCard/BackerCard';
import './backers.css';

const Backers = () => (
	<section className="landing--backers">
		<h1>Backers</h1>
		<div className="landing--backers--container">
			{data.map(company => {
				return <BackerCard name={company.name} img={company.img} key={company.id} />;
			})}
		</div>
	</section>
);

export default Backers;
