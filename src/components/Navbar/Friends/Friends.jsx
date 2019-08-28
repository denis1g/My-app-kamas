import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
	
	let friendsArr = props.state.map((friend, index) => {
		return (
			<div key={index}>
				<img src={friend.avatar}/>
				{friend.name}
			</div>
		)

	});
	
	return(
		<div className={s.friends}>
			<div className={s.friendsText}>Friends</div>
			<div className={s.friendsInner}>
				{friendsArr}
			</div>
		</div>
	
	)
}

export default Friends;