import React from 'react';
import WhitePaperItem from './WhitePaperItem/WhitePaperItem';
import './whitepaper.css';

const WhitePaper = () => (
	<div className="landing--whitepaper">
		<h1>Whitepaper</h1>
		<div className="landing--whitepaper--container">
			<WhitePaperItem language={'Chinese'} />
			<WhitePaperItem language={'English'} />
			<WhitePaperItem language={'English Simplified'} />
		</div>
	</div>
);

export default WhitePaper;
