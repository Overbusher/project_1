import {Dialog} from "./dialog/Dialog";
import st from "./Dialogs.module.css"

export const Dialogs = (props) => {
    let dialogData = props.dialogData.map(post =>
        <Dialog key={post.id} id={post.id}
              name={post.name}/>)

    return (
        <div className={st.dialogs}>
            {dialogData}
        </div>
    )
}
