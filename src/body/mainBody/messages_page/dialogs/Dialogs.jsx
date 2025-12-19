import {Dialog} from "./dialog/Dialog";
import st from "./Dialogs.module.css"

export const Dialogs = (props) => {
    let state= props.store.getState();

    let dialogData = state.messagesPage.dialogData.map(post =>
        <Dialog key={post.id} id={post.id}
              name={post.name}/>)

    return (
        <div className={st.dialogs}>
            {dialogData}
        </div>
    )
}
