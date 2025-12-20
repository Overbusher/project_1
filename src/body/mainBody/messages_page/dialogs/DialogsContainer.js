import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

let mapStateToProps = state => {
    return {
        dialogData: state.messagesPage.dialogData
    }
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs);