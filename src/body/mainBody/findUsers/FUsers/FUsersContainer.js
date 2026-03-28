import React from "react";
import {connect} from "react-redux";
import {
    followDelete,
    followPost,
    getUsers,
    getUsersUpdate,
} from "../../../../redux/usersReducer";
import FUsers from "./FUsers";
import {compose} from "redux";


class FUsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.usersData, this.props.usersPageNumber, this.props.usersOnPageCount)
    }

    onPageChanged = (p) => {
        this.props.getUsersUpdate(p, this.props.usersOnPageCount)
    }

    isOnFollow = (id) => {
        this.props.followPost(id)
    }

    isOnUnfollow = (id) => {
        this.props.followDelete(id)
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

export default compose (connect(mapStateToProps, {
    getUsers,
    getUsersUpdate,
    followPost,
    followDelete,
}))(FUsersContainer);