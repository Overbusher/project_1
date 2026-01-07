import {connect} from "react-redux";
import {
    followActionCreator, nowPageNumberActionCreator,
    totalUsersCountActionCreator,
    unfollowActionCreator,
    usersPushActionCreator
} from "../../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import FUsers from "./FUsers";

class FUsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersOnPageCount}`, {
            withCredentials: true,
            headers: { "API-KEY": "0b41bd70-2e2e-4d42-b2f6-1144d9e838b5" }}).then((response) => {
            this.props.usersPush(response.data.items)
            this.props.totalCount(response.data.totalCount)
        });
    }

    onPageChanged = (p) => {
        this.props.nowPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`).then((response) => {
            this.props.usersPush(response.data.items)
        });

    }

    render() {
        return <FUsers totalUsersCount={this.props.totalUsersCount}
                       usersOnPageCount={this.props.usersOnPageCount}
                       usersPageNumber={this.props.usersPageNumber}
                       onPageChanged={this.onPageChanged}
                       usersData={this.props.usersData}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}/>
    }
}

const mapStateToProps = (state) => {

    return {
        usersData: state.fusersPage.usersData,
        usersOnPageCount: state.fusersPage.usersOnPageCount,
        totalUsersCount: state.fusersPage.totalUsersCount,
        usersPageNumber: state.fusersPage.usersPageNumber,

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FUsersContainer);