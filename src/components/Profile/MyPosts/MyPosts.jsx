import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postsElements = props.posts.map((p, index) =>
		<Post message={p.message}
		      likesCount={p.likesCount}
		      key={index}
		/>);
	
	let newPostElement = React.createRef()
	
	let addPost = () => {
		let text = newPostElement.current.value;
		// вызов ф. в state.js
		props.addPost(text);
		newPostElement.current.value = ''; // занулить
	}

	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange}
					          ref={newPostElement}
					          value={props.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			
			<div className={s.posts}>
				{postsElements}
			</div>
		
		</div>
	)
}

export default MyPosts;