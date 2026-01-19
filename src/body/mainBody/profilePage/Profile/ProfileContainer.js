import React from "react";
import {getProfile} from "../../../../redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../../common/withRouter/WithRouter";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = 32717;
        }
        this.props.getProfile(profileId);
    }

    render() {
        return (<Profile {...this.props} />)
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.profilePage.isFetching,
        userData: state.profilePage.userData,
    }
}

export default compose(connect(mapStateToProps, {getProfile}),withRouter,withAuthRedirect)(ProfileContainer)