import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = state => {
    return {
        dialogData: state.messagesPage.dialogData,
    }
}


export const DialogsContainer = compose(connect(mapStateToProps),withAuthRedirect)(Dialogs);