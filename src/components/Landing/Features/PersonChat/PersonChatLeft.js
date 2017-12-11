import React from 'react';
import './personchat.css';

const PersonChatLeft = props => {
	return (
		<div className="person--chat--left">
			<img src={props.img} alt="generic person" />
			<div className="person--chat--bubble--left">
				<p>{props.message}</p>
				<div className="person--chat--bubble--arrow--left" />
			</div>
		</div>
	);
};

export default PersonChatLeft;
