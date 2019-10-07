import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
	if (!profile) {
		return <Preloader/>
	}
	
	return (
		<div>
			<div>
				<img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg"/>
			</div>
			
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large}/>
				
				<ProfileStatusWithHooks status={status}
				               updateStatus={updateStatus}/>
			</div>
		</div>)
	
}

export default ProfileInfo;