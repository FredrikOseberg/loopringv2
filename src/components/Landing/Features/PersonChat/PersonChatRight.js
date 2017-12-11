import React from 'react';
import './personchat.css';

const PersonChatRight = props => {
	return (
		<div className="person--chat--right">
			<div className="person--chat--bubble--right">
				<p>{props.message}</p>
				<div className="person--chat--bubble--arrow--right" />
			</div>
			<img src={props.img} alt="generic person" />
		</div>
	);
};

export default PersonChatRight;
