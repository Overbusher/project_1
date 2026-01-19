import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

let mapStateToProps = state => {
    return {
        dialogData: state.messagesPage.dialogData,
        isAuth: state.authPage.isAuth,
    }
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs);