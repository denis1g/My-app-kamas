import React from 'react';
import {Route} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
	
	return (
		
			<div className="app-wrapper">
				
				
				<Header/>
				<Navbar state={props.state}/>
				
				<div className="app-wrapper-content">
					
					<Route exact path='/dialogs'
					       render={() => <DialogsContainer />}/>
					       
					<Route path='/profile'
					       render={() => <Profile />}/>
					       
					<Route path='/users'
						       render={() => <UsersContainer/> }/>
					       
					<Route path='/news' render = {()=><News/>}/>
				</div>
			</div>
	);
}

export default App;
