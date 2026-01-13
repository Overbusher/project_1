import React from "react";
import {fetchingStatus, inputUserData, userIdSet} from "../../../../redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "../../../common/withRouter/WithRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = 32717;
        }
        this.props.userIdSet(profileId);
        this.props.fetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`, {
            withCredentials: true,
            headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
        }).then((response) => {
            this.props.inputUserData(response.data);
            this.props.fetchingStatus(false);
        });
    }

    render() {
        return (<Profile {...this.props} />)
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.profilePage.isFetching,
        userData: state.profilePage.userData,
        userId: state.profilePage.userId,

    }
}



export default connect(mapStateToProps, {fetchingStatus, inputUserData, userIdSet})(withRouter(ProfileContainer))