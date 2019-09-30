import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


const MyPosts = (props) => {
	
	let postsElements = props.posts.map((p, index) =>
		<Post message={p.message}
		      likesCount={p.likesCount}
		      key={index}
		/>);
	
	let newPostElement = React.createRef();
	
	let onAddPost = (values) => {
		// debugger
		props.addPost(values.newPostText);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			
			<AddNewPostFormRedux onSubmit={onAddPost}/>
			
			<div className={s.posts}>
				{postsElements}
			</div>
		
		</div>
	)
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
					<Field component={Textarea} name='newPostText'
					       placeholder = 'Post message'
					       validate={[required, maxLength10]}></Field>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
};

const AddNewPostFormRedux =
	reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);


export default MyPosts;