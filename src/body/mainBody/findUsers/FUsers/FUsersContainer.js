import React from "react";
import {connect} from "react-redux";
import {
    fetchingStatus, follow,
    followDeleteThunkCreator, followPostThunkCreator,
    getUsersThunkCreator, getUsersUpdateThunkCreator,
    isItLoading, nowPage,
    totalUCount, unfollow,
    usersPush
} from "../../../../redux/usersReducer";
import FUsers from "./FUsers";


class FUsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.usersData, this.props.usersPageNumber, this.props.usersOnPageCount)
    }

    onPageChanged = (p) => {
        this.props.getUsersUpdateThunkCreator(p, this.props.usersOnPageCount)
    }

    isOnFollow = (id) => {
        this.props.followPostThunkCreator(id)
    }

    isOnUnfollow = (id) => {
        this.props.followDeleteThunkCreator(id)
    }

    render() {
        return <FUsers totalUsersCount={this.props.totalUsersCount}
                       usersOnPageCount={this.props.usersOnPageCount}
                       usersPageNumber={this.props.usersPageNumber}
                       onPageChanged={this.onPageChanged}
                       usersData={this.props.usersData}
                       isFetching={this.props.isFetching}
                       fetchingStatus={this.props.fetchingStatus}
                       isOnUnfollow={this.isOnUnfollow}
                       isOnFollow={this.isOnFollow}
                       loadingState={this.props.loadingState}/>
    }
}

const mapStateToProps = (state) => {

    return {
        usersData: state.fusersPage.usersData,
        usersOnPageCount: state.fusersPage.usersOnPageCount,
        totalUsersCount: state.fusersPage.totalUsersCount,
        usersPageNumber: state.fusersPage.usersPageNumber,
        isFetching: state.fusersPage.isFetching,
        queryResult: state.fusersPage.queryResult,
        loadingState: state.fusersPage.loadingState,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    usersPush,
    totalUCount,
    nowPage,
    fetchingStatus,
    isItLoading,
    getUsersThunkCreator,
    getUsersUpdateThunkCreator,
    followPostThunkCreator,
    followDeleteThunkCreator,
})(FUsersContainer);