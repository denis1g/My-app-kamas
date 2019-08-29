import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	
	
	return (
		
		<div className={s.item}>
			<img src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"/>
			{props.message}
			Post 1
			<div>
				<span>Like{props.likesCount}</span>
			</div>

			<input />
			<input />
		</div>


	)
}

export default Post;