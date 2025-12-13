import st from './Messages_page.module.css'
import {Dialogs} from "./dialogs/Dialogs";
import {Messages} from "./messages/Messages";
import {InputArea} from "./input_area/Input_area";

export const Messages_page = (props) => {

    return (
        <div className={st.msg}>
                <Dialogs dialogData={props.messagesPage.dialogData}/>
                <Messages messageData={props.messagesPage.messageData}/>
                <InputArea/>
        </div>
    )
}