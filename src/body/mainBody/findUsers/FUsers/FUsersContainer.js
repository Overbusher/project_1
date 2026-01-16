import {connect} from "react-redux";
import {
    fetchingStatus, follow, isItLoading,
    nowPage, totalUCount,
    unfollow, usersPush
} from "../../../../redux/usersReducer";
import React from "react";
import FUsers from "./FUsers";
import {followDelete, followPost, getUsers} from "../../../../api/api";


class FUsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.fetchingStatus(true)
            getUsers(this.props.usersPageNumber, this.props.usersOnPageCount).then((data) => {
                this.props.usersPush(data.items)
                this.props.totalUCount(data.totalCount)
                this.props.fetchingStatus(false)
            });
        } else this.props.fetchingStatus(false)
    }

    onPageChanged = (p) => {
        this.props.fetchingStatus(true)
        this.props.nowPage(p)
        getUsers(p, this.props.usersOnPageCount).then((data) => {
            this.props.usersPush(data.items)
            this.props.fetchingStatus(false)
        })
        ;

    }

    isOnFollow = (id) => {
        this.props.isItLoading(true, id)
        followPost(id).then((data) => {
                if (data.resultCode === 0) {
                    this.props.follow(id);
                }
            this.props.isItLoading(false, id)
            }
        );
    }

    isOnUnfollow = (id) => {
        this.props.isItLoading(true, id)
        followDelete(id).then((data) => {
            if (data.resultCode === 0) {
                this.props.unfollow(id)
            }
            this.props.isItLoading(false, id)
        });
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
})(FUsersContainer);