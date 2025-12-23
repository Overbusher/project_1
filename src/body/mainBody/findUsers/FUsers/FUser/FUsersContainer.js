import {connect} from "react-redux";
import {FUsers} from "./FUsers";

const mapStateToProps = (state) => {
return {
    usersData: state.fusersPage.usersData,
}
}

export const FUsersContainer = connect(mapStateToProps)(FUsers);