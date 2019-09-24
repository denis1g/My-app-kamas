import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow}
	from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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


export default compose(
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
	}),
	withAuthRedirect
)(UsersContainer);


