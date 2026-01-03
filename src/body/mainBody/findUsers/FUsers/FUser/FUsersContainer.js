import {connect} from "react-redux";
import FUsers from "./FUsers";
import {followActionCreator, unfollowActionCreator, usersPushActionCreator} from "../../../../../redux/usersReducer";

const mapStateToProps = (state) => {

    return {
        usersData: state.fusersPage.usersData,
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
        }
    }
}

export const FUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FUsers);