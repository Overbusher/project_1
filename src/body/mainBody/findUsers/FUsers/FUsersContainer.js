import {connect} from "react-redux";
import {
    fetchingStatus, follow,
    nowPage, totalUCount,
    unfollow, usersPush
} from "../../../../redux/usersReducer";
import {userIdSet} from "../../../../redux/profileReducer";
import React from "react";
import axios from "axios";
import FUsers from "./FUsers";


class FUsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.fetchingStatus(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersOnPageCount}`, {
                withCredentials: true,
                headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
            }).then((response) => {
                this.props.usersPush(response.data.items)
                this.props.totalUCount(response.data.totalCount)
                this.props.fetchingStatus(false)
            });
        } else this.props.fetchingStatus(false)
    }

    onPageChanged = (p) => {
        this.props.fetchingStatus(true)
        this.props.nowPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`, {
            withCredentials: true,
            headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
        }).then((response) => {
            this.props.usersPush(response.data.items)
            this.props.fetchingStatus(false)
        })
        ;

    }

    isOnFollow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
        }).then((response) => {
                debugger
                if (response.data.resultCode == 0) {
                    this.props.follow(id);
                }
            }
        );
    }

    isOnUnfollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
        }).then((response) => {
            if (response.data.resultCode == 0) {
                this.props.unfollow(id)
            }
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
                       userIdSet={this.props.userIdSet}
                       isOnUnfollow={this.isOnUnfollow}
                       isOnFollow={this.isOnFollow}/>
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
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    usersPush,
    totalUCount,
    nowPage,
    fetchingStatus,
    userIdSet,
})(FUsersContainer);