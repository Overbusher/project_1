import {Dialog} from "./dialog/Dialog";


export const Dialogs = (props) => {
    let dialogData = props.dialogData.map(post =>
        <Dialog key={post.id} id={post.id}
              name={post.name}/>)

    return (
        <div>
            {dialogData}
        </div>
    )
}
