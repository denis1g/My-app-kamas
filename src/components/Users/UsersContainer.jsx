import React from 'react';
import {connect} from 'react-redux';
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFollowingProgress,
	toggleIsFecthing,
	unfollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.toggleIsFecthing(true);
		
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFecthing(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}
	
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFecthing(true);
		this.props.setCurrentPage(pageNumber);
		
		usersAPI.getUsers2(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFecthing(false);
				this.props.setUsers(data.items);
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
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				followingInProgress={this.props.followingInProgress}
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
		isFecthing: state.usersPage.isFecthing,
		followingInProgress: state.usersPage.followingInProgress
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

export default connect(mapStateToProps, {
	follow, unfollow, setUsers,
	setCurrentPage, setTotalUsersCount, toggleIsFecthing,
	toggleFollowingProgress
})(UsersContainer);
// toggleIsFecthing: toggleIsFecthingAC
