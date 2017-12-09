import React, { Fragment } from 'react';
import './personchat.css';

const PersonChat = props => {
	let personChat;
	if (props.align === 'left') {
		personChat = (
			<Fragment>
				<img src={props.img} alt="generic person" />
				<div className="person--chat--bubble">
					<p>{props.message}</p>
					<div className="person--chat--bubble--arrow--left" />
				</div>
			</Fragment>
		);
	} else {
		personChat = (
			<Fragment>
				<div className="person--chat--bubble">
					<p>{props.message}</p>
					<div className="person--chat--bubble--arrow--right" />
				</div>
				<img src={props.img} alt="generic person" />
			</Fragment>
		);
	}

	return <div className="person--chat">{personChat}</div>;
};

export default PersonChat;
