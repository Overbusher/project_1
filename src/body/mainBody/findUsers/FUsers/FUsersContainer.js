import {connect} from "react-redux";
import {
    followActionCreator, isFetchingActionCreator, nowPageNumberActionCreator,
    totalUsersCountActionCreator,
    unfollowActionCreator,
    usersPushActionCreator
} from "../../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import FUsers from "./FUsers";

class FUsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchingStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersOnPageCount}`, {
            withCredentials: true,
            headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
        }).then((response) => {
            this.props.usersPush(response.data.items)
            this.props.totalCount(response.data.totalCount)
            this.props.fetchingStatus(false)
        });
    }

    onPageChanged = (p) => {
        this.props.fetchingStatus(true)
        this.props.nowPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`).then((response) => {
            this.props.usersPush(response.data.items)
            this.props.fetchingStatus(false)
        });

    }

    render() {
        return <FUsers totalUsersCount={this.props.totalUsersCount}
                       usersOnPageCount={this.props.usersOnPageCount}
                       usersPageNumber={this.props.usersPageNumber}
                       onPageChanged={this.onPageChanged}
                       usersData={this.props.usersData}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}
                       fetchingStatus={this.props.fetchingStatus}    />
    }
}

const mapStateToProps = (state) => {

    return {
        usersData: state.fusersPage.usersData,
        usersOnPageCount: state.fusersPage.usersOnPageCount,
        totalUsersCount: state.fusersPage.totalUsersCount,
        usersPageNumber: state.fusersPage.usersPageNumber,
        isFetching: state.fusersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        usersPush: (users) => {
            dispatch(usersPushActionCreator(users));
        },
        totalCount: (count) => {
            dispatch(totalUsersCountActionCreator(count));
        },
        nowPage: (number) => {
            dispatch(nowPageNumberActionCreator(number));
        },
        fetchingStatus: (status) => {
            dispatch(isFetchingActionCreator(status));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FUsersContainer);