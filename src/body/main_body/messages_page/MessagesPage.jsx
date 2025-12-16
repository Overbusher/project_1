import st from './MessagesPage.module.css'
import {Dialogs} from "./dialogs/Dialogs";
import {Messages} from "./messages/Messages";
import {InputArea} from "./input_area/Input_area";

export const MessagesPage = (props) => {
    return (
        <div className={st.msg}>
            <Dialogs dialogData={props.messagesPage.dialogData}/>
            <Messages messageData={props.messagesPage.messageData}/>
            <InputArea addMessage={props.addMessage}
                       inputMessage={props.inputMessage}
                       inputMessageText={props.messagesPage.inputMessageText}/>
        </div>
    )
}