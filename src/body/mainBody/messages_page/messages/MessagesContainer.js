import {Messages} from "./Messages";
import {addMessageActionCreator, inputMessageActionCreator} from "../../../../redux/messagesReducer";

export const MessagesContainer = (props) => {

    let state = props.store.getState();
    let messageData = state.messagesPage.messageData;
    let inputMessageData = state.messagesPage.inputMessageData;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let isChange = (inputText) => {
        props.store.dispatch(inputMessageActionCreator(inputText));
    }

    return (
        <Messages isChange={isChange}
                  addMessage={addMessage}
                  messageData={messageData}
                  inputMessageData={inputMessageData} />
    )
}