import st from './Messages_page.module.css'
import {Dialogs} from "./dialogs/Dialogs";
import {Messages} from "./messages/Messages";

export const Messages_page = (props) => {

    return (
        <div className={st.msg}>
            <div>
                <Dialogs dialogData={props.state.messagesPage.dialogData}/>
            </div>
            <div className={st.messages_page}>
                <Messages messageData={props.state.messagesPage.messageData}/>
            </div>
        </div>
    )
}