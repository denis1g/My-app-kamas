import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import state from "./redux/state";


const App = (props) => {
	return (
		
			<div className="app-wrapper">
				
				<Header/>
				<Navbar state={props.state.sidebar.friends}/>
				
				<div className="app-wrapper-content">
					<Route exact path='/dialogs'
					       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
					<Route path='/profile'
					       render={() => <Profile state={props.state.profilePage}/>}/>
				</div>
			</div>
	);
}

export default App;
