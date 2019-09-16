import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	debugger
	return (
		<div>
			<div>
				<img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg" />
			</div>

			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;