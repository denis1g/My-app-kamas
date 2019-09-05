import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Message from "../Dialogs/Message/Message";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	
	return (
		<div>
			<ProfileInfo/>
			
			<MyPostsContainer />
		
		</div>
	)
}

export default Profile;