import React from 'react';
import {Route} from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import './App.css';
// import {store._state} from "./redux/state";


const App = (props) => {
	
	return (
		
			<div className="app-wrapper">
				
				
				<Header/>
				<Navbar state={props.state}/>
				
				<div className="app-wrapper-content">
					<Route exact path='/dialogs'
					       render={() => <Dialogs
						       state={props.state.dialogsPage}
						       dispatch={props.dispatch}/>}/>
					<Route path='/profile'
					       render={() => <Profile
						       profilePage={props.state.profilePage}
						       dispatch={props.dispatch}
						       
					       />}/>
					<Route path='/news' render = {()=><News/>}/>
				</div>
			</div>
	);
}

export default App;
