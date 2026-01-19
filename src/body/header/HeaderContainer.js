import React from "react";
import {connect} from "react-redux";
import {getAuth} from "../../redux/authReducer";
import {Header} from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    };


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileId: state.authPage.id,
        photo: state.authPage.photo,
        login: state.authPage.login,
        isAuth: state.authPage.isAuth,
    }
}

export default connect(mapStateToProps, {getAuth})(HeaderContainer);