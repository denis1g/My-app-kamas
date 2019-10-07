import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you', likesCount: 12},
		{id: 2, message: 'It`s my first post', likesCount: 11},
		{id: 3, message: 'la-la', likesCount: 11},
		{id: 4, message: 'da-da', likesCount: 11},
	],
};


it('length of post should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator('den-den');

	// 2. action
	let newState = profileReducer(initialState, action);
	
	// 3. expectation
	expect(newState.posts.length).toBe(5);
	
});


it('message of new post should be da-da', () => {
	// 1. test data
	let action = addPostActionCreator('da-da');

	// 2. action
	let newState = profileReducer(initialState, action);
	
	// 3. expectation
	expect(newState.posts[4].message).toBe('da-da');
	
});

// ------------------------- 3
it('after deleting length of message should be decrement', () => {
	// 1. test data
	let action = deletePost(1);

	// 2. action
	let newState = profileReducer(initialState, action);
	
	// 3. expectation
	expect(newState.posts.length).toBe(3);
	
});

// ------------------------- 4
it('after deleting length of message should not be decrement if id is incorrect', () => {
	// 1. test data
	let action = deletePost(1000);

	// 2. action
	let newState = profileReducer(initialState, action);
	
	// 3. expectation
	expect(newState.posts.length).toBe(4  );
	
});

