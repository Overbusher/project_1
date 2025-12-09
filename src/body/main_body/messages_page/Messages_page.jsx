import st from './Messages_page.module.css'
import {Dialogs} from "./dialogs/Dialogs";
import {Messages} from "./messages/Messages";

export const Messages_page = (props) => {

    return (
        <div className={st.msg}>
            <div>
                <Dialogs {...props}/>
            </div>
            <div className={st.messages_page}>
                <Messages {...props}/>
            </div>
        </div>
    )
}