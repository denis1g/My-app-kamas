import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg" />
			</div>

			<MyPosts/> 

		</div>
	)
}

export default Profile;