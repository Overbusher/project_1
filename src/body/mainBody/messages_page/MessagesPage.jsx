import st from './MessagesPage.module.css'
import {Dialogs} from "./dialogs/Dialogs";
import {MessagesContainer} from "./messages/MessagesContainer";

export const MessagesPage = (props) => {
    return (
        <div className={st.msg}>
            <Dialogs store={props.store}/>
            <MessagesContainer store={props.store}/>
        </div>
    )
}