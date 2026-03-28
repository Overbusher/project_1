import React from "react";
import {connect} from "react-redux";
import {getAuth} from "../../redux/authReducer";
import {Header} from "./Header";
import {compose} from "redux";

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

export default compose (connect(mapStateToProps, {getAuth})(HeaderContainer));