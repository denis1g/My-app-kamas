import React from 'react';
import {connect} from 'react-redux';
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow}
	from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFecthing,
	getPageSize,
	getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
	
	componentDidMount() {
		
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	
	onPageChanged = (pageNumber) => {
		
		this.props.getUsers(pageNumber, this.props.pageSize);
	};
	
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

// let mapStateToProps = (state) => {
// 	return {
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		pageSize: state.usersPage.pageSize,
// 		currentPage: state.usersPage.currentPage,
// 		users: state.usersPage.users,
// 		isFecthing: state.usersPage.isFecthing,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// };

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		totalUsersCount: getTotalUsersCount(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		isFecthing: getIsFecthing(state),
		followingInProgress: getFollowingInProgress(state)
	}
};


export default compose(
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
	})
)(UsersContainer);


