import {Messages} from "./Messages";
import {addMessageActionCreator, inputMessageActionCreator} from "../../../../redux/messagesReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messageData: state.messagesPage.messageData,
        inputMessageData: state.messagesPage.inputMessageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (userID) => {
            dispatch(addMessageActionCreator(userID));
        },
        isChange: (inputText) => {
            dispatch(inputMessageActionCreator(inputText));
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);