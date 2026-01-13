import React from "react";
import {connect} from "react-redux";
import {fetchingStatus, setPhoto, setUserData} from "../../redux/authReducer";
import axios from "axios";
import {Header} from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.fetchingStatus(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
        }).then(
            (response) => {
                this.props.setUserData(response.data.data);
            })
            .then((response) => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.profileId}`, {
                    withCredentials: true,
                    headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
                }).then((response) => {
                    this.props.setPhoto(response.data.photos.small);
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