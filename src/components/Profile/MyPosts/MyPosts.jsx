import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
	
	let postsElements = props.posts.map((p, index) =>
		<Post message={p.message}
		      likesCount={p.likesCount}
		      key={index}
		/>);
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		// вызов ф. в store.js
		// props.addPost();
		props.dispatch(addPostActionCreator());
		// props.updateNewPostText(''); // занулить
	};

	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		// props.updateNewPostText(text);
		props.dispatch(updateNewPostTextActionCreator(text));
	};
	
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