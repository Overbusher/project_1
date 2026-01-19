import React from "react";
import {getProfile} from "../../../../redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../../common/withRouter/WithRouter";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

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

let authRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(withRouter(authRedirectComponent))