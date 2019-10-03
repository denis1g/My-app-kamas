import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import './index.css';
import App from './App';
import {Provider} from "react-redux";

setInterval(() => {
	store.dispatch({type: 'FAKE'})
}, 1000);

// перерисовка ф.

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'));


// ---------------
serviceWorker.unregister();
