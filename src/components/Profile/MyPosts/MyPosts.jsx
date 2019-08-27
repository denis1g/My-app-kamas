import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postsElements = props.posts.map((p, index) =>
		<Post message={p.message}
		      likesCount={p.likesCount}
		      key={index}
		/>)
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
					<button>Remove</button>
				</div>
			</div>
			
			<div className={s.posts}>
				{postsElements}
			</div>
		
		</div>
	)
}

export default MyPosts;