import {Dialog} from "./dialog/Dialog";


export const Dialogs = (props) => {
    const {
        persona = [],
    } = props;

    return (
        <div>
            {persona.map((data) => (<Dialog key={data.key} {...data}/>))}
        </div>
    )
}
