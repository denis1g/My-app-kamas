import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import './index.css';
import App from './App';
import {Provider} from "react-redux";

// перерисовка ф.
 let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				
				<App/>
				
				{/*<App state={state}*/}
				{/*     dispatch={store.dispatch.bind(store)}*/}
				{/*     store={store}*/}
				{/*/>*/}
			</Provider>
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
