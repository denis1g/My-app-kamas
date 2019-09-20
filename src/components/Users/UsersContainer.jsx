import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	
	componentDidMount() {
		
		this.props.getUsers(this.props.currentPage, this.props.pageSize);

	}
	
	onPageChanged = (pageNumber) => {
		
		this.props.getUsers(pageNumber, this.props.pageSize);
		
		// this.props.toggleIsFecthing(true);
		// this.props.setCurrentPage(pageNumber);
		
		// usersAPI.getUsers2(pageNumber, this.props.pageSize)
		// 	.then(data => {
		// 		this.props.toggleIsFecthing(false);
		// 		this.props.setUsers(data.items);
		// 	});
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
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				// toggleFollowingProgress={this.props.toggleFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

// mapStateTo -----------------

let mapStateToProps = (state) => {
	return {
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		users: state.usersPage.users,
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
	follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
})(UsersContainer);
