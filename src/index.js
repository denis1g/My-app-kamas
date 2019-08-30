import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {state, addPost, updateNewPostText, myMessage, subscribe} from "./redux/state";
import './index.css';
import App from './App';

// перерисовка ф.
 let rerenderEntireTree = (state) => {
	
	ReactDOM.render(
		<BrowserRouter>
			<App state={state}
			     addPost={addPost}
			     updateNewPostText={updateNewPostText}
			     myMessage={myMessage}	/>
		</BrowserRouter>,
		document.getElementById('root'));
	}

// render 1 раз без изменения
rerenderEntireTree(state);

subscribe(rerenderEntireTree);


serviceWorker.unregister();
