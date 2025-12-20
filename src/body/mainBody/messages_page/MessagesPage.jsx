import st from './MessagesPage.module.css'
import {MessagesContainer} from "./messages/MessagesContainer";
import {DialogsContainer} from "./dialogs/DialogsContainer";

export const MessagesPage = () => {
    return (
        <div className={st.msg}>
            <DialogsContainer/>
            <MessagesContainer/>
        </div>
    )
}