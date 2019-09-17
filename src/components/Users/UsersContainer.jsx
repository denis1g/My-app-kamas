import React from 'react';
import {connect} from 'react-redux';
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFecthing,
	unfollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.toggleIsFecthing(true);
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFecthing(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}
	
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFecthing(true);
		
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFecthing(false);
				this.props.setUsers(response.data.items);
			});
	}
	
	render() {
		return <>
			{this.props.isFecthing ?
				<Preloader/>
				: null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
			/>
		</>
	}
}

// mapStateTo -----------------

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFecthing: state.usersPage.isFecthing // ?
	}
}

// let mapDispatchTooProps = (dispatch) => {

// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount));
// 		},
// 		toggleIsFecthing: (isFecthing) => {
// 			dispatch(toggleIsFecthingAC(isFecthing));
// 		},
// 	}
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers,
	setCurrentPage, setTotalUsersCount, toggleIsFecthing})(UsersContainer);
	// toggleIsFecthing: toggleIsFecthingAC
