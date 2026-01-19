import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

let mapStateToProps = state => {
    return {
        dialogData: state.messagesPage.dialogData,
    }
}

let authRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps)(authRedirectComponent);