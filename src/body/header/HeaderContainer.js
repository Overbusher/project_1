import React from "react";
import {connect} from "react-redux";
import {fetchingStatus, setPhoto, setUserData} from "../../redux/authReducer";
import {Header} from "./Header";
import {getAuth, getProfile} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.fetchingStatus(true);
        getAuth().then(
            (data) => {
                this.props.setUserData(data.data);
            })
            .then((response) => {
                getProfile(this.props.profileId).then((data) => {
                    this.props.setPhoto(data.photos.small);
                    this.props.fetchingStatus(false);
                })
            }
            )
    };


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileId: state.authPage.id,
        photo: state.authPage.photo,
        fullName: state.authPage.fullName,
        login: state.authPage.login,
    }
}

export default connect(mapStateToProps, {setUserData, fetchingStatus, setPhoto})(HeaderContainer);