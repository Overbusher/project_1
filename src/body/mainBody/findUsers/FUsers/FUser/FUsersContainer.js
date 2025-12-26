import {connect} from "react-redux";
import {FUsers} from "./FUsers";
import {followActionCreator, unfollowActionCreator} from "../../../../../redux/usersReducer";

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
        }
    }
}

export const FUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FUsers);