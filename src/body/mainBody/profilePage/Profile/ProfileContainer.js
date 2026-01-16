import React from "react";
import {fetchingStatus, inputUserData} from "../../../../redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../../common/withRouter/WithRouter";
import {getProfile} from "../../../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = 32717;
        }
        this.props.fetchingStatus(true);
        getProfile(profileId).then((data) => {
            this.props.inputUserData(data);
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
    }
}



export default connect(mapStateToProps, {fetchingStatus, inputUserData})(withRouter(ProfileContainer))