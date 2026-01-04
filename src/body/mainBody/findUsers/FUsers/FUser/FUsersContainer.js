import {connect} from "react-redux";
import FUsers from "./FUsers";
import {
    followActionCreator, nowPageNumberActionCreator,
    totalUsersCountActionCreator,
    unfollowActionCreator,
    usersPushActionCreator
} from "../../../../../redux/usersReducer";

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

export const FUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FUsers);