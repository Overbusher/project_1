import {Dialog} from "./dialog/Dialog";


export const Dialogs = (props) => {
    const {
        dialogData = [],
    } = props;

    return (
        <div>
            {dialogData.map((data) => (<Dialog key={data.key} {...data}/>))}
        </div>
    )
}
