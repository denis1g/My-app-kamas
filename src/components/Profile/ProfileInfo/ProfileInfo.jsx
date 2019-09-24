import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	
	return (
		<div>
			<div>
				<img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg"/>
			</div>
			
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}/>
				<ProfileStatus status={'Hello my friends'}/>
			</div>
		</div>)
	
}

export default ProfileInfo;