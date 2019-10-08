import React, {Component, Suspense, lazy } from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
	
	componentDidMount() {
		this.props.initializeApp();
	}
	
	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		
		return (
			
			<div className="app-wrapper">
				
				<HeaderContainer/>
				<Navbar state={this.props.state}/>
				
				<div className="app-wrapper-content">
					
					<Route exact path='/dialogs'
					       render={withSuspense(DialogsContainer)}/>
					
					<Route path='/profile/:userId?'
					       render={withSuspense(ProfileContainer)}/>
					
					<Route path='/users'
					       render={() => <UsersContainer/>}/>
					
					<Route path='/login'
					       render={() => <LoginPage/>}/>
					
					{/*<Route path='/news' render = {()=><News/>}/>*/}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});


let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</BrowserRouter>
};

export default SamuraiJSApp;