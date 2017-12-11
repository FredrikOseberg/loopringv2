import React from 'react';
import anonUser from '../../../../img/anonuser.png';

const User = props => (
	<div className={`user user--${props.userNumber}`}>
		<img src={anonUser} alt="user" />
	</div>
);

export default User;
