import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return(
		<div className={s.content}>
			<div>
				<img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg" />
			</div>

			<div>My posts</div>

			<div>
				<div>New post</div>
			</div>

			<div className={s.posts}>
				<div className={s.item}>post 1</div>
				<div className={s.item}>post 2</div>
			</div>

		</div>
	)
}

export default Profile;