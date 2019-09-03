import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import './index.css';
import App from './App';

// перерисовка ф.
 let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state}
			     dispatch={store.dispatch.bind(store)}
			     store={store}
			/>
		</BrowserRouter>,
		document.getElementById('root'));
	}

// render 1 раз без изменения
rerenderEntireTree(store.getState()); // убираем (_)

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});


// ---------------
serviceWorker.unregister();
